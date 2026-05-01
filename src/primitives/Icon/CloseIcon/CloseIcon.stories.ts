import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CloseIcon from './CloseIcon.vue';

const meta: Meta<typeof CloseIcon> = {
  title: 'Primitives/Icons/CloseIcon',
  component: CloseIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An SVG close (X) icon supporting light and dark color styles.',
      },
    },
  },
  argTypes: {
    colorStyle: {
      control: 'select',
      options: ['dark', 'light'],
      table: { category: 'Appearance' },
      description: 'The color theme of the icon.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CloseIcon>;

export const Dark: Story = {
  args: { colorStyle: 'dark' },
  render: (args) => ({
    components: { CloseIcon },
    setup: () => ({ args }),
    template: `
      <div style="padding: 24px; display: inline-flex;">
        <CloseIcon v-bind="args" />
      </div>
    `,
  }),
};

export const Light: Story = {
  args: { colorStyle: 'light' },
  render: (args) => ({
    components: { CloseIcon },
    setup: () => ({ args }),
    template: `
      <div style="padding: 24px; display: inline-flex; background: var(--primary-color-1);">
        <CloseIcon v-bind="args" />
      </div>
    `,
  }),
};
