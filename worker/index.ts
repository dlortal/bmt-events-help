// Serves the static site. Runs first only for "/" (old WordPress "?p=ID" links) and /api/*
// ("Was this article helpful?" feedback); everything else goes straight to the static assets,
// where public/_redirects handles the old path-based links.
import redirects from "../src/redirects.json";
import { handleFeedback, type FeedbackEnv } from "./feedback";

interface Env extends FeedbackEnv { ASSETS: { fetch: typeof fetch } }

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/feedback") return handleFeedback(request, env);
    const p = url.searchParams.get("p");
    const target = p && Object.hasOwn(redirects, p) ? (redirects as Record<string, string>)[p] : undefined;
    if (target) return Response.redirect(new URL(target, url.origin).toString(), 301);
    return env.ASSETS.fetch(request);
  },
};
