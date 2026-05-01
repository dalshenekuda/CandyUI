import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Loader from './Loader.vue';

const meta: Meta<typeof Loader> = {
  title: 'Primitives/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Circular subscription loader with built-in spin animation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  render: () => ({
    components: { Loader },
    template: `
      <div style="padding: var(--spacing-m); display: inline-flex;">
        <Loader />
      </div>
    `,
  }),
};
