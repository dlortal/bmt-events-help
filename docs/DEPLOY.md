# Deploying Events Help

Nothing in this repository is tied to a Cloudflare account: `wrangler.toml` has no account ID, there are no
secrets, and the site is plain static files plus a 20-line Worker for old-link redirects. Moving to a new
account is reconnecting the repository there.

## Set up in a (new) Cloudflare account

Takes about two minutes per site, in the dashboard, no secrets needed.

1. **Workers & Pages → Create application → Import a repository.** Connect GitHub if asked and pick
   `dlortal/bmt-events-help`.
2. Settings:
   | Field | Value |
   | --- | --- |
   | Project name | `bmt-events-help` (must match `name` in `wrangler.toml`) |
   | Production branch | `main` |
   | Build command | `npm run build` |
   | Deploy command | `npx wrangler deploy` |
   | Root directory | leave empty |
   Leave preview builds on and Cloudflare Access off.
3. **Save and Deploy.** The first build gives `https://bmt-events-help.<subdomain>.workers.dev`.

Every push to `main` then deploys production; every pull request gets a preview URL on the pull request.

## Custom domain

Once the zone that holds `events-help.bmt.bafta.org` is in the same Cloudflare account:

1. Worker → **Settings → Domains & Routes → Add → Custom domain**, enter `events-help.bmt.bafta.org`.
   Cloudflare creates the DNS record and certificate.
2. Or uncomment the `[[routes]]` block at the bottom of `wrangler.toml` and push.

If `bafta.org` DNS is not on Cloudflare, ask the DNS owner either to move the `bmt.bafta.org` subzone to this
account (NS delegation) or to CNAME the hostname once the domain has been added via Cloudflare for SaaS.

## Moving away from the old account

1. Set the site up in the new account (above) and confirm the new `workers.dev` URL works.
2. Move the custom domain: remove it from the old Worker, add it to the new one.
3. Delete the old Worker. Nothing else exists in the old account for this site.

## GitHub Actions

`.github/workflows/deploy.yml` builds every push and pull request, so a broken change shows up on
GitHub before it reaches Cloudflare. It can also deploy `main` if you add the repository secrets
`CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit, this account only) and `CLOUDFLARE_ACCOUNT_ID`; the
token is given to the deploy step only. Use Workers Builds or this, not both.

## Deploy from a laptop

```sh
npx wrangler login      # once, opens the browser
npm run deploy          # build, then wrangler deploy
```
