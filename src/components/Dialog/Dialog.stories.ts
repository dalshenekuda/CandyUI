import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '@/components/Button/Button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from './Dialog'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Accessible modal dialog built on Radix UI Dialog. Composed of Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, and DialogClose.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

/** Basic dialog shell — wire up a DialogTrigger to open. */
export const Default: Story = {
  render: () =>
    React.createElement(
      Dialog,
      null,
      React.createElement(
        DialogTrigger,
        { asChild: true },
        React.createElement(Button, null, 'Open dialog'),
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
            'This action cannot be undone. Please confirm to continue.',
          ),
        ),
        React.createElement(
          DialogFooter,
          null,
          React.createElement(
            DialogClose,
            { asChild: true },
            React.createElement(Button, { variant: 'outline' }, 'Cancel'),
          ),
          React.createElement(Button, null, 'Confirm'),
        ),
      ),
    ),
}

export { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter }
