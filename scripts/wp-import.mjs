#!/usr/bin/env node
// WordPress WXR export -> Markdown content for this site.
// Usage: node scripts/wp-import.mjs <export.xml> [repo-root=.]
//
// Handles ordinary posts/pages and the Lore theme's knowledge-base type
// (post type lsvr_kba, taxonomies lsvr_kba_cat and lsvr_kba_tag).
// Writes: src/content/articles/*.md, src/content/pages/*.md, src/content/categories.json,
//         public/_redirects (generated block), content-import/images.txt (source -> local path).
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { join } from "node:path";
import { XMLParser } from "fast-xml-parser";
import TurndownService from "turndown";

const [,, input, root = "."] = process.argv;
if (!input) { console.error("usage: node scripts/wp-import.mjs <export.xml> [repo-root]"); process.exit(1); }

const xml = readFileSync(input, "utf8");
const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: "__cdata", textNodeName: "#text" });
const channel = parser.parse(xml).rss.channel;
const items = [].concat(channel.item ?? []);
const text = (v) => (v == null ? "" : typeof v === "object" ? (v.__cdata ?? v["#text"] ?? "") : String(v));
const arr = (v) => (v == null ? [] : [].concat(v));
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#8217;|&rsquo;/g, "’").replace(/&#8216;|&lsquo;/g, "‘").replace(/&#8220;|&ldquo;/g, "“").replace(/&#8221;|&rdquo;/g, "”").replace(/&#8211;|&ndash;/g, "–").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/￼/g, "").trim();
const yaml = (s) => JSON.stringify(s);
const siteUrl = text(channel.link).replace(/\/$/, "");
const siteRe = new RegExp(siteUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");

// Which post type and taxonomy hold the articles?
const types = new Set(items.map((i) => text(i["wp:post_type"])));
const articleType = types.has("lsvr_kba") ? "lsvr_kba" : "post";
const catTaxonomy = articleType === "lsvr_kba" ? "lsvr_kba_cat" : "category";
const tagTaxonomy = articleType === "lsvr_kba" ? "lsvr_kba_tag" : "post_tag";

// Terms: slug -> { title, parent }
const terms = new Map();
for (const t of arr(channel["wp:term"])) if (text(t["wp:term_taxonomy"]) === catTaxonomy)
  terms.set(text(t["wp:term_slug"]), { title: decode(text(t["wp:term_name"])), parent: text(t["wp:term_parent"]) || null });
for (const c of arr(channel["wp:category"])) if (!terms.has(text(c["wp:category_nicename"])))
  terms.set(text(c["wp:category_nicename"]), { title: decode(text(c["wp:cat_name"])), parent: text(c["wp:category_parent"]) || null });
const rootOf = (slug) => { let s = slug, guard = 0; while (terms.get(s)?.parent && guard++ < 10) s = terms.get(s).parent; return s; };

// HTML -> Markdown
const td = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-", emDelimiter: "*" });
td.keep(["table", "iframe", "video"]);
td.addRule("stripEmptyParas", { filter: (n) => n.nodeName === "P" && !n.textContent.trim() && !n.querySelector("img"), replacement: () => "" });
const images = new Map();
const localImage = (url) => {
  const m = url.match(/wp-content\/uploads\/(.+)$/);
  const local = "/images/" + (m ? m[1] : url.split("/").pop());
  images.set(url.startsWith("http") ? url : siteUrl + url, local);
  return local;
};
const clean = (html) => html
  .replace(/<!--\s*\/?wp:[^>]*-->/g, "")
  .replace(/\[\/?(vc_|et_pb_|caption)[^\]]*\]/g, "")
  .replace(/(src|href)="([^"]*\/wp-content\/uploads\/[^"]+)"/g, (_, a, u) => `${a}="${localImage(u)}"`)
  .replace(siteRe, "");
