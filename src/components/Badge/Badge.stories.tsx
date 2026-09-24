import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Small status or promo label. Store patterns use `ink` + rotate for sale on product cards and `print` on tone fields for sold out; PDP uses `destructive` for sold out.',
      },
    },
  },
  argTypes: {
    variant: {
      description:
        'Visual style — ink/print match Candy Area product cards; sale/soldout/new are alternate accents.',
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'success',
        'warning',
        'sale',
        'soldout',
        'new',
        'tone',
        'ink',
        'print',
      ],
      table: { category: 'Appearance' },
    },
    rotate: {
      description: 'Slight tilt for promo badges on product imagery.',
      control: { type: 'select' },
      options: ['none', 'left', 'right'],
      table: { category: 'Appearance' },
    },
    children: {
      description: 'Badge label text.',
      table: { category: 'Data' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: 'New' } };

/** ProductCard sale badge — matches Candy Area store (ProductItem). */
export const Sale: Story = {
  args: { variant: 'ink', rotate: 'right', children: 'Sale' },
};

/** ProductCard sold-out badge on tone field — matches Candy Area store. */
export const SoldOut: Story = {
  decorators: [
    (Story) => (
      <div data-tone-vars="blueras" className="rounded-xs bg-tone-bg p-md text-tone-ink">
        <Story />
      </div>
    ),
  ],
  args: { variant: 'print', children: 'Sold out' },
};

/** PDP sold-out badge — matches ProductForm. */
export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Sold out' },
};

/** ProductPrice sale badge (non-PDP contexts). */
export const Success: Story = {
  args: { variant: 'success', children: 'Sale' },
};

/** Raw accent sale variant (not used in Candy Area store). */
export const VariantSaleAccent: Story = {
  args: { variant: 'sale', rotate: 'right', children: 'Sale' },
};

/** Raw muted sold-out variant (not used in Candy Area store). */
export const VariantSoldOutMuted: Story = {
  args: { variant: 'soldout', children: 'Sold out' },
};

/** Raw new badge variant (not used in Candy Area store). */
export const VariantNew: Story = {
  args: { variant: 'new', rotate: 'left', children: 'New' },
};

export const Secondary: Story = { args: { variant: 'secondary', children: 'Draft' } };
export const Outline: Story = { args: { variant: 'outline', children: 'Beta' } };

export const OnToneField: Story = {
  decorators: [
    (Story) => (
      <div data-tone="blueras" className="rounded-xl p-lg">
        <Story />
      </div>
    ),
  ],
  args: { variant: 'tone', children: 'Best seller' },
};
