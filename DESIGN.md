# Design System — Keyfill (Ledger Modernism)

## Product Context

- **What this is:** Marketing site for Keyfill — voice-to-form for Ontario real estate agents. Agent dictates a deal once, every applicable rental/lease form auto-fills in parallel, agent emails the PDFs. Signing happens in Skyslope (third party).
- **Who it's for:** Ontario residential rental agents (primary). Investors served implicitly by the same content (parallel-fill thesis as defensible product wedge, privacy-proxy architecture as moat).
- **Space:** Real estate / proptech / agent tooling.
- **Project type:** Marketing landing + 1–2 supporting pages. Next.js 16 + Tailwind v4 → static export → Vercel.
- **Goal v1:** Prove "we exist + working product" + capture interest via email. NOT a fundraise page.
- **Memorable thing:** Every visitor leaves thinking *"this will save me hours per deal."*

## Aesthetic Direction

- **Direction:** Ledger Modernism.
- **Mood:** A 1970s Ontario law-office filing cabinet, reissued by a Swiss type foundry. Editorial, exact, warm on first read, ruthless about how clearly it shows time collapsing. Reads like a sharp independent financial paper or an architectural spec sheet, not a proptech landing page.
- **Decoration level:** Intentional. Hairlines as section dividers. Strict baseline grid. No gradient blobs, no 3D illustrations, no drop shadows, no decorative texture.
- **Reference sites (mood, not template):** Stratechery, Bloomberg Businessweek, FT Alphaville.
- **First-3-second reaction the page should produce:** "This is built by someone who has actually filled out a Form 2229E at 11pm." Relief, then recognition.

## Typography

| Role | Family | Weight | Use |
|---|---|---|---|
| Display / hero | **Instrument Serif** | 400 (regular + italic) | Hero statement, section headings, form-card titles |
| Body / UI | **Geist** | 300–700 (variable) | Body copy, buttons, inputs, navigation |
| Data / mono | **JetBrains Mono** | 300–600 (variable) | Stopwatch, timestamps, form-field labels, process strips, badges |

**Why Instrument Serif (not Fraunces):** Fraunces italic "f" has an exaggerated flag/descender at display optical sizes that reads as glitched. Instrument Serif has conventional italic letter shapes (clean simple "f", short normal descender). Single-weight 400 + italic — adequate for display work, lets type composition do the rest.

**Loading**: All three are free on Google Fonts. Next.js wires them via `next/font/google` for self-hosted serving and zero-CLS:

```tsx
// app/layout.tsx (sketch — implement in /frontend-design pass)
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
const instrument = Instrument_Serif({ weight: ["400"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-display" });
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
```

**Scale (modular 1.25, 16px base):**

| Token | Size | Use |
|---|---|---|
| `text-hero` | clamp(48px, 6vw, 84px) / 1.08 / -0.015em | Hero statement |
| `text-section` | 38px / 1.18 / -0.015em | `.system-heading` style section openers |
| `text-h3` | 24px / 1.25 | Subsection headings |
| `text-body-lg` | 19px / 1.5 | Hero proof, lead paragraphs |
| `text-body` | 16px / 1.55 | Body |
| `text-caption` | 12.5px / 1.5 | Mono process strips |
| `text-label` | 11px / 1.4 / 0.06em uppercase | Mono badges, eyebrow labels |
| `text-tiny` | 9.5–10.5px / 1.4 / 0.04–0.08em uppercase | Form-row labels, swatch hex |

## Color

**Approach:** Restrained. Single accent (burnt sienna) used like a notary stamp — max two hits per page. The accent is reserved for: the time-saved figure, the primary CTA, and at most one inline emphasis (e.g. wordmark trailing period, or a single `<em>` in the hero statement).

**Why burnt sienna (not vermilion):** Vermilion `#B83A26` shifts in dark mode to a near-construction-orange `#D14A33` that reads as alarm-bell. Sienna stays in the warm-paper family — reads as fountain-pen ink dried on cream paper, not exit sign.

