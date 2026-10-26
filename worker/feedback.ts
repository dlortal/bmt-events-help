// "Was this article helpful?" endpoint (POST /api/feedback, from public/js/feedback.js).
// - Yes/No votes are written to the Worker log as one JSON line each (Workers Logs: filter on
//   "feedback"), so they can be counted per article. Nothing personal is recorded.
// - A comment after "No" is emailed to the support team through Cloudflare Email Service, after a
//   Turnstile check. Setup: docs/FEEDBACK.md.
interface SendEmail {
  send(message: { from: string | { email: string; name?: string }; to: string | string[]; subject: string; text: string }): Promise<unknown>;
}
export interface FeedbackEnv {
  EMAIL?: SendEmail;                // [[send_email]] binding in wrangler.toml
  FEEDBACK_TO?: string;             // where comments go, comma-separated (for example the support desk's email address)
  FEEDBACK_FROM?: string;           // sender on a domain onboarded to Cloudflare Email Service
  TURNSTILE_SECRET?: string;        // Worker secret; required before any comment is emailed
  TURNSTILE_HOSTNAMES?: string;     // optional comma-separated hostnames tokens must come from
  ALLOW_WITHOUT_TURNSTILE?: string; // "true" for local testing only
  FEEDBACK_LIMITER?: { limit(o: { key: string }): Promise<{ success: boolean }> }; // [[ratelimits]]
}

const MAX_BODY = 8 * 1024;
const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
const oneLine = (s: string, max: number) => s.replace(/[\u0000-\u001f\u007f-\u009f]+/g, " ").trim().slice(0, max);

async function turnstileOk(token: string, env: FeedbackEnv, ip: string | null): Promise<boolean> {
  if (!token || token.length > 2048) return false;
  try {
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET!, response: token, ...(ip ? { remoteip: ip } : {}) }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!r.ok) return false;
    const v = (await r.json()) as { success?: boolean; action?: string; hostname?: string };
    const hosts = (env.TURNSTILE_HOSTNAMES ?? "").split(",").map((h) => h.trim()).filter(Boolean);
    return v.success === true && v.action === "feedback" && (!hosts.length || hosts.includes(v.hostname ?? ""));
  } catch { return false; }
}

export async function handleFeedback(request: Request, env: FeedbackEnv): Promise<Response> {
  if (request.method !== "POST") return json(405, { ok: false });
  const url = new URL(request.url);
  const origin = request.headers.get("Origin");
  if (origin && origin !== url.origin) return json(403, { ok: false });
  const type = request.headers.get("Content-Type") ?? "";
  const length = Number(request.headers.get("Content-Length") ?? NaN);
  if (!/^(multipart\/form-data|application\/x-www-form-urlencoded)\b/i.test(type)) return json(415, { ok: false });
  if (!(length > 0 && length <= MAX_BODY)) return json(413, { ok: false });
  const ip = request.headers.get("CF-Connecting-IP");
  if (env.FEEDBACK_LIMITER && !(await env.FEEDBACK_LIMITER.limit({ key: `feedback:${ip ?? "unknown"}` })).success) {
    return json(429, { ok: false });
  }
  let data: FormData;
  try { data = await request.formData(); } catch { return json(400, { ok: false }); }

  const article = String(data.get("article") ?? "");
  const vote = String(data.get("vote") ?? "");
  if (!/^[a-z0-9][a-z0-9-]{0,150}$/.test(article) || (vote !== "yes" && vote !== "no")) return json(400, { ok: false });
  const comment = String(data.get("comment") ?? "").trim();

  if (!comment) {
    console.log(JSON.stringify({ feedback: vote, article })); // counted in Workers Logs
    return json(200, { ok: true });
  }
  if (String(data.get("_hp") ?? "")) return json(200, { ok: true }); // honeypot filled: drop quietly
  if (vote !== "no" || comment.length > 1000) return json(400, { ok: false });

  if (env.TURNSTILE_SECRET) {
    if (!(await turnstileOk(String(data.get("cf-turnstile-response") ?? ""), env, ip))) return json(403, { ok: false });
  } else if (env.ALLOW_WITHOUT_TURNSTILE !== "true") {
    console.error("feedback: TURNSTILE_SECRET is not set; refusing to send (docs/FEEDBACK.md)");
    return json(503, { ok: false });
  }
  const to = (env.FEEDBACK_TO ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  if (!env.EMAIL || !env.FEEDBACK_FROM || !to.length) {
    console.error("feedback: email sending is not configured (EMAIL binding, FEEDBACK_FROM, FEEDBACK_TO)");
    return json(503, { ok: false });
  }

  const title = oneLine(String(data.get("title") ?? ""), 200) || article;
  const page = `${url.origin}/help-articles/${article}/`;
  const text = [
    `Someone answered "No" to "Was this article helpful?" on ${url.host} and left a comment.`,
    "The comment was typed by a member of the public and has not been verified. There is no reply address.",
    "",
    `Article: ${title}`,
    `Address: ${page}`,
    "",
    "----- start of comment -----",
    comment,
    "----- end of comment -----",
  ].join("\n");
  try {
    await env.EMAIL.send({ from: { email: env.FEEDBACK_FROM, name: `${url.host} feedback` }, to, subject: `Help article feedback: ${title}`, text });
  } catch (e) {
    console.error("feedback: send failed", e instanceof Error ? e.message : e);
    return json(502, { ok: false });
  }
  console.log(JSON.stringify({ feedback: "comment", article }));
  return json(200, { ok: true });
}
