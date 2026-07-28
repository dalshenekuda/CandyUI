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
  { name: 'body-lg', sample: 'Body large — product description line.' },
  { name: 'body-md', sample: 'Body medium — default paragraph text.' },
  { name: 'body-sm', sample: 'Body small — secondary copy.' },
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
