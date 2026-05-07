import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'unplugin-dts/vite';
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
      react(),
      ...(isProduction ? [
        dts({
          tsconfigPath: './tsconfig.build.json',
          outDirs: 'types',
          include: ['src/**/*.ts', 'src/**/*.tsx'],
          exclude: ['src/**/*.stories.ts', 'src/**/*.stories.tsx', 'src/main.ts'],
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
        // Keep react/jsx-runtime etc. external so CJS bundles are not inlined (breaks workerd/SSR).
        external: ['react', 'react-dom', /^react\//, /^react-dom\//],
        output: {
          exports: 'named',
          // Consuming app imports build/style.css — ensure stable name
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
