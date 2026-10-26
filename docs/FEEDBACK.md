# "Was this article helpful?"

Every help article ends with **Was this article helpful?** and **Yes** / **No** buttons
(`src/components/Feedback.astro`, `public/js/feedback.js`). Answers go to the Worker at
`/api/feedback` (`worker/feedback.ts`).

## What happens now (no setup needed)

- **Yes / No** are counted. Each answer is written to the Worker's log as one line, for example
  `{"feedback":"no","article":"how-to-launch-your-award"}`. Nothing about the visitor is recorded.
  To see them: Cloudflare dashboard → **Workers & Pages** → this Worker → **Logs**, and search for
  `feedback`. Logs are kept for a few days, so export or count them regularly if you want trends.
- After **No**, the visitor is pointed to the support ticket box under the article.

## Turn on comments to the support team

With this switched on, **No** opens a box ("What were you looking for?") and the comment is emailed
to the support team, with the article's name and address. The email says plainly that the text was
typed by a member of the public and is unverified. Spam is kept out by Cloudflare Turnstile and a
limit of 10 posts a minute per visitor.

1. **Sending domain.** In the Cloudflare account that hosts the site, open **Email Service** and
   onboard the domain the email will come from (for example `bmt.bafta.org`). Add the DNS records it
   lists.
2. **Recipient.** Decide where comments go. Sending them to the support desk's email address turns
   each comment into a ticket. Add that address under **Email Routing → Destination addresses** and
   confirm it (or onboard the sending domain fully to send to any address).
3. **Turnstile.** **Turnstile → Add widget**, with the site's hostname, mode Managed. Add the site key
   as the build variable `PUBLIC_TURNSTILE_SITE_KEY` (Worker → **Settings → Build → Variables**) and
   the secret as the Worker secret `TURNSTILE_SECRET`.
4. **Binding.** In `wrangler.toml`, uncomment the `[[send_email]]` block and push.
5. **Variables** on the Worker (**Settings → Variables and secrets**):

   | Name | Value |
   | --- | --- |
   | `FEEDBACK_TO` | Where comments go (comma-separated) |
   | `FEEDBACK_FROM` | Sender on the onboarded domain, for example `help-feedback@bmt.bafta.org` |
   | `TURNSTILE_SECRET` | From step 3 (secret) |
   | `TURNSTILE_HOSTNAMES` | Optional: the site's hostname, so tokens from anywhere else are refused |

6. Answer **No** on an article and send a test comment. If it doesn't arrive, check the Worker logs
   for a `feedback:` line, and Mimecast's held mail.

The site key alone shows the comment box; the Worker only sends once the secret and email settings
are there too, so set them together. For local testing only, `ALLOW_WITHOUT_TURNSTILE = "true"`
sends without Turnstile; never set it on the live Worker.

## Switch it off

Set `feedback: false` in `site.config.ts`.
