import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '@/components/Button/Button'
import { Text } from '@/components/Text/Text'
import {
  Aside,
  AsideBody,
  AsideCloseButton,
  AsideContent,
  AsideDescription,
  AsideFooter,
  AsideHeader,
  AsideTitle,
  AsideTrigger,
} from './Aside'

const meta: Meta<typeof Aside> = {
  title: 'Components/Aside',
  component: Aside,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Accessible side panel (drawer) built on Radix UI Dialog. Use for cart, search, or navigation panels. For centered modals, use Dialog instead.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Aside>

/** Basic aside with trigger, header, body, and footer actions. */
export const Default: Story = {
  render: () =>
    React.createElement(
      Aside,
      null,
      React.createElement(
        AsideTrigger,
        { asChild: true },
        React.createElement(Button, { variant: 'outline' }, 'Open aside'),
      ),
      React.createElement(
        AsideContent,
        null,
        React.createElement(
          AsideHeader,
          null,
          React.createElement(
            AsideTitle,
            null,
            React.createElement(Text, { variant: 'heading-md' }, 'Panel title'),
          ),
          React.createElement(AsideCloseButton, null),
        ),
        React.createElement(
          AsideBody,
          null,
          React.createElement(
            AsideDescription,
            null,
            'Side panel content for filters, navigation, or supplementary UI.',
          ),
        ),
        React.createElement(
          AsideFooter,
          null,
          React.createElement(Button, { className: 'w-full' }, 'Continue'),
        ),
      ),
    ),
}

/** E-commerce cart drawer pattern (reference for storefront apps). */
export const CartPanel: Story = {
  render: () =>
    React.createElement(
      Aside,
      null,
      React.createElement(
        AsideTrigger,
        { asChild: true },
        React.createElement(Button, null, 'Open cart'),
      ),
      React.createElement(
        AsideContent,
        null,
        React.createElement(
          AsideHeader,
          null,
          React.createElement(
            AsideTitle,
            null,
            React.createElement(Text, { variant: 'heading-md', weight: 'bold' }, 'CART'),
          ),
          React.createElement(AsideCloseButton, null),
        ),
        React.createElement(
          AsideBody,
          null,
          React.createElement(Text, { variant: 'body-md' }, 'Your cart is empty.'),
        ),
        React.createElement(
          AsideFooter,
          { className: 'flex flex-col gap-sm' },
          React.createElement(Button, { className: 'w-full', variant: 'outline' }, 'Continue shopping'),
          React.createElement(Button, { className: 'w-full' }, 'Checkout'),
        ),
      ),
    ),
}

/** Controlled open state without a trigger (store layout pattern). */
export const Controlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = React.useState(false)

    return React.createElement(
      'div',
      { className: 'flex flex-col gap-md p-md' },
      React.createElement(
        Button,
        { onClick: () => setOpen(true) },
        'Open controlled aside',
      ),
      React.createElement(
        Aside,
        { open, onOpenChange: setOpen },
        React.createElement(
          AsideContent,
          null,
          React.createElement(
            AsideHeader,
            null,
            React.createElement(AsideTitle, null, 'SEARCH'),
            React.createElement(AsideCloseButton, null),
          ),
          React.createElement(
            AsideBody,
            null,
            React.createElement(Text, { variant: 'body-md' }, 'Predictive search results go here.'),
          ),
        ),
      ),
    )
  },
}
