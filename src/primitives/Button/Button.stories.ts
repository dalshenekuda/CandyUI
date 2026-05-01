import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Button from './Button.vue';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A versatile button primitive supporting various visual styles (filled, transparent, ghost) and layouts (inline, block). Handles both `<button>` and `<a>` elements dynamically depending on the provided props.',
      },
    },
  },
  argTypes: {
    colorStyle: {
      control: 'select',
      options: ['light', 'dark'],
      table: { category: 'Appearance' },
      description: 'The color theme of the button.',
    },
    type: {
      control: 'select',
      options: ['button', 'block'],
      table: { category: 'Appearance' },
      description: 'The layout type of the button. Block makes it span 100% width.',
    },
    transparent: {
      control: 'boolean',
      table: { category: 'Appearance' },
      description: 'Removes background fill.',
    },
    ghost: {
      control: 'boolean',
      table: { category: 'Appearance' },
      description:
        'Renders the button as a ghost link style (usually lowercase with underline on hover).',
    },
    uppercase: {
      control: 'boolean',
      table: { category: 'Appearance' },
      description: 'Forces text to uppercase.',
    },
    disabled: {
      control: 'boolean',
      table: { category: 'State' },
      description: 'Disables interaction and styles it accordingly.',
    },
    stopPropagation: {
      control: 'boolean',
      table: { category: 'State' },
      description: 'Prevents click events from bubbling up.',
    },
  },
  args: {
    colorStyle: 'dark',
    type: 'button',
    transparent: false,
    ghost: false,
    uppercase: true,
    disabled: false,
    stopPropagation: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DarkFilled: Story = {
  args: { colorStyle: 'dark', transparent: false, ghost: false },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Click Me</Button>',
  }),
};

export const DarkTransparent: Story = {
  args: { colorStyle: 'dark', transparent: true, ghost: false },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Click Me</Button>',
  }),
};

export const DarkGhost: Story = {
  args: { colorStyle: 'dark', ghost: true, uppercase: false },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">cancel changes</Button>',
  }),
};

export const LightTransparent: Story = {
  args: { colorStyle: 'light', transparent: true, ghost: false },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template:
      '<div style="background: #333; padding: 20px;"><Button v-bind="args">Click Me</Button></div>',
  }),
};

export const LightGhost: Story = {
  args: { colorStyle: 'light', ghost: true, uppercase: false },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template:
      '<div style="background: #333; padding: 20px;"><Button v-bind="args">cancel changes</Button></div>',
  }),
};

export const Disabled: Story = {
  args: { colorStyle: 'dark', transparent: false, ghost: false, disabled: true },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Disabled Button</Button>',
  }),
};

export const BlockType: Story = {
  args: { colorStyle: 'dark', transparent: false, ghost: false, type: 'block' },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Block Action</Button>',
  }),
};

export const AllStates: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px;">
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <Button colorStyle="dark">Filled</Button>
          <Button colorStyle="dark" :transparent="true">Transparent</Button>
          <Button colorStyle="dark" :ghost="true" :uppercase="false">cancel changes</Button>
          <Button colorStyle="dark" :disabled="true">Disabled</Button>
        </div>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; background: #333; padding: 16px; border-radius: 8px;">
          <Button colorStyle="light" :transparent="true">Light Transparent</Button>
          <Button colorStyle="light" :ghost="true" :uppercase="false">cancel changes</Button>
        </div>
      </div>
    `,
  }),
};
