import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Modal from './Modal.vue';
import Button from '../../primitives/Button/Button.vue';

const meta: Meta<typeof Modal> = {
  title: 'Patterns/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A flexible modal dialog component with customizable sizes, header, body, and footer slots. Supports accessible focus trapping and keyboard navigation via Reka UI.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg', 'xl', 'full'],
      table: { category: 'Appearance' },
      description: 'The maximum width of the modal dialog.',
    },
    noCloseOnBackdrop: {
      control: 'boolean',
      table: { category: 'State' },
      description: 'Prevents closing the modal when clicking outside.',
    },
    closeOnEscape: {
      control: 'boolean',
      table: { category: 'State' },
      description: 'Allows closing the modal by pressing the Escape key.',
    },
    modelValue: {
      table: { category: 'State' },
      description: 'Controls the visibility of the modal.',
    },
    'onUpdate:modelValue': {
      action: 'update:modelValue',
      table: { category: 'Emits' },
      description: 'Emitted to sync visibility state.',
    },
    'header-close': {
      table: { category: 'Slots', type: { summary: 'VNode' } },
      description: 'Slot for the close button icon.',
    },
    header: {
      table: { category: 'Slots', type: { summary: 'VNode' } },
      description: 'Slot for the modal title or header content.',
    },
    body: {
      table: { category: 'Slots', type: { summary: 'VNode' } },
      description: 'Slot for the main content of the modal.',
    },
    footer: {
      table: { category: 'Slots', type: { summary: 'VNode' } },
      description: 'Slot for action buttons at the bottom of the modal.',
    },
  },
  args: {
    size: 'lg',
    noCloseOnBackdrop: false,
    closeOnEscape: true,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false);
      return { args, isOpen };
    },
    template: `
      <div>
        <Button @click="isOpen = true">Open Modal</Button>
        <Modal v-bind="args" v-model="isOpen">
          <template #header>
            <h2 style="margin: 0; font-size: 1.25rem;">Modal Title</h2>
          </template>
          <template #body>
            <div style="padding: 1.5rem 2rem;">
              <p>This is the modal body content. You can put anything here.</p>
            </div>
          </template>
          <template #footer>
            <Button colorStyle="dark" @click="isOpen = false">Confirm</Button>
            <Button colorStyle="dark" transparent @click="isOpen = false">Cancel</Button>
          </template>
        </Modal>
      </div>
    `,
  }),
};

export const SmallSize: Story = {
  args: { size: 'md' },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false);
      return { args, isOpen };
    },
    template: `
      <div>
        <Button @click="isOpen = true">Open Small Modal</Button>
        <Modal v-bind="args" v-model="isOpen">
          <template #header>
            <h2 style="margin: 0;">Confirm Action</h2>
          </template>
          <template #body>
            <div style="padding: 1.5rem 2rem;">
              <p>Are you sure you want to proceed?</p>
            </div>
          </template>
          <template #footer>
            <Button colorStyle="dark" @click="isOpen = false">Yes</Button>
            <Button colorStyle="dark" transparent @click="isOpen = false">No</Button>
          </template>
        </Modal>
      </div>
    `,
  }),
};

export const NoBackdropClose: Story = {
  args: { noCloseOnBackdrop: true },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false);
      return { args, isOpen };
    },
    template: `
      <div>
        <Button @click="isOpen = true">Open (no backdrop close)</Button>
        <Modal v-bind="args" v-model="isOpen">
          <template #body>
            <div style="padding: 1.5rem 2rem;">
              <p>Clicking outside won't close this modal. Use the X button.</p>
            </div>
          </template>
          <template #footer>
            <Button colorStyle="dark" @click="isOpen = false">Close</Button>
          </template>
        </Modal>
      </div>
    `,
  }),
};
