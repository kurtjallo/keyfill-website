# Keyfill Vault — Schema

This file tells you (the LLM) how to maintain this Obsidian vault. It's the
configuration that makes you a disciplined wiki maintainer rather than a
generic chatbot.

## What this vault is

Keyfill's "ops brain" — the second brain for the company. Source of truth for
product direction, decisions, people, ongoing work, and the corpus of
material we've discussed (call transcripts, articles, voice notes).

The pattern is the **LLM Wiki**: I (the user) curate sources and ask
questions; you read, synthesize, file, and cross-reference. I never (or
rarely) write the wiki myself. You own the wiki layer entirely.

## Three layers

```
keyfill-vault/
├── CLAUDE.md         # this file — schema + conventions
├── README.md         # human-facing intro
├── index.md          # content catalog (you keep current on every ingest)
├── log.md            # chronological append-only operations log
├── raw/              # immutable sources (you READ; never modify)
│   ├── meetings/     # call transcripts
│   ├── articles/     # web clippings (Obsidian Web Clipper)
│   ├── voice-notes/  # Granola / Superwhisper / similar
│   └── assets/       # images, attachments
└── wiki/             # YOUR layer — markdown pages you create + maintain
    ├── overview/     # current state of the company, north star, roadmap
    ├── people/       # entity pages: Kurt, Kav, future hires, key contacts
    ├── product/      # PRD mirror, user journeys, feature pages
    ├── concepts/     # parallel-fill, privacy-proxy, north-star, etc.
    ├── decisions/    # ADRs (architecture decision records), chronologically numbered
    ├── tech-stack/   # backend, infra, LLM, mobile choices
    ├── operations/   # SOPs, runbooks (deploys, ship-flow, onboarding)
    ├── tasks/        # current tasks (later: migrate to Linear)
    ├── customers/    # later: real estate agents using the app
    └── deals/        # later: deal tracker
```

