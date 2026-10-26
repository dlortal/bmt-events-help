// "Was this article helpful?" (src/components/Feedback.astro). Posts to /api/feedback.
(() => {
  const box = document.querySelector("[data-feedback]");
  if (!box) return;
  const status = box.querySelector(".feedback-status");
  const form = box.querySelector(".feedback-form");
  const choices = [...box.querySelectorAll(".feedback-choice")];
  const sitekey = box.dataset.sitekey;
  const base = { article: box.dataset.article, title: box.dataset.title };
  let widget;

  const post = (fields) => {
    const body = new FormData();
    for (const [k, v] of Object.entries({ ...base, ...fields })) if (v != null) body.append(k, v);
    return fetch("/api/feedback", { method: "POST", body, headers: { Accept: "application/json" } });
  };
  const loadTurnstile = () => new Promise((resolve, reject) => {
    if (window.turnstile) return resolve(window.turnstile);
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    s.async = true; s.onload = () => resolve(window.turnstile); s.onerror = reject;
    document.head.append(s);
  });

  choices.forEach((btn) => btn.addEventListener("click", async () => {
    const vote = btn.dataset.vote;
    choices.forEach((b) => { b.disabled = true; b.setAttribute("aria-pressed", String(b === btn)); });
    post({ vote }).catch(() => {}); // the vote is a count only; nothing to tell the reader if it fails
    if (vote === "yes") { status.textContent = "Thanks for your feedback."; return; }
    if (!sitekey) { status.textContent = "Thanks for letting us know. If you still need help, the support team can answer your question."; return; }
    form.hidden = false;
    form.querySelector("textarea").focus();
    try {
      const t = await loadTurnstile();
      widget = t.render(form.querySelector(".feedback-turnstile"), { sitekey, action: "feedback" });
    } catch { /* without Turnstile the comment can't be sent; the submit handler says so */ }
  }));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const comment = form.comment.value.trim();
    if (!comment) { status.textContent = "Please type a comment first."; form.comment.focus(); return; }
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    try {
      const res = await post({ vote: "no", comment, _hp: form._hp.value,
        "cf-turnstile-response": window.turnstile && widget !== undefined ? window.turnstile.getResponse(widget) : "" });
      if (!res.ok) throw new Error(String(res.status));
      form.hidden = true;
      status.textContent = "Thanks. Your comment has gone to the support team. If you need a reply, please submit a support ticket.";
    } catch {
      button.disabled = false;
      if (window.turnstile && widget !== undefined) window.turnstile.reset(widget);
      status.textContent = "Sorry, your comment couldn't be sent. Please submit a support ticket instead.";
    }
  });
})();
