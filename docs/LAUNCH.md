# Launch checklist

What a help site needs before its domain moves off WordPress, and where each item stands. Items marked **you** need a decision or an action outside the repository.

## Done in the repository

- [x] Static build with validated content; every push to `main` deploys, every pull request is built by CI
- [x] Brand: GT Walsheim Pro (licensed, self-hosted), BMT lockup, BAFTA colours and type scale
- [x] All WordPress content imported; old `?p=` links, slugs and category URLs redirect (301)
- [x] Search (Pagefind, static index, no third-party service)
- [x] 404 page; footer pinned on short pages
- [x] Security headers: CSP, no framing, nosniff, referrer policy, permissions policy
- [x] Favicon set (SVG, 32px PNG, Apple touch icon), web manifest, theme colour
- [x] Share card (Open Graph and Twitter tags) with a generated 1200x630 image
- [x] Sitemap and robots.txt, driven by the `indexable` switch in `site.config.ts`
- [x] Accessibility basics: skip link, landmarks, focus styles, reduced-motion respected, colour contrast on text
- [x] No cookies, no analytics, no third-party scripts, so no consent banner is needed
- [x] Editing by BMT staff through Claude: CLAUDE.md, new-article skill, pull-request flow, CI build

## Before switching the domain

- [ ] **you** Decide `indexable`: `true` lets Google index the help articles (the old Nucleus site was indexed; the old Events site was not). `false` sends noindex and keeps the sitemap off.
- [ ] **you** Confirm the support mailbox or portal link is right on each site (taken from the exports)
- [ ] **you** Cloudflare account to host production (the current one is a test account) — see `docs/DEPLOY.md`
- [ ] **you** DNS: is `bmt.bafta.org` managed in that Cloudflare account? Custom domains need the zone there
- [ ] Attach the custom domain to the Worker; Cloudflare issues the certificate
- [ ] Turn on HSTS at the zone level once HTTPS is confirmed on the custom domain
- [ ] Once the domain is live, check every URL in the old sitemap redirects to the right page
- [ ] Keep the WordPress site read-only for a month, then decommission; cancel its hosting

## After launch

- [ ] If `indexable` is true: submit the sitemap in Google Search Console and request the old URLs be re-crawled
- [ ] Uptime check on the home page (Cloudflare Health Checks or a free monitor)
- [ ] Dependabot or Renovate on the repo for dependency updates (Astro, Pagefind, Wrangler)
- [ ] Branch protection on `main`: pull request required, CI must pass
- [ ] Add BMT editors to a GitHub team with write access; walk one person through adding an article

## Deliberately not included

- Analytics. Cloudflare Web Analytics is cookie-free and needs no banner if wanted later; one script tag in `Base.astro`.
- A contact form. The sites link to the support portal, as the originals did.
- Comments, accounts, or anything that stores data.
