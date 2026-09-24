import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from '@/components/Button/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Accessible centered modal built on Radix UI Dialog. For side panels (cart, search, mobile menu), use Aside instead.',
      },
    },
  },
  argTypes: {
    open: { description: 'Controlled open state.', table: { category: 'State' } },
    defaultOpen: { description: 'Initial open when uncontrolled.', table: { category: 'State' } },
    onOpenChange: {
      action: 'openChange',
      description: 'Fired when open state changes.',
      table: { category: 'Events', type: { summary: '(open: boolean) => void' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/** Opens from the trigger button; includes header, description, and footer actions. */
export const Default: Story = {
  render: () =>
    React.createElement(
      Dialog,
      null,
      React.createElement(
        DialogTrigger,
        { asChild: true },
        React.createElement(Button, null, 'Open dialog')
      ),
      React.createElement(
        DialogContent,
        null,
        React.createElement(
          DialogHeader,
          null,
          React.createElement(DialogTitle, null, 'Confirm action'),
          React.createElement(
            DialogDescription,
            null,
            'This action cannot be undone. Please confirm to continue.'
          )
        ),
        React.createElement(
          DialogFooter,
          null,
          React.createElement(
            DialogClose,
            { asChild: true },
            React.createElement(Button, { variant: 'outline' }, 'Cancel')
          ),
          React.createElement(Button, null, 'Confirm')
        )
      )
    ),
};
