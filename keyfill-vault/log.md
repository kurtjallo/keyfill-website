# Log

Chronological append-only record of vault operations. Claude appends entries
as ingests / queries / lint runs happen.

Format: `## [YYYY-MM-DD] <type> | <subject>` then bullets. Parseable with
`grep "^## \[" log.md | tail -10` for recent activity.

---

## [2026-04-29] init | Vault created

- Vault scaffolded as part of the keyfill-website bootstrap commit
- `CLAUDE.md` schema copied verbatim from the keyfill-app vault (domain-agnostic)
- `README.md` adapted to point at the website worktree
- Directory skeleton: `raw/` (gitignored except `.gitignore`) +
  `wiki/{overview,people,product,concepts,decisions,tech-stack,operations,tasks,customers,deals}` (empty `.gitkeep`)
- No seed pages — wiki is empty until first ingest
