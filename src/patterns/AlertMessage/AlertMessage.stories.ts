import type { Meta, StoryObj } from '@storybook/vue3';
import AlertMessage from './AlertMessage.vue';

const meta: Meta<typeof AlertMessage> = {
  title: 'Patterns/AlertMessage',
  component: AlertMessage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '`AlertMessage` is a responsive pattern used to display important inline information or warnings to the user. It supports two visual variants: `notification` for general informative messages and `alert` for errors or critical warnings. The component is fully responsive, filling `100%` width on mobile devices and constraining to a maximum width (`345px`) on desktop. It includes an interactive close button that emits a `close` event and updates its `visible` state accordingly.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['notification', 'alert'],
      description:
        'The visual style of the alert message. Determines the background, border, and icon colors. Use `notification` for general info and `alert` for critical errors.',
      table: { category: 'Appearance' },
    },
    visible: {
      control: 'boolean',
      description:
        'Controls whether the alert message is currently displayed. When `false`, the component is completely removed from the DOM.',
      table: { category: 'State' },
    },
    onClose: {
      action: 'close',
      description: 'Emitted when the user clicks the close button.',
      table: { category: 'Emits' },
    },
    'onUpdate:visible': {
      action: 'update:visible',
      description:
        'Emitted to support v-model:visible binding. Fires with `false` when the close button is clicked.',
      table: { category: 'Emits' },
    },
    default: {
      description: 'The content of the alert message. Accepts raw text or HTML/Vue components.',
      table: { category: 'Slots', type: { summary: 'VNode | string' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertMessage>;

/**
 * Standard notification variant used for general info.
 */
export const Notification: Story = {
  args: {
    variant: 'notification',
  },
  render: (args) => ({
    components: { AlertMessage },
    setup() {
      return { args };
    },
    template: `
      <AlertMessage v-bind="args">
        This is a standard notification message with information for the user.
      </AlertMessage>
    `,
  }),
};

/**
 * Alert variant used for errors or limitations.
 */
export const Alert: Story = {
  args: {
    variant: 'alert',
  },
  render: (args) => ({
    components: { AlertMessage },
    setup() {
      return { args };
    },
    template: `
      <AlertMessage v-bind="args">
        API request limit reached or an error occurred during execution.
      </AlertMessage>
    `,
  }),
};

/**
 * Responsive behavior preview (simulating a mobile container).
 */
export const MobileLayout: Story = {
  args: {
    variant: 'notification',
  },
  render: (args) => ({
    components: { AlertMessage },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 320px; border: 1px dashed #ccc; padding: 16px;">
        <AlertMessage v-bind="args">
          This container simulates a mobile view where the component takes 100% width.
        </AlertMessage>
      </div>
    `,
  }),
};
