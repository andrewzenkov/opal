# Layout

Opal (static profile) is one independent repository. Its parts are Bun workspaces named `@opal/<part>`.
Deployable apps live in `apps/`; put libraries they share in `packages/`:

- `apps/frontend/` (`@opal/frontend`): Kenny’s profile (no backend).

Keep code that only Opal uses here. Do not import from other apps; copy what you need, or
move framework-level code into Bedrock.

| Part     | Dev port | Docker port |
| -------- | -------- | ----------- |
| Frontend | 5176     | 8083        |
