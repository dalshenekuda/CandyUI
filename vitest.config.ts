import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'build/',
        'types/',
        '**/*.stories.ts',
        'src/main.ts',
        'src/vite-env.d.ts',
        '**/*.d.ts',
      ],
    },
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});

