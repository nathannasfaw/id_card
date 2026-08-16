# Marco Walther — Digital ID Card

A minimalist dark-mode Linktree-style digital ID card. Built with Vite, React 18,
TypeScript, Tailwind CSS v4, Framer Motion, and Lucide icons.

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Output goes to `dist/`. Preview the production build with `npm run preview`.

## Fonts

Inter is self-hosted via `@fontsource-variable/inter` and imported in
[`src/index.css`](src/index.css) — there are no runtime requests to Google Fonts.
The build emits every unicode subset, but each `@font-face` carries a
`unicode-range`, so a browser downloads only the one it needs (latin, ~48 kB).
The files land in `dist/assets/` under hashed names and so pick up the immutable
`Cache-Control` header from [`public/_headers`](public/_headers).

## Deploy to Cloudflare Pages

Deployment runs through Cloudflare's Git integration: every push to `main` builds
and deploys to production, and every pull request gets its own preview URL.

One-time setup — in the Cloudflare dashboard, go to **Workers & Pages → Create →
Pages → Connect to Git**, pick the `marco-walther/id-card` repository, and use:

| Setting              | Value           |
| -------------------- | --------------- |
| Production branch    | `main`          |
| Framework preset     | None (or Vite)  |
| Build command        | `npm run build` |
| Build output directory | `dist`        |
| Root directory       | _(leave blank)_ |

No environment variables or redirects are required (single static page).

- Node version is pinned to 22 by [`.node-version`](.node-version); Cloudflare
  reads that file, so it does not need a `NODE_VERSION` variable.
- Cache and security headers are set in [`public/_headers`](public/_headers),
  which Vite copies to the root of `dist/`.

After the first build the site is live at `<project-name>.pages.dev`. To add a
custom domain, use **Custom domains** on the Pages project.

## Content

All personal content (name, bio, links, phone number) lives in
[`src/config/links.ts`](src/config/links.ts) — edit that one file to update the card.

Assets in `public/`:

- `resume.pdf` — the live resume served by the "Resume" link
- `contact.vcf` — the downloadable contact card (see below)
- `profile.jpg` — not present yet; add it to replace the initials fallback

## Contact card

The "Save my contact" button serves [`public/contact.vcf`](public/contact.vcf),
a vCard 3.0 file carrying the name, employer, mobile number, LinkedIn URL, and
an embedded photo. Tapping it on iOS opens the native contact preview with an
**Add Contact** action; Android downloads it and imports on tap.

Things to keep in mind when editing it:

- **The photo is embedded**, not linked — `headshot.jpg` (400×400, 23 kB) is
  base64-encoded into the `PHOTO` property, which is why the file is ~32 kB.
  Contact apps largely ignore photos referenced by URL, so embedding is what
  makes the picture actually show up. `headshot.jpg` is kept in the repo as the
  source for regenerating that block.
- **Long lines are folded** per RFC 2426: no line exceeds 75 characters, and
  continuation lines begin with a single space. That leading space is
  load-bearing — an editor that strips trailing/leading whitespace will corrupt
  the photo.
- **CRLF line endings are required.** [`.gitattributes`](.gitattributes)
  enforces `*.vcf text eol=crlf` so the file stays valid when Cloudflare checks
  the repo out on Linux.
- The phone number appears in both `contact.vcf` and
  [`src/config/links.ts`](src/config/links.ts). Update both.

The card carries no email address. Add one with an `EMAIL:you@example.com`
line if you want it public.
