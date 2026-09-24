import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '@/components/Text/Text';

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: { controls: { disable: true } },
};
export default meta;

const variants = [
  { name: 'display-2xl', sample: 'SWEETS WITH CHARACTER' },
  { name: 'display-xl', sample: 'The Counter' },
  { name: 'display-lg', sample: 'Candy Area' },
  { name: 'heading-xl', sample: 'Heading XL' },
  { name: 'heading-lg', sample: 'Heading LG' },
  { name: 'heading-md', sample: 'Heading MD' },
  { name: 'heading-sm', sample: 'Heading SM' },
  { name: 'meta-md', sample: 'Free shipping · 42 SKU' },
  { name: 'meta-sm', sample: 'Sour · 120g' },
  { name: 'subtitle-lg', sample: 'Subtitle LG — lead line on cards.' },
  { name: 'subtitle-md', sample: 'Subtitle MD — secondary emphasis.' },
  { name: 'body-lg', sample: 'Body large — product description line.' },
  { name: 'body-md', sample: 'Body medium — default paragraph text.' },
  { name: 'body-sm', sample: 'Body small — secondary copy.' },
  { name: 'caption-md', sample: 'Caption MD — hints and fine print.' },
  { name: 'caption-sm', sample: 'Caption SM — dense UI labels.' },
  { name: 'overline', sample: 'Candy of the week' },
] as const;

export const Scale: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-lg p-lg" style={{ fontFamily: 'var(--font-body)' }}>
      {variants.map(({ name, sample }) => (
        <div key={name} className="flex flex-col gap-2xs border-b border-border pb-md">
          <span className="typo-meta-sm text-text-muted">{name}</span>
          <Text variant={name as never}>{sample}</Text>
        </div>
      ))}
    </div>
  ),
};

const fontWeights = [
  { label: '400', value: 400 },
  { label: '600', value: 600 },
  { label: '700', value: 700 },
] as const;

/** Font families, roles, and button type classes (variable woff2 in fonts.css). */
export const Fonts: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-xl p-lg text-text">
      <p className="typo-body-md text-text-muted max-w-2xl">
        Display and heading styles use Cabinet Grotesk (<code className="typo-body-sm">--font-display</code>
        ). Body, meta, caption, overline, and button type use Switzer (
        <code className="typo-body-sm">--font-body</code>). Logo uses the display stack (
        <code className="typo-body-sm">--font-logo</code>).
      </p>

      <section className="flex flex-col gap-md">
        <span className="typo-meta-sm text-text-muted">Cabinet Grotesk</span>
        <p className="typo-heading-lg" style={{ fontFamily: 'var(--font-display)' }}>
          SWEETS WITH CHARACTER
        </p>
        <div className="flex flex-col gap-xs">
          {fontWeights.map(({ label, value }) => (
            <p
              key={label}
              className="typo-body-lg"
              style={{ fontFamily: 'var(--font-display)', fontWeight: value }}
            >
              Weight {label} — The quick brown fox.
            </p>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-md">
        <span className="typo-meta-sm text-text-muted">Switzer</span>
        <p className="typo-body-md" style={{ fontFamily: 'var(--font-body)' }}>
          Default paragraph and UI copy — product descriptions, cart lines, form labels.
        </p>
        <div className="flex flex-col gap-xs">
          {fontWeights.map(({ label, value }) => (
            <p
              key={label}
              className="typo-body-md"
              style={{ fontFamily: 'var(--font-body)', fontWeight: value }}
            >
              Weight {label} — The quick brown fox jumps over the lazy dog.
            </p>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-sm">
        <span className="typo-meta-sm text-text-muted">Button type (Switzer)</span>
        <p className="typo-button-lg">typo-button-lg — Shop all</p>
        <p className="typo-button-md">typo-button-md — Add to cart</p>
        <p className="typo-button-sm">typo-button-sm — Apply</p>
      </section>
    </div>
  ),
};
