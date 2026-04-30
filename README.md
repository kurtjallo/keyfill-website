# Keyfill Website

Marketing site for Keyfill — voice-to-form for Ontario real estate agents.
The product itself (Expo / React Native mobile app) lives at
`/Users/kurt/Desktop/Keyfill/keyfill-app/`.

## Stack

- Next.js 16 (React 19, App Router)
- TypeScript (strict)
- Tailwind CSS v4 (CSS-first config)
- Static export (`output: 'export'`) → Vercel

## Setup

1. Install deps:
   ```bash
   npm install
   ```

## Run

```bash
npm run dev
```

Opens at `http://localhost:3000`.

## Verify end-to-end

1. `npm run dev` boots; `http://localhost:3000` renders.
2. Page shows the Keyfill wordmark + "Voice-to-form for Ontario real estate agents." + "Coming soon."
3. `npm run build` produces a clean static export to `out/`.

## Project layout

```
app/
├── favicon.ico         # from keyfill-app-icon-light
├── globals.css         # Tailwind v4 base + theme tokens
├── layout.tsx          # root layout, metadata, Geist font (placeholder)
└── page.tsx            # placeholder landing — wordmark + tagline
public/
├── keyfill-wordmark-light.svg
├── keyfill-wordmark-dark.svg
├── keyfill-icon-light.svg
└── keyfill-icon-dark.svg
keyfill-vault/          # Obsidian second-brain (see keyfill-vault/CLAUDE.md)
next.config.ts          # output: 'export', images.unoptimized
package.json
tsconfig.json
postcss.config.mjs      # Tailwind v4 via @tailwindcss/postcss
eslint.config.mjs       # flat config (eslint-config-next)
```

Design system, real landing copy, and email capture all land in subsequent commits — see CLAUDE.md `## Web stack` for the goal anchor.

## Known limits

- v1: marketing site only, no analytics yet, no CMS, copy is hand-edited.
- Brand assets (logos, app icons) are copied from the mobile app's `Brand Assets/Logo/` directory; the mobile repo is the source of truth.
