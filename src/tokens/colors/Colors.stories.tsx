import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    controls: { disable: true },
  },
};
export default meta;

const baseContainerStyle: CSSProperties = {
  fontFamily: 'var(--font-body)',
  padding: '24px',
};

const titleStyle: CSSProperties = {
  marginBottom: '16px',
  fontSize: '13px',
  fontWeight: 600,
  color: 'var(--color-text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
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

const colorBoxStyle = (token: string, onDark?: boolean): CSSProperties => ({
  width: '72px',
  height: '56px',
  borderRadius: '8px',
  background: onDark
    ? `linear-gradient(var(--${token}), var(--${token})), var(--palette-ink-1000)`
    : `var(--${token})`,
  border: '1px solid var(--color-border)',
});

const labelStyle: CSSProperties = {
  fontSize: '10px',
  color: 'var(--color-text-muted)',
  textAlign: 'center',
  wordBreak: 'break-all',
  maxWidth: '80px',
};

const semanticColors = [
  'color-bg',
  'color-surface',
  'color-surface-raised',
  'color-surface-sunken',
  'color-text',
  'color-text-muted',
  'color-text-subtle',
  'color-text-on-brand',
  'color-brand',
  'color-brand-hover',
  'color-brand-dark',
  'color-brand-light',
  'color-accent',
  'color-accent-dark',
  'color-accent-light',
  'color-accent-alt',
  'color-accent-warm',
  'color-border',
  'color-border-subtle',
  'color-border-strong',
  'color-danger',
  'color-danger-bg',
  'color-success',
  'color-success-bg',
  'color-warning',
  'color-warning-bg',
  'color-overlay',
];

type PaletteGroup = {
  label: string;
  tokens: string[];
  /** Show swatch on ink-1000 so transparent white-alpha reads correctly */
  onDark?: boolean;
};

const paletteGroups: PaletteGroup[] = [
  {
    label: 'Ink',
    tokens: [
      'palette-ink-1000',
      'palette-ink-900',
      'palette-ink-800',
      'palette-ink-600',
      'palette-ink-500',
      'palette-ink-300',
      'palette-ink-200',
      'palette-ink-100',
      'palette-paper',
      'palette-white',
    ],
  },
  {
    label: 'Blue Raspberry',
    tokens: [
      'palette-blueras-700',
      'palette-blueras-500',
      'palette-blueras-400',
      'palette-blueras-200',
    ],
  },
  {
    label: 'Raspberry',
    tokens: ['palette-raspberry-700', 'palette-raspberry-600', 'palette-raspberry-200'],
  },
  {
    label: 'Spearmint',
    tokens: ['palette-spearmint-700', 'palette-spearmint-500', 'palette-spearmint-200'],
  },
  { label: 'Lemon', tokens: ['palette-lemon-700', 'palette-lemon-600', 'palette-lemon-200'] },
  { label: 'Lime', tokens: ['palette-lime-700', 'palette-lime-500', 'palette-lime-200'] },
  {
    label: 'Night (dark theme primitives)',
    tokens: [
      'palette-dark-base',
      'palette-dark-surface',
      'palette-dark-raised',
      'palette-dark-border',
      'palette-dark-border-subtle',
      'palette-night-text',
      'palette-night-border-strong',
    ],
  },
  {
    label: 'White alpha',
    onDark: true,
    tokens: [
      'palette-white-100',
      'palette-white-90',
      'palette-white-80',
      'palette-white-70',
      'palette-white-60',
      'palette-white-50',
      'palette-white-40',
      'palette-white-30',
      'palette-white-20',
      'palette-white-10',
    ],
  },
];

const toneNames = ['blueras', 'raspberry', 'spearmint', 'lemon', 'lime', 'ink', 'paper'] as const;

export const Semantic: StoryObj = {
  render: () => (
    <div style={baseContainerStyle}>
      <h3 style={titleStyle}>Semantic tokens</h3>
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
    <div style={{ ...baseContainerStyle, display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {paletteGroups.map((group) => (
        <div key={group.label}>
          <h3 style={{ ...titleStyle, marginBottom: '12px' }}>{group.label}</h3>
          <div style={swatchGridStyle}>
            {group.tokens.map((token) => (
              <div key={token} style={swatchWrapStyle}>
                <div style={colorBoxStyle(token, group.onDark)} />
                <span style={labelStyle}>{token}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Tones: StoryObj = {
  render: () => (
    <div style={{ ...baseContainerStyle, display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h3 style={titleStyle}>Tone fields (data-tone)</h3>
      {toneNames.map((tone) => (
        <div
          key={tone}
          data-tone={tone}
          style={{
            padding: '24px 32px',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '24px' }}>
            {tone.toUpperCase()}
          </span>
          <span style={{ fontSize: '12px', opacity: 0.8 }}>--tone-bg / --tone-ink</span>
        </div>
      ))}
    </div>
  ),
};
