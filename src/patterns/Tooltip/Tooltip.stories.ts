import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Tooltip from './Tooltip.vue';
import Button from '../../primitives/Button/Button.vue';

const meta: Meta<typeof Tooltip> = {
  title: 'Patterns/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A tooltip component that displays contextual information when hovering over or focusing on its trigger element.',
      },
    },
  },
  argTypes: {
    content: {
      control: 'text',
      table: { category: 'Data' },
      description: 'The text content to display inside the tooltip.',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      table: { category: 'Appearance' },
      description: 'The preferred side of the trigger to render the tooltip.',
    },
    sideOffset: {
      control: 'number',
      table: { category: 'Appearance' },
      description: 'The distance in pixels from the trigger.',
    },
    delayDuration: {
      control: 'number',
      table: { category: 'Appearance' },
      description: 'The delay in milliseconds before the tooltip appears.',
    },
    default: {
      table: { category: 'Slots', type: { summary: 'VNode' } },
      description: 'The trigger element.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: { content: 'This is a helpful tooltip', side: 'top', sideOffset: 5, delayDuration: 200 },
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center justify-center h-64">
        <Tooltip v-bind="args">
          <Button colorStyle="dark">Hover me</Button>
        </Tooltip>
      </div>
    `,
  }),
};

export const BottomSide: Story = {
  args: { content: 'Tooltip on the bottom', side: 'bottom' },
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center justify-center h-64">
        <Tooltip v-bind="args">
          <Button colorStyle="dark">Hover me</Button>
        </Tooltip>
      </div>
    `,
  }),
};

export const LeftSide: Story = {
  args: { content: 'Tooltip on the left', side: 'left' },
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center justify-center h-64">
        <Tooltip v-bind="args">
          <Button colorStyle="dark">Hover me</Button>
        </Tooltip>
      </div>
    `,
  }),
};

export const RightSide: Story = {
  args: { content: 'Tooltip on the right', side: 'right' },
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center justify-center h-64">
        <Tooltip v-bind="args">
          <Button colorStyle="dark">Hover me</Button>
        </Tooltip>
      </div>
    `,
  }),
};

export const LongContent: Story = {
  args: {
    content:
      'This is a much longer tooltip with more detailed information that might span multiple lines.',
    side: 'top',
  },
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center justify-center h-64">
        <Tooltip v-bind="args">
          <Button colorStyle="dark">Hover for details</Button>
        </Tooltip>
      </div>
    `,
  }),
};
