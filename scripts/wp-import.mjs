#!/usr/bin/env node
// WordPress WXR export -> Markdown articles with front matter.
// Usage: node wp-import.mjs <export.xml> <out-dir>
// Writes one .md per published post/page, categories.yaml, redirects.txt and images.txt.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { XMLParser } from "fast-xml-parser";
import TurndownService from "turndown";

const [,, input, outDir = "./out"] = process.argv;
if (!input) { console.error("usage: node wp-import.mjs <export.xml> <out-dir>"); process.exit(1); }

const xml = readFileSync(input, "utf8");
const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: "__cdata", textNodeName: "#text" });
const doc = parser.parse(xml);
const channel = doc.rss.channel;
const items = [].concat(channel.item ?? []);
const text = (v) => (v == null ? "" : typeof v === "object" ? (v.__cdata ?? v["#text"] ?? "") : String(v));
const arr = (v) => (v == null ? [] : [].concat(v));

const td = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" });
td.keep(["table", "thead", "tbody", "tr", "th", "td", "iframe"]);
// Strip Gutenberg comments and WP shortcodes we cannot render.
const clean = (html) => html.replace(/<!--\s*\/?wp:[^>]*-->/g, "").replace(/\[\/?(vc_|et_pb_)[^\]]*\]/g, "");

const slugify = (s) => s.toLowerCase().replace(/&amp;/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const siteUrl = text(channel.link).replace(/\/$/, "");
const categories = new Map();
for (const c of arr(channel["wp:category"])) {
  categories.set(text(c["wp:category_nicename"]), { title: text(c["wp:cat_name"]), parent: text(c["wp:category_parent"]) || null });
}

mkdirSync(join(outDir, "articles"), { recursive: true });
mkdirSync(join(outDir, "pages"), { recursive: true });
const redirects = [], images = new Set(), summary = { posts: 0, pages: 0, drafts: 0, attachments: 0, other: {} };

for (const it of items) {
  const type = text(it["wp:post_type"]);
  const status = text(it["wp:status"]);
  if (type === "attachment") { summary.attachments++; images.add(text(it["wp:attachment_url"])); continue; }
  if (!["post", "page"].includes(type)) { summary.other[type] = (summary.other[type] ?? 0) + 1; continue; }
  if (status !== "publish") { summary.drafts++; }
  const title = text(it.title).trim();
  const slug = text(it["wp:post_name"]) || slugify(title);
  const id = text(it["wp:post_id"]);
  const html = clean(text(it["content:encoded"]));
  for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/g)) images.add(m[1]);
  const cats = arr(it.category).filter((c) => c["@_domain"] === "category").map((c) => c["@_nicename"]);
  const body = td.turndown(html).replace(new RegExp(siteUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "");
  const fm = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `slug: ${slug}`,
    `wordpress_id: ${id}`,
    `status: ${status === "publish" ? "published" : "draft"}`,
    `date: ${text(it["wp:post_date"]).slice(0, 10)}`,
    `updated: ${text(it["wp:post_modified"]).slice(0, 10)}`,
    cats.length ? `category: ${cats[0]}` : null,
    cats.length > 1 ? `subcategory: ${JSON.stringify(categories.get(cats[1])?.title ?? cats[1])}` : null,
    `order: ${text(it["wp:menu_order"]) || 0}`,
    "---",
    "",
  ].filter((l) => l !== null).join("\n");
  const dir = type === "post" ? "articles" : "pages";
  writeFileSync(join(outDir, dir, `${slug}.md`), fm + body.trim() + "\n");
  summary[type === "post" ? "posts" : "pages"]++;
  const newPath = type === "post" ? `/help-articles/${slug}/` : `/${slug}/`;
  redirects.push(`/?p=${id} ${newPath} 301`);
  const oldLink = text(it.link).replace(siteUrl, "");
  if (oldLink && oldLink !== newPath) redirects.push(`${oldLink} ${newPath} 301`);
}

writeFileSync(join(outDir, "categories.yaml"), [...categories].map(([slug, c]) => `- slug: ${slug}\n  title: ${JSON.stringify(c.title)}${c.parent ? `\n  parent: ${c.parent}` : ""}`).join("\n") + "\n");
writeFileSync(join(outDir, "redirects.txt"), redirects.join("\n") + "\n");
writeFileSync(join(outDir, "images.txt"), [...images].join("\n") + "\n");
console.log(JSON.stringify({ site: text(channel.title), url: siteUrl, categories: categories.size, ...summary, images: images.size }, null, 2));
