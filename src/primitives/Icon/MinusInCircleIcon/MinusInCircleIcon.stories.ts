import type { Meta, StoryObj } from '@storybook/vue3-vite';
import MinusInCircleIcon from './MinusInCircleIcon.vue';

const meta: Meta<typeof MinusInCircleIcon> = {
  title: 'Primitives/Icons/MinusInCircleIcon',
  component: MinusInCircleIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An SVG icon displaying a minus sign inside a circle. Typically used for decrement controls.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MinusInCircleIcon>;

export const Default: Story = {
  render: () => ({
    components: { MinusInCircleIcon },
    template: `
      <div style="padding: 24px; display: inline-flex;">
        <MinusInCircleIcon />
      </div>
    `,
  }),
};
