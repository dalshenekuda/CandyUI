import type { Meta, StoryObj } from '@storybook/vue3-vite';
import SelectButton from './SelectButton.vue';

/**
 * The SelectButton component is a toggleable button used for selections (e.g., filters, variants).
 * It supports different sizes and color styles.
 */
const meta: Meta<typeof SelectButton> = {
  title: 'Primitives/SelectButton',
  component: SelectButton,
  tags: ['autodocs'],
  render: (args) => ({
    components: { SelectButton },
    setup() {
      return { args };
    },
    template: '<SelectButton v-bind="args">{{ args.default }}</SelectButton>',
  }),
  argTypes: {
    isActive: {
      control: 'boolean',
      description: 'Controls the active/selected state.',
      table: { category: 'State' },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disables the button.',
      table: { category: 'State' },
    },
    sizeStyle: {
      control: 'select',
      options: ['s', 'm'],
      description: 'The size variant of the button.',
      table: { category: 'Appearance' },
    },
    colorStyle: {
      control: 'select',
      options: ['light', 'medium', 'dark'],
      description: 'The color variant of the button.',
      table: { category: 'Appearance' },
    },
    onClick: {
      action: 'click',
      description: 'Fired when the button is clicked.',
      table: { category: 'Emits' },
    },
    default: {
      control: 'text',
      description: 'The button content.',
      table: { category: 'Slots' },
    },
  },
  args: {
    isActive: false,
    isDisabled: false,
    sizeStyle: 'm',
    colorStyle: 'dark',
    default: 'Select Option',
  },
};

export default meta;
type Story = StoryObj<typeof SelectButton>;

export const Dark: Story = {
  args: { colorStyle: 'dark', default: 'Dark Variant' },
};

export const DarkActive: Story = {
  args: { colorStyle: 'dark', isActive: true, default: 'Dark Active' },
};

export const Medium: Story = {
  args: { colorStyle: 'medium', default: 'Medium Variant' },
};

export const MediumActive: Story = {
  args: { colorStyle: 'medium', isActive: true, default: 'Medium Active' },
};

export const Small: Story = {
  args: { sizeStyle: 's', default: 'Small Size' },
};

export const Disabled: Story = {
  args: { isDisabled: true, default: 'Disabled Button' },
};
