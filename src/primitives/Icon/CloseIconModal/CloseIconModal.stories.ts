import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CloseIconModal from './CloseIconModal.vue';

/**
 * The CloseIconModal component is a specific version of the close icon used in modal windows.
 * It follows the design requirements for size and path geometry.
 */
const meta: Meta<typeof CloseIconModal> = {
  title: 'Primitives/Icons/CloseIconModal',
  component: CloseIconModal,
  tags: ['autodocs'],
  argTypes: {
    // No specific props for this icon based on the implementation
  },
  parameters: {
    docs: {
      description: {
        component: 'Specific close icon for modal headers.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CloseIconModal>;

export const Default: Story = {
  render: () => ({
    components: { CloseIconModal },
    template: '<CloseIconModal />',
  }),
};