const summarise = (md) => {
  const para = md.split(/\n\s*\n/).map((p) => p.trim()).find((p) => p && !/^[#>|!\-*\d]/.test(p) && !p.startsWith("<"));
  if (!para) return undefined;
  const plain = para.replace(/[*_`\[\]]/g, "").replace(/\(([^)]*)\)/g, "").replace(/\s+/g, " ");
  if (plain.length <= 180) return plain;
  const cut = plain.slice(0, 180); const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  return end > 60 ? cut.slice(0, end + 1) : cut.replace(/\s\S*$/, "") + "…";
};

const dirs = { articles: join(root, "src/content/articles"), pages: join(root, "src/content/pages") };
for (const d of Object.values(dirs)) { rmSync(d, { recursive: true, force: true }); mkdirSync(d, { recursive: true }); }
mkdirSync(join(root, "content-import"), { recursive: true });

const redirects = [];
const idRedirects = {};
const stats = { articles: 0, drafts: 0, pages: 0, skipped: [] };
const usedSlugs = new Set();
const perTop = new Map();

const ordered_items = [...items.filter((i) => text(i["wp:post_type"]) === articleType), ...items.filter((i) => text(i["wp:post_type"]) !== articleType)];
for (const it of ordered_items) {
  const type = text(it["wp:post_type"]);
  const isArticle = type === articleType, isPage = type === "page";
  if (articleType !== "post" && type === "post") { stats.skipped.push(`${decode(text(it.title))} (legacy blog post)`); continue; }
  if (!isArticle && !isPage) continue;
  const status = text(it["wp:status"]);
  if (status === "trash" || status === "auto-draft") continue;
  const title = decode(text(it.title));
  if (/^hello world!?$/i.test(title) || text(it["wp:post_name"]) === "sample-page") { stats.skipped.push(title); continue; }
  // The WordPress front page becomes the site's home page (its copy goes into site.config); keep its ?p= link pointing at /.
  const linkPath = text(it.link).replace(siteUrl, "").replace(/\/?$/, "/");
  if (isPage && linkPath === "/") { idRedirects[Number(text(it["wp:post_id"]))] = "/"; stats.skipped.push(`${title} (front page; copy lives in site.config)`); continue; }
  const fromTitle = () => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  let slug = text(it["wp:post_name"]);
  if (!slug || /^\d+$/.test(slug)) slug = fromTitle() || slug; // numeric WordPress slugs get a readable one; the old link is redirected
  slug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  slug = decodeURIComponent(slug);
  if (usedSlugs.has(slug)) { stats.skipped.push(`${title} (duplicate of article ${slug})`); continue; }
  usedSlugs.add(slug);
  const id = Number(text(it["wp:post_id"]));
  const body = td.turndown(clean(text(it["content:encoded"]))).replace(/\n{3,}/g, "\n\n").trim();
  const published = status === "publish";
  if (!published) stats.drafts++;

  const common = [
    `title: ${yaml(title)}`,
    `summary: ${yaml(summarise(body) ?? "")}`,
  ];
  const dates = [
    `date: ${text(it["wp:post_date"]).slice(0, 10)}`,
    `updated: ${text(it["wp:post_modified"]).slice(0, 10)}`,
    `status: ${published ? "published" : "draft"}`,
    `wordpress_id: ${id}`,
  ];
  let fm, dir, newPath;
  if (isArticle) {
    const cats = arr(it.category).filter((c) => c["@_domain"] === catTaxonomy).map((c) => c["@_nicename"]).filter((s) => terms.has(s));
    const tags = arr(it.category).filter((c) => c["@_domain"] === tagTaxonomy).map((c) => decode(text(c)));
    // Prefer the most specific term (a child whose parent is also assigned, or any child), else the first.
    const chosen = cats.find((s) => terms.get(s).parent && cats.includes(terms.get(s).parent)) ?? cats.find((s) => terms.get(s).parent) ?? cats[0] ?? "uncategorised";
    const top = rootOf(chosen);
    if (!terms.has(top)) terms.set(top, { title: "Uncategorised", parent: null });
    fm = [...common, `category: ${top}`, chosen !== top ? `subcategory: ${yaml(terms.get(chosen).title)}` : null, `order: ${Number(text(it["wp:menu_order"])) || 100}`, tags.length ? `tags: ${JSON.stringify(tags)}` : null, ...dates];
    dir = dirs.articles; newPath = `/help-articles/${slug}/`; stats.articles++; perTop.set(top, (perTop.get(top) ?? 0) + 1);
  } else {
    fm = [...common, ...dates];
    dir = dirs.pages; newPath = `/${slug}/`; stats.pages++;
  }
  writeFileSync(join(dir, `${slug}.md`), ["---", ...fm.filter(Boolean), "---", "", body, ""].join("\n"));
  idRedirects[id] = newPath;
  const old = text(it.link).replace(siteUrl, "").replace(/\/?$/, "/");
  if (old && old !== "/" && old !== newPath && !old.startsWith("/?")) redirects.push(`${old} ${newPath} 301`);
}

// Categories: parents first, children after, in export order. Child category URLs redirect to the parent page.
const cats = [...terms].map(([slug, t]) => ({ slug, title: t.title, ...(t.parent ? { parent: rootOf(slug) } : {}) })).filter((c) => perTop.has(c.parent ?? c.slug));
const ordered = [...cats.filter((c) => !c.parent), ...cats.filter((c) => c.parent)];
writeFileSync(join(root, "src/content/categories.json"), JSON.stringify(ordered, null, 2) + "\n");
for (const c of cats.filter((c) => c.parent)) redirects.push(`/help-articles-category/${c.slug}/ /help-articles-category/${c.parent}/ 301`);

// _redirects: regenerate the block above the manual marker.
const rpath = join(root, "public/_redirects");
const existing = existsSync(rpath) ? readFileSync(rpath, "utf8") : "";
const marker = "# --- manual ---";
const manual = existing.includes(marker) ? existing.slice(existing.indexOf(marker)) : marker + "\n";
// One rule per source path; Cloudflare rejects duplicates. Query-string links (/?p=ID) cannot live here and go to src/redirects.json for the Worker.
const seen = new Set();
const unique = redirects.filter((r) => { const from = r.split(" ")[0]; if (seen.has(from)) return false; seen.add(from); return true; });
writeFileSync(rpath, `# Old WordPress path links -> new paths. Generated by scripts/wp-import.mjs from ${input.split("/").pop()}; keep manual entries below the marker.\n${unique.join("\n")}\n${manual}`);
writeFileSync(join(root, "src/redirects.json"), JSON.stringify(idRedirects, null, 2) + "\n");

writeFileSync(join(root, "content-import/images.txt"), [...images].map(([src, local]) => `${src} -> public${local}`).join("\n") + "\n");
console.log(JSON.stringify({ site: text(channel.title), articleType, categories: ordered.filter((c) => !c.parent).length, subcategories: ordered.filter((c) => c.parent).length, ...stats, images: images.size, redirects: redirects.length, idRedirects: Object.keys(idRedirects).length }, null, 2));
