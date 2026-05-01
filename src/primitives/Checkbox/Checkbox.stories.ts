import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Checkbox from './Checkbox.vue';

const meta: Meta<typeof Checkbox> = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Reusable checkbox primitive with checked and error states. Emits update:checked on toggle.',
      },
    },
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: '<Checkbox v-bind="args" />',
  }),
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controls checked state.',
      table: { category: 'State' },
    },
    error: {
      control: 'boolean',
      description: 'Shows error border when checkbox is unchecked.',
      table: { category: 'State' },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for assistive technologies.',
      table: { category: 'Appearance' },
    },
    'onUpdate:checked': {
      action: 'update:checked',
      description: 'Fired when checkbox state changes.',
      table: { category: 'Emits', type: { summary: 'boolean' } },
    },
  },
  args: {
    checked: false,
    error: false,
    ariaLabel: 'Accept terms and conditions',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/**
 * Default state: unchecked checkbox.
 */
export const Default: Story = {};

/**
 * Checked state with the checkmark icon.
 */
export const Checked: Story = {
  args: {
    checked: true,
  },
};

/**
 * Error state while unchecked.
 */
export const Error: Story = {
  args: {
    error: true,
    checked: false,
  },
};
