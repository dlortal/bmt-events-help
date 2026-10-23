# BMT Events Help

Static help site for BAFTA Media Technology's Events platform, replacing the WordPress site at https://events-help.bmt.bafta.org/.

Built to the BAFTA brand guidelines (September 2023) with Astro and hosted on a Cloudflare Worker with Static Assets. Content is Markdown in `src/content/`; editors add articles through Claude, which opens a pull request for review. See `CLAUDE.md` for the editing rules.

## Status

Content imported from the WordPress export of 23 October 2026 (57 articles in 10 sections, one draft page). The single referenced image is in place: the one image the articles reference is listed in `content-import/images.txt` and will be added from the uploads backup. Logo is the BMT lockup used on bmt.bafta.org.

See [docs/DEPLOY.md](docs/DEPLOY.md) for Cloudflare setup, custom domains and moving accounts, and [docs/LAUNCH.md](docs/LAUNCH.md) for the launch checklist.

## Fonts

Headings and body copy use GT Walsheim Pro, BAFTA's licensed headline face, self-hosted from `public/fonts/` in four
weights (Thin, Light, Regular, Medium) and declared in `src/styles/fonts.css`. The files are the ones served by the
BMT website theme (bmt.bafta.org). `src/styles/global.css` names the brand fonts in its font stacks ahead of system
fallbacks, so swapping font files only ever touches `public/fonts/` and `src/styles/fonts.css`.

## Develop

```sh
npm install
npm run dev        # local preview at http://localhost:4321
npm run build      # static site into dist/ plus the search index
npm run deploy     # build, then wrangler deploy to Cloudflare
```

## Importing from WordPress

```sh
node scripts/wp-import.mjs path/to/export.xml src/content
```

The importer writes one Markdown file per published post or page with front matter, `categories.json`, a `redirects.txt` (old `?p=` links and slugs to new paths, to paste into `public/_redirects`) and `images.txt` (every image URL to fetch into `public/images/`).

## Shared template

The theme (`src/styles`, `src/layouts`, `src/components`) is identical to `bmt-nucleus-help`. Change it there first, then copy across; only `site.config.ts`, content and `wrangler.toml` differ.
