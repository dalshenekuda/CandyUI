import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { AddToCartStepper } from './AddToCartStepper';

const meta: Meta<typeof AddToCartStepper> = {
  title: 'Components/AddToCartStepper',
  component: AddToCartStepper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Commerce quantity control: full-width Add to cart when quantity is 0, then minus / count / plus. Wire actions via callbacks or custom button slots for form submissions.',
      },
    },
  },
  decorators: [
    (Story) =>
      React.createElement('div', { className: 'w-full max-w-xs p-md' }, React.createElement(Story)),
  ],
  argTypes: {
    quantity: {
      description: 'Current line quantity; 0 shows the add button, >0 shows the stepper.',
      table: { category: 'Data' },
    },
    variant: {
      description: 'default = full-width cart pill; compact / compact-pill = outline add + segmented control.',
      control: { type: 'select' },
      options: ['default', 'compact', 'compact-pill'],
      table: { category: 'Appearance' },
    },
    size: {
      description: 'Stepper dimensions for variant default only (compact variants use fixed h-8).',
      control: { type: 'select' },
      options: ['default', 'sm'],
      table: { category: 'Appearance' },
    },
    disabled: { description: 'Disables add and +/- controls.', table: { category: 'State' } },
    loading: {
      description: 'Spinner on add button and dimmed quantity; disables interaction.',
      table: { category: 'State' },
    },
    addLabel: {
      description: 'Add button label; defaults to "Add to cart" or "Add" for compact.',
      table: { category: 'Data' },
    },
    onAdd: { action: 'add', table: { category: 'Events' } },
    onIncrease: { action: 'increase', table: { category: 'Events' } },
    onDecrease: { action: 'decrease', table: { category: 'Events' } },
    addButton: {
      description: 'Replace the default add button (e.g. form submit).',
      table: { category: 'Slots', type: { summary: 'ReactNode' } },
      control: false,
    },
    decreaseButton: {
      description: 'Replace the default decrease control.',
      table: { category: 'Slots', type: { summary: 'ReactNode' } },
      control: false,
    },
    increaseButton: {
      description: 'Replace the default increase control.',
      table: { category: 'Slots', type: { summary: 'ReactNode' } },
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddToCartStepper>;

export const Idle: Story = {
  args: {
    quantity: 0,
  },
};

export const Active: Story = {
  args: {
    quantity: 2,
  },
};

export const Loading: Story = {
  args: {
    quantity: 1,
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    quantity: 0,
    disabled: true,
  },
};

export const Compact: Story = {
  args: {
    quantity: 0,
    variant: 'compact',
  },
};

export const CompactActive: Story = {
  args: {
    quantity: 2,
    variant: 'compact',
  },
};

export const CompactPill: Story = {
  args: {
    quantity: 0,
    variant: 'compact-pill',
  },
};

export const CompactPillActive: Story = {
  args: {
    quantity: 2,
    variant: 'compact-pill',
  },
};

export const OnTone: Story = {
  args: {
    quantity: 2,
  },
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        {
          className: 'w-full max-w-xs rounded-md p-md',
          'data-tone': 'blueras',
          style: { background: 'var(--tone-bg)' },
        },
        React.createElement(Story)
      ),
  ],
};

export const Interactive: Story = {
  render: function InteractiveStory() {
    const [quantity, setQuantity] = React.useState(0);

    return React.createElement(AddToCartStepper, {
      quantity,
      onAdd: () => setQuantity(1),
      onIncrease: () => setQuantity((q) => q + 1),
      onDecrease: () => setQuantity((q) => Math.max(0, q - 1)),
    });
  },
};
