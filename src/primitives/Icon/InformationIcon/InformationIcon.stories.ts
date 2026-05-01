import type { Meta, StoryObj } from '@storybook/vue3-vite';
import InformationIcon from './InformationIcon.vue';

const meta: Meta<typeof InformationIcon> = {
  title: 'Primitives/Icons/InformationIcon',
  component: InformationIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A primitive SVG icon component used to display an information symbol (an "i" inside a circle). Supports custom stroke colors via the `color` prop.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'color',
      description:
        'The stroke color of the icon. Accepts CSS color values, hex codes, or CSS variables.',
      table: { category: 'Appearance' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InformationIcon>;

/**
 * Default rendering of the icon, using the primary brand color.
 */
export const Default: Story = {
  args: {
    color: 'var(--primary-color-1)',
  },
  render: (args) => ({
    components: { InformationIcon },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 24px; display: inline-flex;">
        <InformationIcon v-bind="args" />
      </div>
    `,
  }),
};

/**
 * The icon configured with an alert semantic color, often used in error states.
 */
export const AlertColor: Story = {
  args: {
    color: 'var(--secondary-color-2-base)',
  },
  render: (args) => ({
    components: { InformationIcon },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 24px; display: inline-flex;">
        <InformationIcon v-bind="args" />
      </div>
    `,
  }),
};