### Light theme

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#F4F0E9` | Primary background (matches brand wordmark) |
| `--onion` | `#EAE3D8` | Surface — form cards, contract regions, mono-strip backgrounds |
| `--ink` | `#0F141C` | Primary text (matches brand wordmark) |
| `--ink-deep` | `#0A0A0C` | Display headings (slightly heavier ink for hero) |
| `--sepia` | `#1F1A14` | Hairline rules, table grids, form-card borders |
| `--muted` | `#5E615D` | Captions, metadata, mono-strip text |
| `--accent` | `#8B5A2B` | Burnt sienna — time-saved figure, primary CTA, wordmark period |
| `--hairline` | `rgba(31, 26, 20, 0.18)` | Soft-rule alpha for section dividers |
| `--accent-fill` | `rgba(139, 90, 43, 0.20)` | Filled-value highlight (form-card auto-fill underline) |

### Dark theme (paper ↔ ink invert)

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#0A0A0C` | bg |
| `--onion` | `#14161B` | surface |
| `--ink` | `#F4F0E9` | text |
| `--ink-deep` | `#FFFFFF` | display |
| `--sepia` | `#E5DECF` | hairline ink |
| `--muted` | `#8F8E89` | captions |
| `--accent` | `#B07238` | sienna, slightly desaturated for night-comfort |
| `--hairline` | `rgba(244, 240, 233, 0.18)` | dividers |
| `--accent-fill` | `rgba(176, 114, 56, 0.24)` | filled highlight |

## Spacing

- **Base unit:** 8px.
- **Density:** comfortable → spacious. Whitespace is editorial weight, not empty space.
- **Scale:** `4 8 16 24 32 48 64 96 128`.
- **Section padding:** 96–128px desktop, 64–80px mobile.
- **Container:** `max-width: 1280px`, horizontal padding 48px desktop / 24px mobile.

## Layout

- **Approach:** Split-asymmetric editorial.
- **Hero:** 58/42 split. Left = statement (Instrument Serif) + proof (Geist with hairline left border) + mono process strip on onion-skin. Right = "deal packet in motion" — two stacked form cards (2229E + OREA 400) with subtle rotation, fields visibly populated; below them a stopwatch counter (sienna mono) with "every form ready" caption.
- **Below hero:** 12-column broadsheet grid with section dividers in `--hairline`. Single column on `<920px`.
- **Border radius:** NONE on cards, buttons, inputs. Sharp corners only — matches the law-office document mood.
- **Hairlines:** 1px solid for primary section dividers. Dotted hairlines (1px dotted alpha) for in-card row separators (form rows, swatch rows, type specs).

## Motion

- **Approach:** Minimal-functional. Respect `prefers-reduced-motion`.
- **Hero stopwatch:** Animates from `00:00` → `01:32` over ~3s on first load with cubic ease-out (`1 - (1-t)^2.4`), then halts. Single play, not looped.
- **Theme toggle:** 200ms ease on `background-color` + `color` for the html/body transition.
- **Hover micro-states:** 50–150ms on buttons (background swap to ink) and inputs (border darken).
- **No parallax. No scroll-driven animations. No entrance choreography on copy blocks.** Type and grid carry the read.

## UI primitives

### Buttons

- **Primary** (`Get early access`): sienna fill, paper text, no radius. Hover = ink fill, paper text. Trailing `→` arrow in mono.
- **Secondary** (`Talk to founders`): transparent fill, ink text, 1px ink border. Hover = ink fill, paper text.
- **Padding:** 11px 22px primary; 10px 22px secondary.
- **Type:** Geist 500 / 14px / -0.005em.

### Email capture

- 1px ink border around a horizontal flex row.
- Input: transparent fill, no internal border, 11px 14px padding, 14px Geist body.
- Send button: ink fill, paper text, no internal border, 0 18px padding.
- No radius.

### Status badges

- 1px hairline border, 4px 8px padding.
- Mono 10.5px / 0.04em uppercase / muted color.
- Leading 5px circular sienna dot.

### Form-card rows (used in hero deal-packet)

- 100px label column (mono uppercase 9.5px) + 1fr value column (Geist 500 11px).
- Filled values: subtle `--accent-fill` background gradient on the bottom 40% of the box (highlighter-pen feel), 1–2px padding.
- Dotted hairline between rows.

## Imagery + iconography

- **No stock photography.** No smiling agents, no abstract tech illustrations.
- **Icons (if needed):** thin-stroke line icons only. Lucide or Phosphor Thin. 1.25–1.5px stroke.
- **Brand SVGs in `public/`:** wordmark light/dark, app-icon light/dark. Use `<picture>` + `prefers-color-scheme` for theme-aware swap.

