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
- `profile.jpg` — not present yet; add it to replace the initials fallback
