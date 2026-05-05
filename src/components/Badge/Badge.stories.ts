import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Compact label used to surface status, category, or metadata. Six semantic variants cover the full range from brand highlights to destructive alerts.',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Color and semantic meaning of the badge.',
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline', 'success', 'warning'],
      table: { category: 'Appearance' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

/** Brand-colored badge for primary labels. */
export const Default: Story = {
  args: { children: 'New' },
}

/** Low-emphasis label for neutral metadata. */
export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Draft' },
}

/** Signals an error or destructive state. */
export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Failed' },
}

/** Outlined badge for subtle categorisation. */
export const Outline: Story = {
  args: { variant: 'outline', children: 'Beta' },
}

/** Positive status or completion. */
export const Success: Story = {
  args: { variant: 'success', children: 'Active' },
}

/** Caution or partial state. */
export const Warning: Story = {
  args: { variant: 'warning', children: 'Pending' },
}
