// Serves the static site and keeps old WordPress "?p=ID" links working.
// Path-based redirects live in public/_redirects; this only handles the query-string form,
// which the assets layer cannot match. Everything else goes straight to the static assets.
import redirects from "../src/redirects.json";

interface Env { ASSETS: { fetch: typeof fetch } }

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const p = url.searchParams.get("p");
    const target = p && (redirects as Record<string, string>)[p];
    if (target) return Response.redirect(new URL(target, url.origin).toString(), 301);
    return env.ASSETS.fetch(request);
  },
};
