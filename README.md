# Opal

Kenny’s profile: a frontend-only app with no backend.

Requires [Bun](https://bun.sh) 1.4 or newer.

Opal is a frontend-only personal profile with responsive layout, light/dark theme,
section navigation, and a copy-profile-link button. It contains draft copy and no
invented personal details or contact links. Edit `apps/frontend/src/profile.ts`
to add Kenny’s biography and real links.

```bash
bun install
bun run dev
bun run build
```

Open http://localhost:5176 locally, or http://localhost:8083 with `docker compose up`.
No API, credentials, or backend are needed.
