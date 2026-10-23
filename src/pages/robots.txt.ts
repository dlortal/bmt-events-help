import type { APIRoute } from "astro";
import { site } from "../../site.config";

// Known AI training and answer-engine crawlers. robots.txt is advisory; Cloudflare's AI bot blocking enforces it.
const aiBots = [
  "GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-Web", "Claude-SearchBot", "anthropic-ai",
  "Google-Extended", "Applebot-Extended", "PerplexityBot", "Perplexity-User", "CCBot", "Bytespider", "Amazonbot",
  "meta-externalagent", "meta-externalfetcher", "FacebookBot", "cohere-ai", "Diffbot", "AI2Bot", "Ai2Bot-Dolma",
  "YouBot", "DuckAssistBot", "ImagesiftBot", "Omgilibot", "Timpibot", "PetalBot", "MistralAI-User", "Kangaroo Bot",
];

// Crawling by search engines stays allowed in both modes: a page can only be de-indexed if its noindex tag can be read.
export const GET: APIRoute = ({ site: siteUrl }) => {
  const parts: string[] = [];
  if (site.blockAiCrawlers) parts.push(aiBots.map((ua) => `User-agent: ${ua}\nDisallow: /`).join("\n\n"), "");
  parts.push("User-agent: *\nAllow: /");
  if (site.indexable !== false) parts.push("", `Sitemap: ${new URL("/sitemap-index.xml", siteUrl)}`);
  return new Response(parts.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
