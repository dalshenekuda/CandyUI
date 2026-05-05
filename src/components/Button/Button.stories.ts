import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'General-purpose action button. Supports six semantic variants and three sizes. Use `asChild` to render as a link or any other element via Radix Slot.',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Visual style of the button.',
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      table: { category: 'Appearance' },
    },
    size: {
      description: 'Size of the button.',
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      table: { category: 'Appearance' },
    },
    disabled: {
      description: 'Disables the button and prevents interaction.',
      table: { category: 'State' },
    },
    asChild: {
      description: 'Renders button as the child element via Radix Slot (e.g. `<a>`).',
      table: { category: 'Appearance' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

/** Default brand-colored CTA button. */
export const Default: Story = {
  args: { children: 'Click me' },
}

/** Use for destructive or irreversible actions. */
export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete' },
}

/** Bordered button for secondary actions. */
export const Outline: Story = {
  args: { variant: 'outline', children: 'Cancel' },
}

/** Lower-emphasis alternative to Outline. */
export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
}

/** Minimal button for inline or toolbar actions. */
export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost' },
}

/** Looks like a hyperlink; for navigation inside a form or card. */
export const Link: Story = {
  args: { variant: 'link', children: 'Learn more' },
}

/** Disabled state applies to all variants. */
export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
}
