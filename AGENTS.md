# AGENTS.md

## Cursor Cloud specific instructions

### Product overview

Static React resume site. All content is TypeScript modules under `src/lib/data/` — no backend, database, secrets, or external data fetch at runtime.

### Services

| Service | Command | URL |
|---------|---------|-----|
| Vite dev server | `pnpm dev` | http://localhost:3000 |

Playwright E2E starts this dev server automatically when running `pnpm test:e2e` outside an already-running server.

### Common commands

See `package.json` and `README.md`. Quick reference:

- **Lint:** `pnpm lint`
- **Typecheck:** `pnpm typecheck`
- **Unit tests:** `pnpm test:unit`
- **Integration tests:** `pnpm test:integration`
- **E2E tests:** `pnpm test:e2e` (may need `pnpm exec playwright install` first)
- **Full validation:** `pnpm validate` (lint + typecheck + format + all tests)
- **Production build:** `pnpm build`

### Editing content

- New jobs: add `src/lib/data/experiences/<folder>/index.ts` with `getExperience()` — auto-discovered by glob.
- New projects: add `projects/*.ts` in that folder, register via `createProject()`, reference by ID in the experience.
- Skills chart: only tags listed in `src/lib/constants/skills.ts` appear in the graph.
- **Tag deduplication:** `createTags` in `tagRegistry.ts` merges durations when the same tag name is reused across projects/experiences.

### Key caveats

- **Port 3000**, not Vite default 5173 (`vite.config.ts`).
- **CI deploys without tests** — `.github/workflows/deploy.yml` only builds; run `pnpm validate` locally before pushing to `main`.
- **pnpm >= 10.15.1** required (`package.json` engines).
- **Tooltips:** use `src/components/shared/Tooltip.tsx` (tippy.js); do not rely on `src/lib/util/tooltip.ts` (unused legacy helper).
