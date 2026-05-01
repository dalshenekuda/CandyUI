import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Divider from './Divider.vue';

/**
 * The Divider component is a simple horizontal line used to separate content sections.
 * It uses the brand spacing and color tokens.
 */
const meta: Meta<typeof Divider> = {
  title: 'Primitives/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'text',
      description: 'Color token name from the design system (without var() wrapper).',
      table: { category: 'Appearance' },
    },
  },
  args: {
    color: 'grey-100',
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 24px; background: white;">
        <p style="margin-bottom: 16px;">Content above</p>
        <Divider v-bind="args" />
        <p style="margin-top: 16px;">Content below</p>
      </div>
    `,
  }),
};

export const Primary: Story = {
  args: { color: 'primary-color-1' },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 24px; background: white;">
        <Divider v-bind="args" />
      </div>
    `,
  }),
};
