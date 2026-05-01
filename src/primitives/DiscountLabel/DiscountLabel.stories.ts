import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Text from '@/ui/components/Text.vue';
import { DiscountLabel } from './index';

/**
 * A compact discount/status badge built on top of the Tag primitive.
 * Supports predefined styles and a default slot for custom content.
 */
const meta: Meta<typeof DiscountLabel> = {
  title: 'Primitives/DiscountLabel',
  component: DiscountLabel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Status/discount badge that reuses the Tag primitive styles. The transparent variant keeps transparent background and primary text color.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Text to display in the label.',
      table: { category: 'Data' },
    },
    tagStyle: {
      description: 'Visual style variant.',
      control: 'radio',
      options: ['neutral', 'alarm', 'yellow', 'transparent'],
      table: { category: 'Appearance', defaultValue: { summary: 'neutral' } },
    },
    default: {
      description: 'Slot for custom content. Overrides the label prop.',
      table: { category: 'Slots', type: { summary: 'VNode | string' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DiscountLabel>;

/**
 * Default neutral style (blue background).
 */
export const Neutral: Story = {
  args: {
    label: 'SALE',
    tagStyle: 'neutral',
  },
};

/**
 * Alarm style for urgent or high-value discounts (red background).
 */
export const Alarm: Story = {
  args: {
    label: '15% OFF',
    tagStyle: 'alarm',
  },
};

/**
 * Yellow style for specific highlights.
 */
export const Yellow: Story = {
  args: {
    label: 'LIMITED',
    tagStyle: 'yellow',
  },
};

/**
 * Transparent style with primary color text.
 */
export const Transparent: Story = {
  args: {
    label: 'NEW',
    tagStyle: 'transparent',
  },
};

/**
 * Example using the default slot for custom content.
 */
export const CustomSlot: Story = {
  args: {
    tagStyle: 'neutral',
  },
  render: (args) => ({
    components: { DiscountLabel, Text },
    setup() {
      return { args };
    },
    template: `
      <DiscountLabel v-bind="args">
        <Text as="span" variant="b3" weight="semibold">CUSTOM</Text>
      </DiscountLabel>
    `,
  }),
};