## What this design system explicitly forbids

- Purple / violet anything
- Gradient backgrounds, gradient buttons, glassy 3D illustrations
- 3-column SaaS feature grid with icon-in-colored-circle
- Centered-everything layouts
- Customer-logo trust bar (we don't have customers yet, and the page earns trust through craft)
- "X years in business" framing
- "AI-first" / "Built for X" / "Trusted by Y" cliché copy
- Stock-photo smiling agents or abstract tech imagery
- Drop shadows, decorative blobs, bubbly border-radius
- Tech-blue or burgundy as accent (the entire RE-tech category is split between these)
- system-ui or Inter as primary display/body type (slop defaults)
- Customer-logo bar / testimonial carousel until we have real ones

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-04-29 | Initial design system created via `/design-consultation` | Synthesis of Claude main + Codex + Claude subagent voices. Three-way agreement on editorial / paper-document direction; subagent-named "Ledger Modernism." |
| 2026-04-29 | Memorable thing locked: "This will save me hours per deal" | User-named in Phase 1 question. Drives the time-saved math as the typographic centerpiece. |
| 2026-04-29 | Burnt sienna `#8B5A2B` over vermilion `#B83A26` | Vermilion shifts to alarm-orange in dark mode. Sienna stays in warm-paper family — reads as fountain-pen ink on cream. |
| 2026-04-29 | Instrument Serif over Fraunces | Fraunces italic "f" has exaggerated descender at display sizes (SOFT axis amplifies). Instrument Serif has conventional italic shapes. Single-weight 400 acceptable for display work. |
| 2026-04-29 | Italic emphasis (sienna) on second hero line | "Every form fills in parallel." in italic Instrument Serif sienna. Italic "f" in Instrument Serif has a clean conventional descender (unlike Fraunces). |
| 2026-04-29 | No customer logos / no AI-first / no SaaS gradient / no smiling-agent stock | Pre-traction trust earned through craft, not borrowed credibility. Avoids the category convergence trap (Skyslope, DocuSign, Lone Wolf all default to one of these patterns). |
| 2026-04-29 | Split-asymmetric 58/42 hero (not centered, not full-bleed photo) | Codex + subagent both landed here independently. The "deal packet in motion" composition replaces software-UI-as-hero (Skyslope's playbook) with paperwork-collapsing-into-order. |
| 2026-04-29 | Hero kinetics: stopwatch counter ticking 00:00 → 01:32 once on load, then halts | Subagent's kinetic idea. Time IS the hero, not the product shot. |

## Implementation hints for the next pass (`/frontend-design`)

- Working preview at `.context/keyfill-design-preview.html` (gitignored — local artifact). All tokens above are validated against that file in light + dark.
- `app/layout.tsx`: swap `Geist` + `Geist_Mono` → keep `Geist`, add `Instrument_Serif` (regular + italic) and `JetBrains_Mono`. Wire CSS variables `--font-display`, `--font-sans`, `--font-mono`.
- `app/globals.css`: replace placeholder `@theme` block with the full token set above (paper, onion, ink, ink-deep, sepia, muted, accent, hairline, accent-fill) for both light and `[data-theme="dark"]`.
- `app/page.tsx`: build the hero per the layout above. Subsequent sections (problem, how-it-works, founders, CTA, footer) inherit the same grid + typography rules.
- Use `<picture>` + `prefers-color-scheme` for the wordmark theme swap, matching the existing pattern in `.context/keyfill-design-preview.html`.

## Open follow-ups (parking lot)

- **Self-host fonts** vs Google Fonts CDN — measure CLS first, decide later. Geist-only stays on the CDN today.
- **Variable-weight serif upgrade path:** if Instrument Serif at 400-only feels too uniform across display + section levels, evaluate Newsreader (variable, opsz axis, similarly conventional) as a drop-in.
- **Real Form 400 / 2229E PDF render in hero** (subagent's "scroll-driven auto-fill" idea) — defer until after v1 ships; current stylized stack already conveys the idea.
- **Self-hosted vs CDN serving** — measure `next build` output sizes and Largest Contentful Paint before deciding.
