import type { Meta, StoryObj } from '@storybook/vue3-vite';
import QuestionIcon from './QuestionIcon.vue';

const meta: Meta<typeof QuestionIcon> = {
  title: 'Primitives/Icons/QuestionIcon',
  component: QuestionIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An SVG icon displaying a question mark inside a circle. Typically used for tooltips or help interactions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuestionIcon>;

export const Default: Story = {
  render: () => ({
    components: { QuestionIcon },
    template: `
      <div style="padding: 24px; display: inline-flex;">
        <QuestionIcon />
      </div>
    `,
  }),
};
