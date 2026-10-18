import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  { ignores: ['**/dist/**', '**/node_modules/**', '**/.turbo/**'] },

  // Baseline for every TS file in the workspace.
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // Use TypeScript's access modifiers, not ECMAScript `#private` fields.
      'no-restricted-syntax': [
        'error',
        {
          selector: 'PrivateIdentifier',
          message:
            'Do not use `#private` fields. Use a TypeScript modifier instead: `private readonly x = ...`, `private x()`, `protected`.',
        },
      ],
      // Public is the default, so writing it adds noise; non-public members must
      // say `private` / `protected` explicitly.
      '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
      // Every if/else/for/while body is a block, even a one-liner.
      curly: ['error', 'all'],
    },
  },

  // React frontends.
  {
    files: ['apps/frontend/src/**/*.{ts,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },

  // Config files run in Node.
  {
    files: ['**/*.config.{ts,mts,mjs}'],
    languageOptions: { globals: globals.node },
  },
);
