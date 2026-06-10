# AGENTS.md

Guidance for cloud agents working in this multi-repo workspace.

## Workspace layout

| Path                                    | Product                        | Dev URL               |
| --------------------------------------- | ------------------------------ | --------------------- |
| `repos/itaintprettybutittastesgood.com` | Recipe collection static site  | http://localhost:5173 |
| `repos/resume-2023`                     | Personal resume/CV static site | http://localhost:3000 |

Each repo is an independent Vite + React 19 SPA with its own `package.json` and `pnpm-lock.yaml`. Run all commands from the relevant repo root.

## Requirements

- **Node.js** 18+ (recipe repo `.nvmrc` uses `lts/*`)
- **pnpm** 10+ (resume repo requires `>=10.15.1`)

## Cursor Cloud specific instructions

### Recipe site: `src/recipes.json` is gitignored

A fresh clone does not include `src/recipes.json`, but committed recipe data lives under `public/recipes/<slug>/index.json`. Bundle it before `pnpm dev`, tests, or builds:

```bash
cd repos/itaintprettybutittastesgood.com
node -e "
const fs = require('fs');
const path = require('path');
const recipesDir = path.join('public', 'recipes');
const allRecipes = fs.readdirSync(recipesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => JSON.parse(fs.readFileSync(path.join(recipesDir, d.name, 'index.json'), 'utf-8')));
fs.writeFileSync(path.join('src', 'recipes.json'), JSON.stringify(allRecipes, null, 2));
console.log('Bundled', allRecipes.length, 'recipes');
"
```

`pnpm fetch-data` requires Google Drive/Docs credentials and a Gemini API key; it is only needed to refresh content from Google Docs, not for local dev or testing.

### Playwright browsers

Install Chromium once per machine (shared cache across repos):

```bash
pnpm exec playwright install chromium
```

Use `pnpm test:e2e:install` in the recipe repo only if system browser dependencies are missing (`--with-deps`).

### Running services

Start each dev server from its repo root in a separate terminal/tmux session:

```bash
# Recipe site (port 5173)
cd repos/itaintprettybutittastesgood.com && pnpm dev

# Resume site (port 3000)
cd repos/resume-2023 && pnpm dev
```

Playwright E2E tests auto-start the dev server via `webServer` in each repo's `playwright.config.ts`.

### Lint, test, and validate

| Repo   | Lint        | Typecheck        | All tests   | Full validate   |
| ------ | ----------- | ---------------- | ----------- | --------------- |
| Recipe | `pnpm lint` | `pnpm typecheck` | `pnpm test` | `pnpm validate` |
| Resume | `pnpm lint` | `pnpm typecheck` | `pnpm test` | `pnpm validate` |

`pnpm validate` runs lint, typecheck, format, and all tests (unit + integration + e2e). See each repo's `.cursor/rules/validate.mdc` for the expected workflow after code changes.

### Optional / not required for local dev

- Google Drive/Docs APIs + `credentials.json` — recipe data pipeline only
- `GEMINI_API_KEY` in `.env` — AI ingredient parsing and hero image generation
- `gh-pages` / GitHub Actions — deployment only
- Husky pre-commit hooks (resume repo) — installed via `pnpm prepare` on `pnpm install`
