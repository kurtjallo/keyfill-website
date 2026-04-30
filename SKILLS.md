# SKILLS.md — Orchestration map for installed agent skills

This file is for the agent (Claude Code), not for end-users. It catalogs the
~120 skills installed at `~/.claude/skills/` (gstack + Karpathy + Composio
awesome list + Vercel React + Impeccable design + a few one-offs) and
provides routing rules + common workflows.

The CLAUDE.md `## Skill routing` section is the **fast routing table** for the
most common cases. SKILLS.md is the **deep reference** — when in doubt about
which skill fits, search this file.

How to invoke: use the `Skill` tool with `skill: <name>` (no leading slash).
Plugin-namespaced skills use `plugin:skill` form (e.g.,
`karpathy-skills:karpathy-guidelines`). User-typed `/<name>` always wins;
otherwise auto-route from the tables below.

## Routing-by-phase (what to reach for, when)

### 1. Discovery & ideation
| Trigger | Skill |
|---|---|
| "Is this worth building?" / "I have an idea" | `office-hours` |
| "What should I market?" / "Growth ideas?" | `marketing-ideas` |
| Naming a domain / product | `domain-name-brainstormer` |
| Competitor landscape | `competitor-alternatives`, `competitive-ads-extractor` |

### 2. Plan & align
| Trigger | Skill |
|---|---|
| End-to-end review pipeline | `autoplan` |
| Founder-mode plan review | `plan-ceo-review` |
| Eng-mode plan review (architecture, edge cases) | `plan-eng-review` |
| Designer-mode plan review | `plan-design-review` |
| DX-mode plan review (developer experience) | `plan-devex-review` |
| Tune AskUserQuestion sensitivity | `plan-tune` |

### 3. Build
| Trigger | Skill |
|---|---|
| Generic UI / component / page | `frontend-design`, `impeccable` |
| React + Next.js perf | `vercel-react-best-practices` |
| React Native / Expo (Keyfill stack) | `vercel-react-native-skills` |
| React composition / API design | `vercel-composition-patterns` |
| Multi-component HTML artifacts | `web-artifacts-builder`, `artifacts-builder` |
| Remotion video | `remotion-best-practices` |
| Anthropic SDK / Claude API code | `claude-api` |
| Build an MCP server | `mcp-builder` |
| Algorithmic / generative art (p5.js) | `algorithmic-art` |
| Slack-optimized GIFs | `slack-gif-creator` |
| Brand-styled artifacts | `brand-guidelines`, `canvas-design`, `theme-factory` |

### 4. Review & QA
| Trigger | Skill |
|---|---|
| Pre-landing PR review | `review` |
| Live site QA + auto-fix | `qa` |
| QA report only (no fixes) | `qa-only` |
| Design polish on shipped UI | `design-review`, `impeccable` |
| Web Interface Guidelines compliance | `web-design-guidelines` |
| DevEx audit | `devex-review` |
| Security audit | `cso`, `security-review` |
| Code quality / health snapshot | `health` |
| Reuse-quality-efficiency sweep | `simplify` |

### 5. Ship
| Trigger | Skill |
|---|---|
| Create a PR / commit / push | `ship` |
| Merge + deploy + verify | `land-and-deploy` |
| Configure deploy targets first | `setup-deploy` |
| Post-deploy canary | `canary` |
| Update README / CHANGELOG / CLAUDE.md after ship | `document-release` |
| Weekly retro across commits | `retro` |
| Pre-deploy benchmark vs baseline | `benchmark`, `benchmark-models` |

### 6. Debug / fix
| Trigger | Skill |
|---|---|
| Systematic bug investigation | `investigate` |
| Adversarial review (try to break my code) | `codex` (challenge mode) |
| Independent code review | `codex` (review mode) |
| Lock edits to one dir | `freeze` / `unfreeze` |
| Warn before destructive ops | `careful` |
| Combined safety mode | `guard` |

### 7. Context & continuity
| Trigger | Skill |
|---|---|
| Save session state | `context-save` |
| Resume from saved state | `context-restore` |
| Capture lessons across sessions | `learn` |
| Schedule a follow-up agent run | (use core `/schedule`, not a skill) |

## Routing-by-topic (long tail)

### Design
`frontend-design`, `impeccable`, `design-consultation`, `design-shotgun`,
`design-html`, `design-review`, `plan-design-review`, `web-design-guidelines`,
`brand-guidelines`, `canvas-design`, `theme-factory`, `web-artifacts-builder`.

### Marketing & growth
`ad-creative`, `cold-email`, `email-sequence`, `paid-ads`, `social-content`,
`launch-strategy`, `referral-program`, `marketing-psychology`,
`marketing-ideas`, `pricing-strategy`, `revops`, `sales-enablement`,
`product-marketing-context`, `analytics-tracking`, `ab-test-setup`,
`schema-markup`, `seo-audit`, `ai-seo`, `programmatic-seo`,
`free-tool-strategy`, `content-strategy`, `content-research-writer`,
`copywriting`, `copy-editing`, `humanizer`.

### CRO (conversion rate optimization)
`form-cro`, `page-cro`, `popup-cro`, `signup-flow-cro`, `onboarding-cro`,
`paywall-upgrade-cro`, `churn-prevention`.

### Documents (when files are I/O)
`pdf`, `docx`, `xlsx`, `pptx`, `make-pdf`, `document-skills`.

### Browser & QA automation
`browse`, `gstack`, `webapp-testing`, `connect-chrome`, `connect`,
`connect-apps`, `connect-apps-plugin`, `setup-browser-cookies`,
`open-gstack-browser`, `pair-agent`.

