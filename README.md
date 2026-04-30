# Keyfill Website

Marketing site for Keyfill — voice-to-form for Ontario real estate agents.
The product itself (Expo / React Native mobile app) lives at
`/Users/kurt/Desktop/Keyfill/keyfill-app/`.

## Stack

- Next.js 15 (React 19, App Router)
- TypeScript (strict)
- Tailwind CSS
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
2. Hero + email capture present, logo crisp at retina.
3. `npm run build` produces a clean static export to `out/`.

## Project layout

_TBD — Next.js scaffold lands in a follow-up commit._

## Known limits

- v1: marketing site only, no analytics yet, no CMS, copy is hand-edited.
- Brand assets (logos, app icons) are copied from the mobile app's `Brand Assets/Logo/` directory; the mobile repo is the source of truth.
