import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline', 'success', 'warning', 'sale', 'soldout', 'new', 'tone', 'ink', 'print'],
    },
    rotate: {
      control: { type: 'select' },
      options: ['none', 'left', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = { args: { children: 'New' } }
export const Sale: Story = { args: { variant: 'sale', rotate: 'right', children: 'Sale' } }
export const SoldOut: Story = { args: { variant: 'soldout', children: 'Sold out' } }
export const New: Story = { args: { variant: 'new', rotate: 'left', children: 'New' } }
export const Secondary: Story = { args: { variant: 'secondary', children: 'Draft' } }
export const Outline: Story = { args: { variant: 'outline', children: 'Beta' } }

export const OnToneField: Story = {
  decorators: [
    (Story) => (
      <div data-tone="blueras" className="rounded-xl p-lg">
        <Story />
      </div>
    ),
  ],
  args: { variant: 'tone', children: 'Best seller' },
}

export const Ink: Story = {
  args: { variant: 'ink', rotate: 'left', children: 'Sale' },
}

export const Print: Story = {
  decorators: [
    (Story) => (
      <div data-tone="raspberry" data-tone-vars="raspberry" className="rounded-xs bg-tone-bg p-md text-tone-ink">
        <Story />
      </div>
    ),
  ],
  args: { variant: 'print', children: 'Sold out' },
}
