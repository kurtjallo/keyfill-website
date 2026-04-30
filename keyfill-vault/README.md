# Keyfill Vault

Keyfill's "ops brain" — the second brain for the company, maintained by an
LLM (Claude) following the LLM Wiki pattern (Garry Tan / Kurt Schumacher).

This vault lives in the **website** worktree (`keyfill-website`). The
mobile-app worktree has its own parallel vault. Both vaults follow the same
schema (see `CLAUDE.md`); content in each is scoped to its repo's domain.

## Open in Obsidian

1. Obsidian → **File → Open Vault**
2. Point at `/Users/kurt/conductor/workspaces/keyfill-website/los-angeles/keyfill-vault`
3. (Optional) Install plugins: Dataview, Marp, Web Clipper

## How to use it

- **You** drop sources into `raw/` (call transcripts, articles, voice notes) and ask Claude to process them.
- **Claude** reads them, writes/updates pages in `wiki/`, maintains `index.md` + `log.md`.
- You browse the wiki in Obsidian on one side; Claude makes edits on the other.

The schema lives in [`CLAUDE.md`](CLAUDE.md) — that's the file that turns
Claude from a chatbot into a disciplined wiki maintainer. Co-evolve it with
your needs.

## Layout

```
keyfill-vault/
├── CLAUDE.md       # the schema — how the LLM maintains the vault
├── index.md        # content catalog
├── log.md          # chronological operations log
├── raw/            # immutable sources (call transcripts, articles)
└── wiki/           # LLM-maintained pages (overview, decisions, concepts, ...)
```

## Privacy

`raw/` may contain PII (call transcripts, voice notes). The repo's
`.gitignore` ignores `keyfill-vault/raw/` for that reason. The `wiki/` is
tracked so other team members can clone the same canonical structure.

## Quick-start commands to give Claude

- **Ingest**: "ingest `raw/meetings/2026-04-29-website-kickoff.md`"
- **Query**: "what did we decide about the landing page goal?"
- **Lint**: "lint the vault — find contradictions, orphans, gaps"
- **Synthesize**: "summarize all decisions made in the last 30 days as a
  one-page brief"
