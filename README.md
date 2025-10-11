resume.mnigh.com

# Quick start

```sh
# first time
pnpm install

pnpm dev
```

# Code Quality

Lint and format your code:

```sh
# Run ESLint to check for code issues
pnpm lint

# Run ESLint and auto-fix issues
pnpm lint:fix

# Format code with Prettier
pnpm format

# Check if code is formatted correctly
pnpm format:check
```

Pre-commit hooks are automatically set up via Husky to run linting and formatting on staged files.

# Testing

Run Playwright tests:

```sh
# Run all tests
pnpm test

# Run tests in UI mode (interactive)
pnpm test:ui

# Run tests in debug mode
pnpm test:debug
```

The tests will automatically start the dev server if it's not already running.

# Summary

Vite + React static site for resume/portfolio.

Ported from https://github.com/micnigh/resume
