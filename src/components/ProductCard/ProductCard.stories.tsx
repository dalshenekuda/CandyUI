import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
import candyCluster from '@/assets/storybook/candy-cluster.png';
import candyLollipop from '@/assets/storybook/candy-lollipop.png';
import candyCaramel from '@/assets/storybook/candy-caramel.png';
import { AddToCartStepper } from '@/components/AddToCartStepper/AddToCartStepper';
import { Badge } from '@/components/Badge/Badge';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="group/card w-full max-w-xs bg-bg p-sm">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

/** Store pattern: blueras hover tone, price cutout, default stepper. */
export const Default: Story = {
  args: {
    imageSrc: candyCluster,
    imageAlt: 'Bluelino Anthillino',
    title: 'Bluelino Anthillino',
    meta: 'SWEET',
    price: '₪6.50',
    tone: 'blueras',
    fit: 'contain',
    footer: <AddToCartStepper quantity={0} />,
  },
};

/** Kit showcase: always-filled tone field (not used in Candy Area store). */
export const RestState: Story = {
  args: {
    imageSrc: candyLollipop,
    imageAlt: 'Hypnotico Lollipopinso',
    title: 'Hypnotico Lollipopinso',
    meta: 'SWEET',
    price: '₪6.50',
    tone: 'blueras',
    toneMode: 'rest',
    fit: 'contain',
    footer: <AddToCartStepper quantity={0} />,
  },
  parameters: {
    docs: {
      description: {
        story:
          'toneMode="rest" fills the card immediately. Candy Area store always uses the default hover mode.',
      },
    },
  },
};

export const OnSale: Story = {
  args: {
    imageSrc: candyCaramel,
    imageAlt: 'Caramelo Duo',
    title: 'Caramelo Duo',
    meta: 'SWEET',
    price: '₪9.99',
    compareAtPrice: '₪12.99',
    tone: 'blueras',
    fit: 'contain',
    badgeTopRight: (
      <Badge variant="ink" rotate="right">
        Sale
      </Badge>
    ),
    footer: <AddToCartStepper quantity={1} />,
  },
};

export const SoldOut: Story = {
  args: {
    imageSrc: candyCluster,
    imageAlt: 'Sphero Sosalino',
    title: 'Sphero Sosalino',
    meta: 'SOUR',
    price: '₪6.50',
    tone: 'blueras',
    fit: 'contain',
    badgeTopRight: <Badge variant="print">Sold out</Badge>,
    footer: <AddToCartStepper quantity={0} disabled />,
  },
};

/** Four-card catalog grid — all blueras, matching Candy Area store. */
export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-0 bg-bg desktop:grid-cols-4" style={{ maxWidth: 960 }}>
      {[
        {
          imageSrc: candyLollipop,
          imageAlt: 'Hypnotico Lollipopinso',
          title: 'Hypnotico Lollipopinso',
          meta: 'SWEET',
          price: '₪6.50',
          badgeTopRight: undefined as ReactNode,
          quantity: 0,
        },
        {
          imageSrc: candyCaramel,
          imageAlt: 'Sour beasto',
          title: 'Sour beasto',
          meta: 'SOUR',
          price: '₪6.50',
          badgeTopRight: (
            <Badge variant="ink" rotate="right">
              Sale
            </Badge>
          ),
          quantity: 0,
        },
        {
          imageSrc: candyCluster,
          imageAlt: 'Nougatingo',
          title: 'Nougatingo',
          meta: 'SWEET',
          price: '₪6.50',
          badgeTopRight: undefined,
          quantity: 2,
        },
        {
          imageSrc: candyCaramel,
          imageAlt: 'Stalactito Roasto',
          title: 'Stalactito Roasto',
          meta: 'SWEET',
          price: '₪6.50',
          badgeTopRight: undefined,
          quantity: 0,
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group/card border-b border-r border-border-strong p-sm [&:nth-child(2n)]:border-r-0 desktop:[&:nth-child(2n)]:border-r desktop:[&:nth-child(4n)]:border-r-0"
        >
          <ProductCard
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
            meta={item.meta}
            price={item.price}
            tone="blueras"
            fit="contain"
            badgeTopRight={item.badgeTopRight}
            footer={<AddToCartStepper quantity={item.quantity} />}
          />
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
