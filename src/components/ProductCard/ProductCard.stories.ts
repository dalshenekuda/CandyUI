import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import lindorTruffleImage from '@/assets/storybook/lindor-truffle.png'
import { AddToCartStepper } from '@/components/AddToCartStepper/AddToCartStepper'
import { Badge } from '@/components/Badge/Badge'
import { ProductCard, type ProductCardTone } from './ProductCard'

const TONES: ProductCardTone[] = ['blueras', 'raspberry', 'spearmint', 'lemon', 'lime']

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { className: 'group/card w-full max-w-xs bg-bg p-sm' },
        React.createElement(Story),
      ),
  ],
}

export default meta
type Story = StoryObj<typeof ProductCard>

export const Default: Story = {
  args: {
    imageSrc: lindorTruffleImage,
    imageAlt: 'LINDOR milk chocolate truffle',
    title: 'LINDOR Milk Chocolate',
    meta: 'Milk',
    price: '$12.99',
    tone: 'raspberry',
    fit: 'contain',
  },
  render: (args) =>
    React.createElement(ProductCard, {
      ...args,
      footer: React.createElement(AddToCartStepper, { quantity: 0 }),
    }),
}

export const RestState: Story = {
  args: {
    imageSrc: lindorTruffleImage,
    imageAlt: 'Blue Raspberry Drop',
    title: 'Blue Raspberry Cluster',
    meta: 'Fruity',
    price: '$7.25',
    tone: 'blueras',
    toneMode: 'rest',
    fit: 'contain',
    footer: React.createElement(AddToCartStepper, { quantity: 0 }),
  },
}

export const WithBadges: Story = {
  args: {
    imageSrc: lindorTruffleImage,
    imageAlt: 'Truffle',
    title: 'Mixed Berry Gummies',
    meta: 'Fruity',
    price: '$14.00',
    tone: 'raspberry',
    fit: 'contain',
    badgeTopLeft: React.createElement(Badge, { variant: 'ink', rotate: 'left', children: 'New' }),
    footer: React.createElement(AddToCartStepper, { quantity: 0 }),
  },
}

export const OnSale: Story = {
  args: {
    imageSrc: lindorTruffleImage,
    imageAlt: 'Truffle',
    title: 'Caramel Clusters',
    meta: 'Milk',
    price: '$9.99',
    compareAtPrice: '$12.99',
    tone: 'lemon',
    toneMode: 'rest',
    fit: 'contain',
    badgeTopRight: React.createElement(Badge, { variant: 'ink', rotate: 'right', children: 'Sale' }),
    footer: React.createElement(AddToCartStepper, { quantity: 1 }),
  },
}

export const SoldOut: Story = {
  args: {
    imageSrc: lindorTruffleImage,
    imageAlt: 'Truffle',
    title: 'Licorice Twists',
    meta: 'Sour',
    price: '$6.50',
    tone: 'lime',
    toneMode: 'rest',
    fit: 'contain',
    badgeTopRight: React.createElement(Badge, { variant: 'print', children: 'Sold out' }),
    footer: React.createElement(AddToCartStepper, { quantity: 0, disabled: true }),
  },
}

export const ToneMatrix: Story = {
  render: () =>
    React.createElement(
      'div',
      {
        className: 'grid grid-cols-2 gap-0 bg-bg desktop:grid-cols-5',
        style: { maxWidth: 1200 },
      },
      ...TONES.map((tone) =>
        React.createElement(
          'div',
          { key: tone, className: 'group/card border border-border-strong p-sm' },
          React.createElement(ProductCard, {
            imageSrc: lindorTruffleImage,
            imageAlt: `${tone} candy`,
            title: `${tone.charAt(0).toUpperCase()}${tone.slice(1)} Drop`,
            meta: tone.toUpperCase(),
            price: '$8.00',
            tone,
            fit: 'contain',
            footer: React.createElement(AddToCartStepper, { quantity: 0 }),
          }),
        ),
      ),
    ),
  parameters: { layout: 'fullscreen' },
}

export const GridOfFour: Story = {
  render: () =>
    React.createElement(
      'div',
      {
        className: 'grid grid-cols-2 gap-0 bg-bg desktop:grid-cols-4',
        style: { maxWidth: 960 },
      },
      ...TONES.slice(0, 4).map((tone, i) =>
        React.createElement(
          'div',
          {
            key: tone,
            className:
              'group/card border-b border-r border-border-strong [&:nth-child(2n)]:border-r-0 desktop:[&:nth-child(2n)]:border-r desktop:[&:nth-child(4n)]:border-r-0',
          },
          React.createElement(ProductCard, {
            imageSrc: lindorTruffleImage,
            imageAlt: `Product ${i + 1}`,
            title: `Candy Pack ${i + 1}`,
            meta: tone.toUpperCase(),
            price: `$${(8 + i).toFixed(2)}`,
            tone,
            fit: 'contain',
            badgeTopRight:
              i === 0
                ? React.createElement(Badge, { variant: 'ink', children: 'Sale' })
                : undefined,
            footer: React.createElement(AddToCartStepper, { quantity: i === 1 ? 2 : 0 }),
          }),
        ),
      ),
    ),
  parameters: { layout: 'fullscreen' },
}

export const DarkTheme: Story = {
  render: () =>
    React.createElement(
      'div',
      { className: 'dark bg-bg p-md' },
      React.createElement(
        'div',
        { className: 'group/card max-w-xs' },
        React.createElement(ProductCard, {
          imageSrc: lindorTruffleImage,
          imageAlt: 'Dark theme card',
          title: 'Mint Wheel',
          meta: 'Mint',
          price: '$6.50',
          tone: 'spearmint',
          toneMode: 'rest',
          fit: 'contain',
          footer: React.createElement(AddToCartStepper, { quantity: 0 }),
        }),
      ),
    ),
  parameters: { layout: 'fullscreen' },
}
