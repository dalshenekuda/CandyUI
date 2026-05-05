import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,

  // Shared rules for TS/TSX code
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
      },
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',

      // Let TypeScript handle undefined vars/types instead of ESLint's no-undef
      'no-undef': 'off',
    },
  },

  {
    ignores: [
      'node_modules/**',
      'build/**',
      'types/**',
      'storybook-static/**',
      'dist/**',
      'docs/CONSUMER_GUIDE.md',
    ],
  },
);

