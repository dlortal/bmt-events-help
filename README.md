# BMT Events Help

Static help site for BAFTA Media Technology's Events platform, replacing the WordPress site at https://events-help.bmt.bafta.org/.

Built to the BAFTA brand guidelines (September 2023) and hosted on a Cloudflare Worker with Static Assets. Content is Markdown in `src/content/`; editors add articles through Claude, which opens a pull request for review.

## Status

Scaffold. Waiting on the WordPress export to import content.

## Importing from WordPress

```sh
npm install
node scripts/wp-import.mjs path/to/export.xml src/content
```

The importer writes one Markdown file per published post or page with front matter, a `categories.yaml`, a `redirects.txt` (old `?p=` links and slugs to new paths) and `images.txt` (every image URL to fetch).
