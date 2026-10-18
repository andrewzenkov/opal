# Code style

Write code for the next human reader. These rules apply to every TypeScript file.

## Function inputs

- When a function or method needs more than one input, take one typed object and
  destructure it in the signature. Use descriptive property names, never positional
  `a, b, c`.
- **Name every input type.** Never write an inline type literal in a signature:

  ```ts
  // Avoid:
  open({ me, sessionId, secure }: { me: Me; sessionId?: string; secure: boolean }) {}

  // Prefer:
  export interface OpenSessionData {
    sessionId?: string;
    secure: boolean;
  }
  export interface OpenSessionInput {
    me: Me;
    dataIn: OpenSessionData;
  }
  open({ me, dataIn }: OpenSessionInput) {}
  ```

- Application operations take one object: the trusted caller `me`, the validated `dataIn`, and
  `id` next to `dataIn` when the operation targets one record. Each operation declares its own
  named input type in the app (`UpdateNoteInput { me; id; dataIn }`); the framework provides no
  generic input wrappers. Operation parameters (such as `sessionId`) go inside `dataIn`. Trusted, resolver-derived context (`me`, Mica's `demo`) stays outside `dataIn`.
- Add optional inputs as optional object properties. Avoid positional booleans and
  placeholder `undefined` arguments.
- A function with one simple input can keep it directly, e.g. `digest(value: string)`.
- Reuse an existing input type when it already describes the operation; do not wrap it again.
- Keep signatures a framework or external API dictates: DI constructors, decorator
  callbacks, `container.bind(Token, Impl)`, `container.set(Token, value)` and
  `AppException.create(key, options)`.
- Apply these rules to new code and to functions whose inputs you change. Do not run
  unrelated repository-wide refactors just to apply them.

```ts
// Preferred call:
updateFlag({ me, id, dataIn });

// Preferred signature:
function updateFlag({ me, id, dataIn }: UpdateFlagInput): Context<JasperFlag> {}

// Avoid:
updateFlag(me, id, dataIn);
```

## Readability

- Always use braces for `if`, `else`, `for` and `while` bodies, even one-liners.
  ESLint enforces this with `curly: all`.
- Prefer small named helpers over nested ternaries.
- Generate ids, secrets and timestamps with `CommonUtils` from `bedrock`:
  `createId()`, `createId({ prefix: 'task' })`, `createSecret()`, `now()`, `nowIso()` and
  `toIso(timestamp)`. Never call `crypto.randomUUID()`, `Date.now()` or
  `new Date().toISOString()` directly in backend code. The frontends do not depend on the
  framework and may use `Date` for display.
- Build partial updates with `CommonUtils.mapDataToUpdate` on explicitly selected fields.

## TypeScript

- Name every `.ts`, `.tsx`, `.js` and `.mjs` file in camelCase. Dot-separated role suffixes keep
  camelCase segments: `useCase.ts`, `controllerRoutes.ts`, `memoryTask.repository.ts`,
  `task.useCase.ts`. Never kebab-case or snake_case. Tool-dictated names such as
  `eslint.config.mjs` are the exception.
- Name an injected use case after its class: `private readonly noteUseCase: NoteUseCase`, never a
  shortened noun such as `notes`, which reads like a repository or a list.
- Use TypeScript access modifiers (`private readonly x`), never ECMAScript `#private` fields.
- Omit `public`; write `private` or `protected` explicitly.
- Use `import type` for type-only imports. Use **value** imports for request, DTO and DI
  classes so decorator metadata keeps them at runtime.
- Match the surrounding code's comment density and naming. Comment why, not what.
