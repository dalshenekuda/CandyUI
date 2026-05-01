import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ChevronIcon from './ChevronIcon.vue';

/**
 * The ChevronIcon is a standard navigational icon used for collapses and dropdowns.
 */
const meta: Meta<typeof ChevronIcon> = {
  title: 'Primitives/Icons/ChevronIcon',
  component: ChevronIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChevronIcon>;

export const Default: Story = {
  render: () => ({
    components: { ChevronIcon },
    template: '<ChevronIcon />',
  }),
};

export const Rotated: Story = {
  render: () => ({
    components: { ChevronIcon },
    template: '<ChevronIcon style="transform: rotate(180deg)" />',
  }),
};
