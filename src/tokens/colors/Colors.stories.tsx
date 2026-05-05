import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';

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

const baseContainerStyle: CSSProperties = {
  fontFamily: 'system-ui, sans-serif',
  padding: '24px',
};

const titleStyle: CSSProperties = {
  marginBottom: '16px',
  fontSize: '14px',
  fontWeight: 600,
  color: 'var(--color-text-muted)',
};

const swatchGridStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
};

const swatchWrapStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
  minWidth: '80px',
};

const colorBoxStyle = (token: string): CSSProperties => ({
  width: '72px',
  height: '56px',
  borderRadius: '8px',
  background: `var(--${token})`,
  border: '1px solid rgba(0,0,0,0.08)',
});

const labelStyle: CSSProperties = {
  fontSize: '10px',
  color: 'var(--color-text-muted)',
  textAlign: 'center',
  wordBreak: 'break-all',
  maxWidth: '80px',
};

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
  render: () => (
    <div style={baseContainerStyle}>
      <h3 style={titleStyle}>SEMANTIC TOKENS</h3>
      <div style={swatchGridStyle}>
        {semanticColors.map((token) => (
          <div key={token} style={swatchWrapStyle}>
            <div style={colorBoxStyle(token)} />
            <span style={labelStyle}>{token}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Palette: StoryObj = {
  render: () => (
    <div
      style={{
        ...baseContainerStyle,
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      {paletteGroups.map((group) => (
        <div key={group.label}>
          <h3 style={{ ...titleStyle, marginBottom: '12px' }}>{group.label.toUpperCase()}</h3>
          <div style={swatchGridStyle}>
            {group.tokens.map((token) => (
              <div key={token} style={swatchWrapStyle}>
                <div style={colorBoxStyle(token)} />
                <span style={labelStyle}>{token}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
