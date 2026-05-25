import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '@/components/Button/Button'
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
export const Default: Story = {
  render: () =>
    React.createElement(
      Card,
      { className: 'w-full max-w-md' },
      React.createElement(
        CardHeader,
        null,
        React.createElement(CardTitle, null, 'Card title'),
        React.createElement(
          CardDescription,
          null,
          'Short supporting description for this card.',
        ),
      ),
      React.createElement(
        CardContent,
        null,
        'Use Card as a surface for grouped content and actions.',
      ),
      React.createElement(
        CardFooter,
        { className: 'gap-sm' },
        React.createElement(Button, { variant: 'outline', size: 'sm' }, 'Cancel'),
        React.createElement(Button, { size: 'sm' }, 'Continue'),
      ),
    ),
}

export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
