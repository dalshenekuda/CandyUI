import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import type { Plugin, ResolvedConfig } from 'vite';

/**
 * Vite's library build always inlines referenced assets as base64 data URIs
 * (build.lib forces this regardless of `assetsInlineLimit` — see
 * shouldInline() in vite's build pipeline). That is fine for small icons,
 * but our two variable-weight woff2 fonts are ~40KB each and together make
 * up the majority of the published style.css, which blocks first paint for
 * every consumer.
 *
 * Vite 8's Environment API also builds CSS in a separate pass from the JS
 * bundle, so a regular generateBundle hook never sees style.css. Instead,
 * this plugin post-processes the written output in closeBundle: it copies
 * the raw font files into build/fonts/ and rewrites the matching
 * @font-face data URIs in the built CSS to reference them instead, so the
 * fonts ship as separate, cacheable files.
 */
export function externalFonts(): Plugin {
  const fonts: Array<{ family: string; src: string; outName: string }> = [
    {
      family: 'Cabinet Grotesk',
      src: 'src/assets/fonts/CabinetGrotesk-Variable.woff2',
      outName: 'fonts/CabinetGrotesk-Variable.woff2',
    },
    {
      family: 'Switzer',
      src: 'src/assets/fonts/Switzer-Variable.woff2',
      outName: 'fonts/Switzer-Variable.woff2',
    },
  ];

  let config: ResolvedConfig;

  return {
    name: 'candy-ui:external-fonts',
    apply: 'build',
    configResolved(resolved) {
      config = resolved;
    },
    closeBundle() {
      const outDir = resolve(config.root, config.build.outDir);
      const cssPath = resolve(outDir, 'style.css');

      let css: string;
      try {
        css = readFileSync(cssPath, 'utf-8');
      } catch {
        // No style.css in this build (e.g. watch mode rebuilding only JS).
        return;
      }

      for (const font of fonts) {
        const outPath = resolve(outDir, font.outName);
        mkdirSync(dirname(outPath), { recursive: true });
        copyFileSync(resolve(__dirname, '..', font.src), outPath);

        const re = new RegExp(
          `(@font-face\\{font-family:${font.family};src:url\\()data:[^)]+\\)`,
          'g'
        );
        css = css.replace(re, `$1./${font.outName})`);
      }

      writeFileSync(cssPath, css);
    },
  };
}
