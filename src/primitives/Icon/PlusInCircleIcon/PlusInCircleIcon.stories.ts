import type { Meta, StoryObj } from '@storybook/vue3-vite';
import PlusInCircleIcon from './PlusInCircleIcon.vue';

const meta: Meta<typeof PlusInCircleIcon> = {
  title: 'Primitives/Icons/PlusInCircleIcon',
  component: PlusInCircleIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An SVG icon displaying a plus sign inside a circle. Typically used for increment controls.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PlusInCircleIcon>;

export const Default: Story = {
  render: () => ({
    components: { PlusInCircleIcon },
    template: `
      <div style="padding: 24px; display: inline-flex;">
        <PlusInCircleIcon />
      </div>
    `,
  }),
};
