# Workflow

## Running the app

- `bun install`, then `bun run dev` starts every part with hot reload.
- Production-like stack: `bun run docker:up` (or `make up`); stop it with `bun run docker:down`.

## Verifying a change

Run these from the repository root before reporting work as done:

```bash
bun run typecheck
bun run lint
bun run test
bun run format:check
```

- While iterating, `bun run check:affected` runs lint, typecheck and test only for changed
  workspaces and their dependents. The full list above is still required before reporting.
- Tests live in each workspace's `test/` folder, apart from `src/`, and import the code under
  test from `../src`.
- Update `README.md` and these rule files when a change alters a documented
  API or convention.

## Git

- Commit or push only when asked.
