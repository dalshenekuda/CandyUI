import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '@/components/Button/Button'
import { ProductCard } from './ProductCard'

const SAMPLE_IMAGE =
  'https://images.unsplash.com/photo-1606313564200-e75d5e30439c?auto=format&fit=crop&w=640&h=640&q=80'

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Commerce-oriented card with a square media region and stacked text. Wraps the base Card primitive; use Card directly for generic layouts.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    imageSrc: { description: 'URL for the square product image.', table: { category: 'Content' } },
    imageAlt: { description: 'Alt text for the image.', table: { category: 'Content' } },
    title: { description: 'Product name.', table: { category: 'Content' } },
    description: { description: 'Secondary line.', table: { category: 'Content' } },
    price: { description: 'Price row.', table: { category: 'Content' } },
    footer: { description: 'Optional actions block.', table: { category: 'Content' } },
  },
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { className: 'w-full max-w-xs p-md' },
        React.createElement(Story),
      ),
  ],
}

export default meta
type Story = StoryObj<typeof ProductCard>

/** Typical product listing tile with photo, copy, price, and CTA. */
export const Default: Story = {
  args: {
    imageSrc: SAMPLE_IMAGE,
    imageAlt: 'Assorted candies in glass jars',
    title: 'Candy sampler box',
    description: 'Eight flavors · 240 g',
    price: '$24.00',
  },
  render: (args) =>
    React.createElement(ProductCard, {
      ...args,
      footer: React.createElement(Button, { className: 'w-full', size: 'sm' }, 'Add to cart'),
    }),
}

/** Minimal copy-only variant without description or footer. */
export const TitleAndPrice: Story = {
  args: {
    imageSrc: SAMPLE_IMAGE,
    imageAlt: 'Candies',
    title: 'Gummy bears',
    price: '$8.50',
  },
}