The **raw/** layer is immutable. You read from it; you never modify or
delete files there. If a source becomes superseded, note that in the wiki
page that references it — don't touch the raw file.

The **wiki/** layer is yours. Create pages, update them, cross-reference,
maintain consistency.

The **schema** (this file) is co-evolved. As you and I figure out what works
for Keyfill specifically, update this file.

## Conventions

### Filenames
- Kebab-case: `parallel-fill.md`, `2026-04-28-cofounder-alignment.md`
- Wiki links resolve fine: `[[parallel-fill]]` → `wiki/concepts/parallel-fill.md`

### Frontmatter (every wiki page)
```yaml
---
title: Parallel Fill
type: concept            # one of: overview | person | product | concept | decision | tech | operation | task | customer | deal | source
created: 2026-04-29
updated: 2026-04-29
sources: [meetings/2026-04-28-cofounder-alignment]   # list of raw sources this page draws from
related: [[north-star]] [[privacy-proxy]]            # cross-references
status: stable            # one of: draft | stable | superseded
---
```

`sources` lets us trace claims. `related` becomes graph edges. `status`
flags pages that need review.

### Wiki links
Use `[[page-name]]` everywhere. When you create a new page, search the
wiki for any other pages that should now link to it and add the
back-references.

### Decisions (`wiki/decisions/`)
- Numbered: `001-no-in-app-esig.md`, `002-fastapi-sqlmodel-do.md`
- Each decision page has: **Context**, **Decision**, **Alternatives
  considered**, **Consequences**, **Status** (proposed / accepted /
  superseded), **Date**, **Owners**

### Sources (raw/)
- Filename pattern: `YYYY-MM-DD-slug.md` (or `.txt`)
- For meeting transcripts: `meetings/2026-04-28-cofounder-alignment.md`
- For web clippings: original article filename or `articles/YYYY-MM-DD-slug.md`
- For voice notes: `voice-notes/YYYY-MM-DD-slug.md`

## Operations

### Ingest
When I drop a new source into `raw/` and ask you to process it:

1. **Read** the source carefully.
2. **Discuss** key takeaways with me — surface contradictions with
   existing wiki pages explicitly.
3. **Write a summary page** in the appropriate `wiki/` location (often
   under `wiki/concepts/` or `wiki/decisions/`, occasionally a new
   entity page under `wiki/people/`).
4. **Update relevant existing pages** — entity pages, concept pages,
   decisions. A single source can touch 5–15 wiki pages. Don't be lazy —
   update all of them.
5. **Update `index.md`** with the new pages and any moved/renamed ones.
6. **Append a log entry** to `log.md` with the date, source name, and
   pages touched.

### Query
When I ask a question about Keyfill:

1. Read `index.md` first to find relevant pages.
2. Drill into the candidate pages.
3. Synthesize an answer with explicit citations: `According to [[north-star]] and [[parallel-fill]]: ...`
4. If the answer is itself worth keeping, suggest filing it back into
   the wiki as a new page or section — don't let valuable analysis
   evaporate into chat history.

### Lint
Periodically (or when I ask "lint the vault"):

- Find contradictions between pages.
- Flag stale claims that newer sources have superseded.
- Find orphan pages (no inbound links).
- Suggest concept pages for terms mentioned ≥3 times across the wiki
  but lacking their own page.
- Fill gaps: which open questions in `wiki/decisions/` are still
  unresolved?
- Append findings to `log.md` and propose a remediation plan.

## Index format (`index.md`)

Catalog of every wiki page, organized by category. One line per page:

```
- [[page-slug]] — one-line summary (status, last updated)
```

Sections match the wiki/ subdirectory structure. Update on every ingest.

## Log format (`log.md`)

Append-only. Use consistent prefix so unix tools can parse it:

```
## [2026-04-29] ingest | 2026-04-28-cofounder-alignment.md
- Pages touched: [[north-star]], [[parallel-fill]], [[privacy-proxy]],
  [[001-no-in-app-esig]], [[kav]], [[kurt]]
- Key takeaways: parallel multi-form fill thesis confirmed; Skyslope
  signing flow accepted; Kav owns OCR build-vs-partner decision
- Open questions surfaced: pricing model, multi-tenancy (per-agent vs
  per-brokerage)
```

```
## [2026-05-01] query | "what did we decide about e-signature?"
- Pages searched: [[001-no-in-app-esig]]
- Answer summary: deferred — Skyslope handles. See decision 001.
```

```
## [2026-05-15] lint | health check
- 2 orphan pages flagged: [[draft-pricing-ideas]], [[brokerage-types]]
- 1 stale claim: [[north-star]] mentions 2229E only — should mention OREA 400 too
```

## Keyfill-specific domain hints

When ingesting Keyfill content, expect these entities and concepts:

**People**: Kurt (owner), Kav (co-founder), Adam (potential OCR partner)
**Forms**: Ontario 2229E (lease), OREA Form 400 (agreement to lease),
mutual release, purchase agreements (Phase 2)
**Concepts**: parallel-fill, privacy-proxy, north-star, 3-question
onboarding, tile picker, Skyslope handoff
**Tech**: FastAPI, SQLModel, DigitalOcean (Postgres + K8s + CDN), Redis
TTL, GPT-4-mini, Claude (planned), Ollama (testing only), pdf-lib,
Expo / React Native
**Decisions made (2026-04-28 call)**: no in-app e-sig, FastAPI+SQLModel,
DO Postgres, GPT-4-mini, parallel multi-form fill thesis, 3-question
onboarding, profile capture in first-run, tile picker UI

## What you should NOT do

- Don't modify files in `raw/`. Ever.
- Don't write the wiki without sources to back it up. If you make a claim,
  cite the source(s) in the page's frontmatter.
- Don't let the index drift — every new wiki page goes into `index.md`
  immediately.
- Don't bury contradictions. If a new source contradicts an existing wiki
  page, surface it loudly in `log.md` and update the page with an
  explicit "Conflicts with: [[older-page]] (resolved 2026-04-29)" note.
- Don't create empty placeholder pages. A page exists when there's
  enough material to fill it. Until then, leave it as a TODO in
  `index.md`.

## Why this works

The tedious part of a knowledge base is bookkeeping: cross-references,
keeping summaries current, noting contradictions. Humans abandon wikis
because the maintenance burden grows faster than the value. You don't get
bored. You touch 15 files in one pass without complaint. The wiki stays
maintained because the cost of maintenance is near zero.

Kurt's job: source content, ask good questions, decide what matters.
Your job: everything else.
