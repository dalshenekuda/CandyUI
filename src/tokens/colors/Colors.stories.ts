import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Visual reference for the color palette. Semantic tokens (--color-*) are the recommended way to use colors in components.',
      },
    },
  },
};
export default meta;

const swatchTemplate = `
  <div style="display:flex; flex-direction:column; align-items:center; gap:6px; min-width:80px;">
    <div :style="{
      width: '72px',
      height: '56px',
      borderRadius: '8px',
      background: 'var(--' + color + ')',
      border: '1px solid rgba(0,0,0,0.08)',
    }"></div>
    <span style="font-size:10px; color:var(--color-text-muted); text-align:center; word-break:break-all; max-width:80px;">{{ color }}</span>
  </div>
`;

const semanticColors = [
  'color-bg', 'color-surface', 'color-surface-raised',
  'color-text', 'color-text-muted', 'color-text-subtle',
  'color-brand', 'color-brand-dark', 'color-brand-light',
  'color-accent', 'color-accent-dark', 'color-accent-light', 'color-accent-warm',
  'color-border', 'color-border-subtle',
  'color-danger', 'color-success', 'color-warning',
];

const paletteGroups = [
  { label: 'Teal', tokens: ['palette-teal-900', 'palette-teal-600', 'palette-teal-400', 'palette-teal-200'] },
  { label: 'Cream', tokens: ['palette-cream-ink', 'palette-cream-100', 'palette-cream-50'] },
  { label: 'Grey', tokens: ['palette-grey-1000','palette-grey-900','palette-grey-800','palette-grey-700','palette-grey-600','palette-grey-500','palette-grey-400','palette-grey-300','palette-grey-200','palette-grey-100'] },
  { label: 'Coral', tokens: ['palette-coral-700', 'palette-coral-500', 'palette-coral-300'] },
  { label: 'Amber', tokens: ['palette-amber-700', 'palette-amber-500', 'palette-amber-300'] },
  { label: 'Olive', tokens: ['palette-olive-700', 'palette-olive-500', 'palette-olive-300'] },
  { label: 'Sage', tokens: ['palette-sage-700', 'palette-sage-500', 'palette-sage-300'] },
];

export const Semantic: StoryObj = {
  render: () => ({
    setup: () => ({ colors: semanticColors }),
    template: `
      <div style="font-family: system-ui, sans-serif; padding: 24px;">
        <h3 style="margin-bottom:16px; font-size:14px; font-weight:600; color:var(--color-text-muted);">SEMANTIC TOKENS</h3>
        <div style="display:flex; flex-wrap:wrap; gap:12px;">
          <template v-for="color in colors" :key="color">
            ${swatchTemplate}
          </template>
        </div>
      </div>
    `,
  }),
};

export const Palette: StoryObj = {
  render: () => ({
    setup: () => ({ groups: paletteGroups }),
    template: `
      <div style="font-family: system-ui, sans-serif; padding: 24px; display:flex; flex-direction:column; gap:32px;">
        <div v-for="group in groups" :key="group.label">
          <h3 style="margin-bottom:12px; font-size:14px; font-weight:600; color:var(--color-text-muted);">{{ group.label.toUpperCase() }}</h3>
          <div style="display:flex; flex-wrap:wrap; gap:12px;">
            <template v-for="color in group.tokens" :key="color">
              <div style="display:flex; flex-direction:column; align-items:center; gap:6px; min-width:80px;">
                <div :style="{
                  width: '72px',
                  height: '56px',
                  borderRadius: '8px',
                  background: 'var(--' + color + ')',
                  border: '1px solid rgba(0,0,0,0.08)',
                }"></div>
                <span style="font-size:10px; color:var(--color-text-muted); text-align:center; word-break:break-all; max-width:80px;">{{ color }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
    `,
  }),
};
