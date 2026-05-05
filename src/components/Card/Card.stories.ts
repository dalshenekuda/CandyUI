import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Surface container with a border, background, and shadow. Composed of Card, CardHeader, CardTitle, CardDescription, CardContent, and CardFooter sub-components.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

/** Full card composition with header, content, and footer. */
export const Default: Story = {}

export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
