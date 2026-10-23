import type { APIRoute } from "astro";
import { site } from "../../site.config";
// Crawling stays allowed in both modes: a page can only be de-indexed if the crawler can read its noindex tag.
export const GET: APIRoute = ({ site: siteUrl }) => {
  const body = site.indexable === false
    ? "User-agent: *\nAllow: /\n"
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap-index.xml", siteUrl)}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
