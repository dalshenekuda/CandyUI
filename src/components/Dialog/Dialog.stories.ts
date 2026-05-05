import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './Dialog'

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
export const Default: Story = {}

export { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter }
