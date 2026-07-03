# resume.mnigh.com

Vite + React static resume site. Ported from [micnigh/resume](https://github.com/micnigh/resume).

## Requirements

- Node.js LTS (18+)
- pnpm >= 10.15.1

## Quick Start

```sh
pnpm install
pnpm dev
```

Dev server: http://localhost:3000 (port is fixed in `vite.config.ts`, not Vite's default 5173).

## Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build to `dist/` |
| `pnpm preview` | Preview production build |
| `pnpm deploy` | Build and publish to GitHub Pages via `gh-pages` |
| `pnpm validate` | Lint + typecheck + format + all tests (run before PRs) |
| `pnpm test` | Unit + integration + E2E |
| `pnpm test:unit` | Vitest unit tests (`*.unit.test.{ts,tsx}`) |
| `pnpm test:integration` | Vitest integration tests (`*.integration.test.{ts,tsx}`) |
| `pnpm test:e2e` | Playwright smoke tests (`e2e/*.e2e.test.ts`) |
| `pnpm test:e2e:ui` | Playwright UI mode |
| `pnpm test:e2e:report` | Open last Playwright report |
| `pnpm lint` / `pnpm lint:fix` | ESLint |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm format` / `pnpm format:check` | Prettier |

Pre-commit hooks (Husky + lint-staged) run ESLint and Prettier on staged files.

## Project layout

```text
src/
├── components/          # UI (Experience, SkillsGraph, Header, shared Tooltip, …)
├── lib/
│   ├── data/            # Resume content (TypeScript modules, no external API)
│   │   ├── experiences/ # One directory per job; auto-discovered via import.meta.glob
│   │   └── summary.tsx  # Static summary copy
│   ├── constants/       # e.g. SKILLS_TO_DISPLAY for the skills chart
│   └── util/            # dates, markdown, deepMerge, …
└── styles/              # Tailwind + print/tooltip overrides
e2e/                     # Playwright smoke tests
```

## Editing resume data

All content lives in TypeScript under `src/lib/data/` — there is no JSON fetch or build-time code generation step.

### Add an experience (job)

1. Create `src/lib/data/experiences/<YYYY-MM_Title>/index.ts`.
2. Export `getExperience()` returning a normalized experience (see an existing folder such as `2019-04_Sr-Web-Developer-MacMillan/`).
3. No registry edit: `experiences/index.ts` discovers every `*/index.ts` via `import.meta.glob`.

Experiences reference projects and tags by **ID** at authoring time. `denormalizeExperiences()` resolves IDs to full objects before render.

### Add a project

1. Create `projects/<name>.ts` in the experience folder; call `createProject()` and export the project.
2. Import the project in the experience `index.ts` and add its `.id` to the experience's `projects` array.

Use `createTags(duration, names)` from `tagRegistry.ts` for skill tags; icons on projects must match a tag name in `iconRegistry.ts`.

`createTags` deduplicates by **tag name**: reusing a name across projects/experiences merges ISO-8601 durations into one tag (used by the skills graph). Only tags listed in `src/lib/constants/skills.ts` appear in the chart.

### Data loading

- `main.tsx` calls `loadData()` eagerly on startup.
- `App.tsx` reads via `getData()` inside React `<Suspense>` (cached after first load).
- See `src/lib/data/index.ts` and `src/lib/data/experiences/index.ts`.

### Tooltips

Prefer the shared `<Tooltip content="…">` wrapper (`src/components/shared/Tooltip.tsx`), which uses tippy.js. Global tippy styles live in `src/styles/globals.css`.

## Testing

Tests are split by filename suffix (see `.cursor/rules/validate.mdc`):

- **Unit** — pure utilities and registries (e.g. `tagRegistry.unit.test.ts`, `deepMerge.unit.test.ts`).
- **Integration** — components and the experience denormalization pipeline.
- **E2E** — Playwright starts `pnpm dev` on port 3000 automatically; first run may need browser install (`pnpm exec playwright install`).

## CI and deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`: install, build, upload to GitHub Pages. **CI does not run `pnpm validate`** — run tests locally before merging.

Local deploy: `pnpm deploy` (sets CNAME `resume.mnigh.com` and SPA `404.html`).

## Cursor rules

- `.cursor/rules/validate.mdc` — always run `pnpm validate` after code changes.
- `.cursor/rules/code-standards.mdc` — TypeScript and component conventions.
