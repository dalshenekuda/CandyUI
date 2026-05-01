import type { Meta, StoryObj } from '@storybook/vue3-vite';
import RemoveIcon from './RemoveIcon.vue';

const meta: Meta<typeof RemoveIcon> = {
  title: 'Primitives/Icons/RemoveIcon',
  component: RemoveIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An SVG icon displaying a trash bin. Typically used for destructive remove or delete actions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RemoveIcon>;

export const Default: Story = {
  render: () => ({
    components: { RemoveIcon },
    template: `
      <div style="padding: 24px; display: inline-flex;">
        <RemoveIcon />
      </div>
    `,
  }),
};
