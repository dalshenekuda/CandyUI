import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Tag from './Tag.vue';

/**
 * The Tag component is a small label used for status, categories, or badges.
 * It supports predefined color variants and custom background/text colors.
 */
const meta: Meta<typeof Tag> = {
  title: 'Primitives/Tag',
  component: Tag,
  tags: ['autodocs'],
  render: (args) => ({
    components: { Tag },
    setup() {
      return { args };
    },
    template: '<Tag v-bind="args">{{ args.default }}</Tag>',
  }),
  argTypes: {
    styleBg: {
      control: 'select',
      options: ['neutral', 'alarm', 'yellow'],
      description: 'Predefined background color variant.',
      table: { category: 'Appearance' },
    },
    textColor: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Predefined text color variant.',
      table: { category: 'Appearance' },
    },
    customBgColor: {
      control: 'color',
      description: 'Custom background color (hex or CSS variable).',
      table: { category: 'Appearance' },
    },
    customTextColor: {
      control: 'color',
      description: 'Custom text color (hex or CSS variable).',
      table: { category: 'Appearance' },
    },
    noWrap: {
      control: 'boolean',
      description: 'Prevents text from wrapping to the next line.',
      table: { category: 'Appearance' },
    },
    default: {
      control: 'text',
      description: 'The tag content.',
      table: { category: 'Slots' },
    },
  },
  args: {
    styleBg: 'neutral',
    textColor: 'light',
    default: 'Default Tag',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Neutral: Story = {
  args: { styleBg: 'neutral', default: 'Neutral Tag' },
};

export const Alarm: Story = {
  args: { styleBg: 'alarm', default: 'Alarm Tag' },
};

export const Yellow: Story = {
  args: { styleBg: 'yellow', textColor: 'dark', default: 'Yellow Tag' },
};

export const CustomColors: Story = {
  args: {
    customBgColor: '#e4f2fd',
    customTextColor: '#005bab',
    default: 'Custom Colors',
  },
};