### Skill / config / meta
`skill-creator`, `skill-share`, `template-skill`, `mcp-builder`,
`find-skills`, `gstack-upgrade`, `learn`.

### Misc
`video-lens` (YouTube transcript summary), `video-downloader`,
`tailored-resume-generator`, `lead-research-assistant`,
`developer-growth-analysis`, `meeting-insights-analyzer`,
`raffle-winner-picker`, `image-enhancer`, `invoice-organizer`,
`file-organizer`, `internal-comms`, `obsidian`, `langsmith-fetch`,
`changelog-generator`, `twitter-algorithm-optimizer`, `composio-skills`,
`doc-coauthoring`.

### Karpathy guidelines
Already merged into this project's `CLAUDE.md` (always-on). The
`karpathy-skills:karpathy-guidelines` plugin is redundant — schedule it for
removal via `/plugin`.

## Keyfill-specific guidance

This repo is `keyfill-website` — the Keyfill marketing site (Next.js 15
+ TypeScript + Tailwind, static export to Vercel). The Keyfill mobile
app (Expo / React Native voice-to-form POC) lives separately at
`/Users/kurt/Desktop/Keyfill/keyfill-app/`. Mobile-specific skills
(`vercel-react-native-skills`, Expo / iOS / Android tooling) do NOT
apply here. Marketing / CRO / SEO / copywriting / design skills DO.

| Use when working on... | Reach for |
|---|---|
| Initial design system (colors, type, spacing, motion) | `design-consultation` |
| Hero / landing components / page layout | `frontend-design`, `impeccable`, `vercel-react-best-practices` |
| Component composition / API design | `vercel-composition-patterns` |
| Copy passes (hero, sections, CTAs) | `copywriting`, `humanizer`, `copy-editing` |
| CTA / email-capture optimization | `page-cro`, `signup-flow-cro` |
| Visual polish on shipped UI | `design-review`, `impeccable` (`shape` → `craft`) |
| Accessibility / IA / web standards | `web-design-guidelines` |
| Pre-launch SEO + structured data | `seo-audit`, `ai-seo`, `schema-markup` |
| Analytics / experiments | `analytics-tracking`, `ab-test-setup` |
| Performance regression check | `benchmark`, `health` |
| Pre-PR review | `review`, `simplify`, `codex` review mode |
| Shipping / deploying to Vercel | `ship`, `land-and-deploy`, `setup-deploy` |
| Live site QA | `qa`, `qa-only`, `browse` |
| Post-launch canary | `canary` |
| Save / resume state | `context-save` / `context-restore` |
| Weekly retro | `retro` |
| Sitemap / IA planning | `site-architecture` |
| Competitor / alternative pages | `competitor-alternatives` |
| Domain naming | `domain-name-brainstormer` |
| Programmatic SEO at scale | `programmatic-seo` |

## Common workflows (skill chains)

### A. Build a new feature on the website
1. `office-hours` (validate the idea — optional)
2. `design-consultation` (lock the design system if not yet established)
3. `plan-eng-review` (architecture for non-trivial features)
4. Build with `frontend-design` / `impeccable` / `vercel-react-best-practices`
5. `copywriting` (terse, founder-direct copy in the PRD voice)
6. `simplify` (de-bloat)
7. `web-design-guidelines` (a11y / IA pass)
8. `design-review` (visual polish)
9. `review` + `codex` review (independent eyes)
10. `ship` (create PR)
11. `land-and-deploy` (merge + verify)
12. `canary` (post-deploy watch)
13. `document-release` (update README / CLAUDE.md changelog)
14. `retro` weekly

### B. Debug a regression
1. `investigate` (systematic, with root-cause discipline)
2. `codex` consult (independent opinion when math/logic is non-obvious)
3. `freeze` to lock scope (optional, prevents adjacent "improvements")
4. Fix → write regression test → verify
5. `ship` the fix on a branch

### C. Polish an existing screen
1. `design-review` (find issues, scored)
2. `impeccable` `shape` → `craft` (deep design pass)
3. `web-design-guidelines` (accessibility / IA check)
4. `qa` (live test on the sim)
5. `ship`

### D. Pause / resume across sessions
1. `context-save` before stopping
2. `context-restore` on the next session
3. `learn` if you discovered a non-obvious project quirk worth keeping

## Anti-patterns to avoid

- **Don't bulk-install marketplaces with `cp -r dir/`** — macOS BSD `cp` flattens
  contents; the Composio repo dropped 800 `*-automation` subdirs into the skills
  dir last time. Use `npx skills add <repo>` (handles paths cleanly) or the
  `/plugin` system instead.
- **Don't double-install** the Karpathy guidelines — content is in `CLAUDE.md`
  now (always-on). The plugin is redundant.
- **Don't reach for mobile / Expo / React Native skills** for keyfill-website
  work — wrong context, wastes attention. The Keyfill mobile app lives at
  `/Users/kurt/Desktop/Keyfill/keyfill-app/`; cross-reference its brand assets
  but don't import its mobile-stack patterns. Skills like
  `vercel-react-native-skills` are cataloged for cross-project discoverability,
  not for use here.

## Index pointer

Full one-line catalog: `/tmp/skill-catalog.txt` (regenerate via
`for d in ~/.claude/skills/*/; do ...` — see commit history for the snippet).
For an authoritative source list, browse `~/.claude/skills/` directly or
ask: "find a skill for X" → routes to `find-skills`.
