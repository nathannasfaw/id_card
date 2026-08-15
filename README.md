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

| Setting          | Value           |
| ---------------- | --------------- |
| Build command    | `npm run build` |
| Output directory | `dist`          |

No environment variables or redirects are required (single static page).

## Content

All personal content (name, bio, links, phone number) lives in
[`src/config/links.ts`](src/config/links.ts) — edit that one file to update the card.

Assets to drop into `public/`:

- `profile.jpg` — your profile photo (until then, an initials fallback renders)
- `resume.pdf` — currently an empty placeholder; replace with your real resume
