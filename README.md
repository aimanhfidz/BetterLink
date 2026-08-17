# BetterLink

A personal master-link page — one URL that holds everything you publish.

Dark, neon-accented UI: colour-blocked link cards, a featured slot, real click
analytics, and a Threads drafting studio folded in as a second workspace.

## How it works

Two modes off the same static bundle:

| URL | Mode | Who |
|---|---|---|
| `/` | Owner console — edit, analytics, Threads studio | You, signed in |
| `/?u=<slug>` | Public link page | Anyone |

No build step. Three files: `index.html`, `styles.css`, `app.js`.

## Data

Postgres on Supabase, project `aiman-threads-drafts` (`lnhnloppfqgveuhsfiwm`).

- `link_pages` — one public page per user (slug, name, bio, accent, published)
- `links` — the cards, ordered by `sort_order`
- `link_socials` — the icon row
- `link_events` — append-only view/click log

Row-level security is the whole security model:

- Anonymous visitors read **only** published pages and their published links.
- Anonymous visitors may **INSERT** into `link_events` but never `SELECT` it,
  so no visitor can read anyone's traffic.
- Only the owner (`auth.uid() = user_id`) can write anything.

`public.profiles` holds private brand strategy (positioning, unfair advantage,
voice rules) and is deliberately **not** used by the public page — it stays
owner-read-only. Public page fields live in `link_pages` instead.

The publishable key in `app.js` is meant to ship in client code; RLS is what
protects the data, not the key.

## Sign-in

Passwordless email link (Supabase Auth). Add your deployment origin to
**Authentication → URL Configuration → Redirect URLs** in the Supabase
dashboard, or the emailed link will bounce back to localhost.

## Known gaps

- `link_events` accepts anonymous inserts, so click counts are inflatable by
  anyone who scripts against the endpoint. Fine for personal analytics; add a
  rate limit or an edge function before trusting it commercially.
- The 14 rows in `drafts` predate auth and have `user_id = NULL`, which no RLS
  policy can match — they are invisible to every client. They need to be
  assigned an owner before the Threads studio will show them.
