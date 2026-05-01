import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { Decorator } from '@storybook/vue3';
import BottomActionBar from './BottomActionBar.vue';
import Button from '../../primitives/Button/Button.vue';
import ProgressBar from '../../domain-level/widgets/ProgressBar/ProgressBar.vue';

const TIERS = [
  { min: 0, max: 2, value: '10%', type: 'discount' },
  { min: 3, max: 5, value: '15%', type: 'discount' },
  { min: 6, max: 999, value: '20%', type: 'discount' },
];

const TRANSLATIONS = {
  label_initial: 'Add flavors for <strong>@@ next_discount @@ off</strong>',
  label_plural:
    'Add <strong>@@ count @@ more</strong> flavors for <strong>@@ next_discount @@ off</strong>',
  label_single: 'Add <strong>1 more</strong> flavor for <strong>@@ next_discount @@ off</strong>',
  label_maximum: '<strong>Maximum discount unlocked</strong>',
  added_count: '(@@ count @@ added)',
};

const desktopDecorator: Decorator = (story) => ({
  components: { story },
  template:
    '<div style="position: relative; width: 960px; height: 120px; overflow: hidden; transform: translateZ(0); border: 1px dashed var(--grey-300); border-radius: var(--radius-sm);"><story /></div>',
});

const mobileDecorator: Decorator = (story) => ({
  components: { story },
  template:
    '<div style="position: relative; width: 375px; height: 180px; overflow: hidden; transform: translateZ(0); border: 1px dashed var(--grey-300); border-radius: var(--radius-sm);"><story /></div>',
});

const meta: Meta<typeof BottomActionBar> = {
  title: 'Patterns/BottomActionBar',
  component: BottomActionBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A responsive bottom action bar that anchors to the bottom of the viewport or its container. Used to present global actions and progress states (e.g., checkout buttons, discount progress).',
      },
    },
  },
  argTypes: {
    isMobile: {
      control: 'boolean',
      table: { category: 'Appearance' },
      description: 'Forces mobile layout regardless of viewport size.',
    },
  },
  args: {
    isMobile: false,
  },
};

export default meta;
type Story = StoryObj<typeof BottomActionBar>;

export const Desktop: Story = {
  decorators: [desktopDecorator],
  args: { isMobile: false },
  render: (args) => ({
    components: { BottomActionBar, Button, ProgressBar },
    setup() {
      return { args, TIERS, TRANSLATIONS };
    },
    template: `
      <BottomActionBar v-bind="args">
        <template #left>
          <ProgressBar :tiers="TIERS" :selected-count="15" :translations="TRANSLATIONS" />
        </template>
        <template #right>
          <Button colorStyle="dark" :transparent="true" :uppercase="false">continue without flavors</Button>
          <Button colorStyle="dark" :uppercase="false">view subscription</Button>
        </template>
      </BottomActionBar>
    `,
  }),
};

export const Mobile: Story = {
  decorators: [mobileDecorator],
  args: { isMobile: true },
  render: (args) => ({
    components: { BottomActionBar, Button },
    setup() {
      return { args };
    },
    template: `
      <BottomActionBar v-bind="args">
        <template #right>
          <Button colorStyle="dark" type="block" :uppercase="false">view subscription</Button>
          <Button colorStyle="dark" type="block" :transparent="true" :uppercase="false">continue without flavors</Button>
        </template>
      </BottomActionBar>
    `,
  }),
};
