# Putting The Margin online (free)

You'll get a public link like `https://YOURNAME.github.io/the-margin/` — perfect for the
demo. Done once, ~10 minutes. Every time you push a change, the site updates by itself.

---

## Option 1 — GitHub Pages (recommended; gives a proper repo + link)

### A. Make the GitHub repo
1. Sign in (or sign up free) at https://github.com
2. Click **+** (top right) → **New repository**
3. Name it **the-margin**, leave it **Public**, do **not** tick "Add a README"
   (this folder already has one). Click **Create repository**.

### B. Push this folder
This folder is already a Git repository with everything committed. In a terminal,
from inside this folder, run the three lines GitHub shows you (replace YOURNAME):

```
git remote add origin https://github.com/YOURNAME/the-margin.git
git branch -M main
git push -u origin main
```

If it asks you to sign in, follow the prompt (GitHub may ask for a one-time
"personal access token" instead of a password — it walks you through it).

### C. Turn on the website
1. In the repo, go to **Settings → Pages**
2. **Source** → "Deploy from a branch"
3. **Branch** → `main`, folder → `/ (root)`, click **Save**
4. Wait ~1 minute and refresh. GitHub shows your live URL at the top.
   **That's the link to share and demo.**

---

## Option 2 — Netlify (no terminal at all)

1. Go to https://app.netlify.com/drop
2. Drag **this whole folder** onto the page.
3. You instantly get a live URL (e.g. `the-margin.netlify.app`). Done.

Great if you just want a link fast. (GitHub Pages is better long-term because edits
auto-deploy and the team can collaborate.)

---

## A custom domain later (optional)
Either host can point to a domain like `themargin.in` (about ₹700–1,500/year from
Cloudflare or Namecheap). Add it in the host's "Domains" settings. Hold off on any
school-branded domain until the school signs off.

## The editor suite
The "Sign in" link opens the editor demo — `editor@themargin.test` / `demo1234`.
It's a front-end demo; nothing saves yet. Making it fully functional (editors writing
and publishing for real) is the next phase: a backend + database + restricted login.
