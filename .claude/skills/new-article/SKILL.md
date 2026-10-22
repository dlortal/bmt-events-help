---
name: new-article
description: Add a new help article to this site. Use when someone asks to add, create or write a help article, guide or FAQ.
---

# New article

1. Ask, if not already given: the title, which section (list the titles from `src/content/categories.json`), and what the article should say. If the section does not exist, ask whether to add it.
2. Choose the slug from the title: lowercase, hyphens, no stop words dropped. Check `src/content/articles/` for a clash.
3. Write `src/content/articles/<slug>.md` with the front matter from CLAUDE.md, `updated` set to today, `status: published` unless asked for a draft.
4. Write the body in the house style. Open with one sentence that answers the question, then the steps.
5. Run `npm run build`. Fix anything it reports.
6. Create a branch `article/<slug>`, commit with message `Add article: <title>`, push, and open a pull request titled the same. In the description, paste the summary and say which section it appears in.
7. Reply with the pull request link and the preview URL once Cloudflare posts it.
