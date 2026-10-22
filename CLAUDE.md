# Events Help — guide for Claude

This is a static help site for BAFTA Media Technology's Events platform. Content is Markdown; the build is Astro; hosting is a Cloudflare Worker with Static Assets. Most requests here are "add an article" or "change an article". Use the `new-article` skill for the first.

## Where things live

| Path | What |
| --- | --- |
| `src/content/articles/<slug>.md` | One help article per file. The filename is the URL: `/help-articles/<slug>/`. |
| `src/content/pages/<slug>.md` | Standalone pages such as About. URL `/<slug>/`. |
| `src/content/categories.json` | Ordered list of sections. Add a section here before using it in an article. |
| `site.config.ts` | Site name, contact mailbox, nav, accent colour. |
| `src/styles/global.css` | Brand tokens and all styling. |
| `public/_redirects` | Old WordPress links. Keep manual entries below the marker line. |

## Article front matter

```yaml
---
title: Creating an entry              # sentence case
summary: One or two sentences that answer the question in short.
category: entries                     # slug from categories.json
subcategory: Submitting               # optional, free text, groups articles within a section
order: 10                             # lower appears first
updated: 2026-10-22                   # today's date when you change the article
status: published                     # or draft: builds in previews, hidden in production
---
```

## House style

- Write to the reader as "you". Short sentences. One step per numbered item.
- Headings are sentence case. Use `##` for sections inside an article; never `#`.
- Prefer a numbered list for procedures and a table for options or compatibility.
- Name buttons and menu items in **bold**, exactly as they appear on screen.
- Images go in `public/images/` and need alt text.
- British English. No exclamation marks.

## Do not change without asking

`src/styles/global.css`, `src/layouts/`, `src/components/`, `wrangler.toml`, `public/_headers`, `.github/`. These carry the brand and the deployment.

## Before you finish

Run `npm run build`. A missing or misspelt front-matter field fails the build with a clear message. Then open a pull request; Cloudflare posts a preview link on it and a reviewer merges.
