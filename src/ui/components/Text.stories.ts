import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Text from './Text.vue';

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A primitive text component enforcing design system typography. Use this instead of raw HTML tags to guarantee consistent font families, sizes, weights, and colors across the application.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'body', 'caption'],
      table: { category: 'Appearance' },
      description: 'The typographic variant mapping to specific CSS classes.',
    },
    weight: {
      control: 'select',
      options: [undefined, 'light', 'regular', 'medium', 'semibold', 'bold'],
      table: { category: 'Appearance' },
      description: 'Overrides the default font weight of the selected variant.',
    },
    color: {
      control: 'select',
      options: [
        undefined,
        'primary-color-1',
        'primary-color-2',
        'primary-color-3',
        'grey-1000',
        'grey-900',
        'grey-800',
        'grey-700',
        'grey-600',
        'grey-500',
        'secondary-color-2-base',
        'secondary-color-6-base',
      ],
      table: { category: 'Appearance' },
      description: 'The text color drawn from design tokens.',
    },
    as: {
      control: 'text',
      table: { category: 'Appearance' },
      description: 'Overrides the default HTML tag (e.g. "span", "p", "div").',
    },
  },
  args: {
    variant: 'body',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { variant: 'body' },
  render: (args) => ({
    components: { Text },
    setup: () => ({ args }),
    template: '<Text v-bind="args">The quick brown fox jumps over the lazy dog.</Text>',
  }),
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { Text },
    template: `
      <div style="display:flex; flex-direction:column; gap:24px; padding:24px;">
        <Text variant="h1">H1 — The quick brown fox</Text>
        <Text variant="h2">H2 — The quick brown fox</Text>
        <Text variant="h3">H3 — The quick brown fox</Text>
        <Text variant="h4">H4 — The quick brown fox</Text>
        <Text variant="body">Body — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text variant="caption">Caption — Small supplementary text, labels, hints.</Text>
      </div>
    `,
  }),
};

export const ColorVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { Text },
    template: `
      <div style="display:flex; flex-direction:column; gap:16px; padding:24px;">
        <Text variant="body" color="primary-color-1">primary-color-1 — Dark navy</Text>
        <Text variant="body" color="primary-color-3">primary-color-3 — Mid blue</Text>
        <Text variant="body" color="grey-900">grey-900 — Dark grey</Text>
        <Text variant="body" color="grey-600">grey-600 — Mid grey</Text>
        <Text variant="body" color="secondary-color-2-base">secondary-color-2-base — Red</Text>
        <Text variant="body" color="secondary-color-6-base">secondary-color-6-base — Green</Text>
      </div>
    `,
  }),
};

export const WeightOverrides: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { Text },
    template: `
      <div style="display:flex; flex-direction:column; gap:16px; padding:24px;">
        <Text variant="body" weight="light">weight: light (300)</Text>
        <Text variant="body" weight="regular">weight: regular (400)</Text>
        <Text variant="body" weight="medium">weight: medium (500)</Text>
        <Text variant="body" weight="semibold">weight: semibold (600)</Text>
        <Text variant="body" weight="bold">weight: bold (700)</Text>
      </div>
    `,
  }),
};
