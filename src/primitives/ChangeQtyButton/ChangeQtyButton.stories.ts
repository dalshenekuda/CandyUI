import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { reactive, watch } from 'vue';
import ChangeQtyButton from './ChangeQtyButton.vue';
import type { ChangeQtyButtonProps } from './types';

/**
 * A versatile quantity selector button used across product cards and modals.
 * Supports two main modes: a full action button that transforms into a stepper (`inButton`),
 * and a simple circular icon stepper (`empty`).
 */
const meta: Meta<typeof ChangeQtyButton> = {
  title: 'Primitives/ChangeQtyButton',
  component: ChangeQtyButton,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div style="max-width: 240px; padding: 1rem;"><story /></div>',
    }),
  ],
  render: (args) => ({
    components: { ChangeQtyButton },
    setup() {
      const props = args as unknown as ChangeQtyButtonProps;
      const state = reactive({ qty: props.qty ?? 0 });
      watch(
        () => props.qty,
        (val) => {
          state.qty = val ?? 0;
        }
      );

      const handleChangeQty = (type: 'plus' | 'minus') => {
        console.log('Event: change-qty', type);
        if (type === 'plus') {
          state.qty++;
        } else if (type === 'minus' && state.qty > 0) {
          state.qty--;
        }
      };

      const handleAdditionAction = () => {
        console.log('Event: addition-action');
      };

      return { args, state, handleChangeQty, handleAdditionAction };
    },
    template: `
      <ChangeQtyButton 
        v-bind="args" 
        :qty="state.qty" 
        @change-qty="handleChangeQty"
        @addition-action="handleAdditionAction"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        component: 'Quantity selector with multiple styles and sizes.',
      },
    },
  },
  argTypes: {
    qty: {
      description: 'Current quantity.',
      table: { category: 'Data' },
    },
    type: {
      description: 'Display mode.',
      control: 'radio',
      options: ['inButton', 'empty'],
      table: { category: 'Appearance', defaultValue: { summary: 'inButton' } },
    },
    size: {
      description: 'Component size.',
      control: 'radio',
      options: ['small', 'big'],
      table: { category: 'Appearance', defaultValue: { summary: 'small' } },
    },
    buttonStyle: {
      description: 'Color style for inButton mode.',
      control: 'radio',
      options: ['dark', 'light'],
      table: { category: 'Appearance', defaultValue: { summary: 'dark' } },
    },
    isDisabled: {
      description: 'Disables the primary button (when qty is 0).',
      table: { category: 'State', defaultValue: { summary: 'false' } },
    },
    decreaseDisabled: {
      description: 'Disables the minus button.',
      table: { category: 'State', defaultValue: { summary: 'false' } },
    },
    increaseDisabled: {
      description: 'Disables the plus button.',
      table: { category: 'State', defaultValue: { summary: 'false' } },
    },
    addButtonText: {
      description: 'Text shown when quantity is 0 in inButton mode.',
      table: { category: 'Data', defaultValue: { summary: 'Select' } },
    },
    'onChange-qty': {
      description: 'Emitted when plus or minus is clicked.',
      table: { category: 'Emits' },
    },
    'onAddition-action': {
      description: 'Emitted for additional actions.',
      table: { category: 'Emits' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChangeQtyButton>;

/**
 * Initial state in a product card: a full "Select" button.
 */
export const InButtonZero: Story = {
  name: 'InButton — Zero state',
  args: {
    qty: 0,
    type: 'inButton',
    addButtonText: 'Select',
  },
};

/**
 * Active state in a product card: transforms into a stepper.
 */
export const InButtonActive: Story = {
  name: 'InButton — Active state',
  args: {
    qty: 1,
    type: 'inButton',
  },
};

/**
 * Light outlined version, often used in lists.
 */
export const InButtonLight: Story = {
  name: 'InButton — Light style',
  args: {
    qty: 1,
    type: 'inButton',
    buttonStyle: 'light',
  },
};

/**
 * Simple circle icons, often used in cart summaries or minimalist UIs.
 */
export const Empty: Story = {
  name: 'Empty mode',
  args: {
    qty: 2,
    type: 'empty',
  },
};

/**
 * Large version, used in product modals.
 */
export const Big: Story = {
  name: 'Big size',
  args: {
    qty: 1,
    type: 'inButton',
    size: 'big',
  },
};

/**
 * Disabled state for the initial add button.
 */
export const Disabled: Story = {
  name: 'Disabled state',
  render: (args) => ({
    components: { ChangeQtyButton },
    setup() {
      return { args };
    },
    template: '<ChangeQtyButton v-bind="args" />',
  }),
  args: {
    qty: 0,
    isDisabled: true,
    addButtonText: 'Select',
  },
};
