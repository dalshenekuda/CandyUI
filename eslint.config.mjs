import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs['flat/recommended'],
  eslintConfigPrettier,

  // Parse Vue SFCs with vue-eslint-parser + TypeScript for <script lang="ts">
  {
    files: ['src/**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
  },

  // Shared rules for TS + Vue code
  {
    files: ['src/**/*.{ts,tsx,vue}'],
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
      // Vue rules tuned for this UI kit
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off', // allow <Button>, etc.
      'vue/order-in-components': 'off',
      'vue/attributes-order': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-v-html': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': 'off',

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off', // tolerate vite-env.d.ts pattern

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
      'UI_KIT_CONSUMER_GUIDE.md',
    ],
  },
);

