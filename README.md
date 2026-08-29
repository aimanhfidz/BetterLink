# BetterLink

A personal master-link page — one URL that holds everything you publish —
with the Threads drafting tool merged in as a second workspace.

Dark, neon-accented UI: colour-blocked link cards, a featured slot, real click
analytics, and a drafts studio behind the topbar Threads button.

## How it works

Two modes off the same static bundle:

| URL | Mode | Who |
|---|---|---|
| `/` | Owner console — links, analytics, Threads drafts, edit | You, signed in |
| `/u/<slug>` | Public link page | Anyone |
| `/?u=<slug>` | Public page, legacy form — kept so shared links survive | Anyone |

No build step. Three files: `index.html`, `styles.css`, `app.js`.

`/u/<slug>` depends on the rewrite in `vercel.json`. Two things that go with it:

- Asset paths must stay **root-absolute** (`/styles.css`, `/app.js`). Relative
  paths resolve against `/u/` and 404.
- Do not re-enable `cleanUrls`. It rewrites `/index.html` to `/`, which
  collides with a rewrite whose destination is `/index.html`, and `/u/<slug>`
  starts 404ing in production while still working locally.

## Data

Postgres on Supabase, project ref `lnhnloppfqgveuhsfiwm`. The project is still
named `aiman-threads-drafts` for historical reasons — it now backs all of
BetterLink, which is the main app; the Threads tool folded into it.

- `link_pages` — one public page per user (slug, name, bio, accent, published)
- `links` — the cards, ordered by `sort_order`
- `link_socials` — the icon row
- `link_events` — append-only view/click log
- `drafts` — Threads posts (pillar, day, hook, body, status)
- `brand_backups` — the spare brand system, profile and pillars as jsonb
- `profiles`, `pillars` — private brand strategy, owner-only. `profiles.audience`
  holds a reader avatar, not a category: the interview asks who they are, what
  they already try, what they say to themselves, and what they follow, and the
  four answers are stitched into one labelled block. Claude writes both tables
  at onboarding; the brand-system screen then edits pillars by hand, so a
  generated system is a starting point rather than the last word. `generate-draft`
  reads whatever is there at the time, and uses the first three hooks per pillar.

Row-level security is the whole security model:

- Anonymous visitors read **only** published pages and their published links.
- Anonymous visitors may **INSERT** into `link_events` but never `SELECT` it,
  so no visitor can read anyone's traffic.
- Only the owner (`auth.uid() = user_id`) can write anything.

`public.profiles` holds private brand strategy (positioning, unfair advantage,
voice rules) and is deliberately **not** used by the public page — it stays
owner-read-only. Public page fields live in `link_pages` instead.

Two brand systems exist at a time and no more: the live one in `profiles` +
`pillars`, and one spare in `brand_backups`. The primary key on
`brand_backups.user_id` is what caps it — there is no third slot to fill.
Finishing the interview keeps the system it replaces, so redoing it is not a
one-way door.

Switching runs `swap_brand_system()` rather than a sequence of client calls.
Putting the spare live means deleting every pillar before writing the new ones,
and that must not be able to stop half-way; the function does it in one
transaction. It is `security invoker`, so RLS still applies and a caller can
only ever move their own rows.

The publishable key in `app.js` is meant to ship in client code; RLS is what
protects the data, not the key.

## Sign-in

Passwordless email link (Supabase Auth). In **Authentication → URL
Configuration**, set:

- **Site URL** — the deployment origin, no wildcard
- **Redirect URLs** — `https://<host>/**`, plus `http://localhost:4173/**` for
  local work

The app sends `emailRedirectTo: location.origin + '/'`. The trailing slash is
deliberate: redirect entries are matched as globs and a bare origin does not
reliably match a `/**` pattern.

## Local development

    python3 dev-server.py ./BetterLink 4173

Then open <http://localhost:4173>. `dev-server.js` is the identical Node
version, kept for machines that have Node; this one needs nothing but the
python3 that ships with macOS.

The dev server mirrors the `/u/:slug` rewrite. It does **not** mirror every
Vercel behaviour, so routing changes are worth re-checking against a real
deployment before trusting them.

Start it from a terminal, not from the editor's preview runner. The project
lives under `~/Desktop`, which macOS keeps behind a file-access prompt, and a
server the preview runner launches itself is denied every read and 404s on
every file. `.claude/launch.json` therefore has no command in it — it only
attaches the preview pane to `http://localhost:4173`, so start the server
first, then open the preview.

## Known gaps

- `link_events` accepts anonymous inserts, so click counts are inflatable by
  anyone who scripts against the endpoint. Fine for personal analytics; add a
  rate limit or an edge function before trusting it commercially.
- `/u/<unknown-slug>` returns HTTP 200 with a client-rendered "not found"
  message, not a real 404 status. Fine for humans, wrong for crawlers.
- Analytics load the last 60 days of events and aggregate in the browser.
  That's fine at personal scale and should become a SQL rollup well before it
  reaches five figures of events.
