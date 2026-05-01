import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  
  return {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    plugins: [
      vue(),
      ...(isProduction ? [
        dts({
          entryRoot: 'src',
          outputDir: 'types',
          insertTypesEntry: false,
          include: ['src/**/*.ts', 'src/**/*.vue'],
          exclude: ['src/**/*.stories.ts', 'src/main.ts']
        })
      ] : [])
    ],
    build: isProduction ? {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'UIKit',
        fileName: 'ui-kit',
        formats: ['es']
      },
      outDir: 'build',
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          },
          exports: 'named',
          // Consuming app (my-account-proxy) imports build/style.css — ensure stable name
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name ?? '';
            return name.endsWith('.css') ? 'style.css' : '[name]-[hash][extname]';
          }
        }
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true
        }
      },
      sourcemap: true,
      emptyOutDir: true
    } : {},
    server: {
      open: true,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  };
});
