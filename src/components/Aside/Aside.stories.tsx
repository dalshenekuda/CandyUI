import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { AddToCartStepper } from '@/components/AddToCartStepper/AddToCartStepper';
import { Button } from '@/components/Button/Button';
import { Text } from '@/components/Text/Text';
import candyCaramel from '@/assets/storybook/candy-caramel.png';
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
} from './Aside';

const meta: Meta<typeof Aside> = {
  title: 'Components/Aside',
  component: Aside,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Accessible side panel (drawer) built on Radix UI Dialog. Use for cart, search, or navigation panels. For centered modals, use Dialog instead. Candy Area uses controlled open state without AsideTrigger or AsideFooter. `AsideContent` accepts `side`: `left` | `right` (default `right`).',
      },
    },
  },
  argTypes: {
    open: {
      description: 'Controlled open state (Radix Dialog root).',
      table: { category: 'State' },
    },
    defaultOpen: {
      description: 'Initial open state when uncontrolled.',
      table: { category: 'State' },
    },
    onOpenChange: {
      action: 'openChange',
      description: 'Fired when open state changes.',
      table: { category: 'Events', type: { summary: '(open: boolean) => void' } },
    },
    modal: {
      description: 'When false, focus is not trapped (rare for drawers).',
      table: { category: 'Behavior' },
    },
  },
  subcomponents: {
    AsideContent,
    AsideHeader,
    AsideBody,
    AsideFooter,
    AsideTitle,
    AsideDescription,
    AsideTrigger,
    AsideCloseButton,
  },
};

export default meta;
type Story = StoryObj<typeof Aside>;

/** Basic aside with trigger, header, body, and footer actions. */
export const Default: Story = {
  render: () => (
    <Aside>
      <AsideTrigger asChild>
        <Button variant="outline">Open aside</Button>
      </AsideTrigger>
      <AsideContent>
        <AsideHeader>
          <AsideTitle>
            <Text variant="heading-md">Panel title</Text>
          </AsideTitle>
          <AsideCloseButton />
        </AsideHeader>
        <AsideBody>
          <AsideDescription>
            Side panel content for filters, navigation, or supplementary UI.
          </AsideDescription>
        </AsideBody>
        <AsideFooter>
          <Button className="w-full">Continue</Button>
        </AsideFooter>
      </AsideContent>
    </Aside>
  ),
};

function CartLineItemDemo() {
  return (
    <li className="flex gap-sm border-b border-border pb-md">
      <img
        src={candyCaramel}
        alt="Stalactito Roasto"
        className="size-[100px] shrink-0 rounded-xs object-contain"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-xs">
        <Text variant="body-md" weight="bold">
          Stalactito Roasto
        </Text>
        <Text variant="body-md" className="tabular-nums">
          ₪13.00
        </Text>
        <Text variant="body-sm" color="color-text-muted">
          Title: Default Title
        </Text>
        <div className="mt-xs flex flex-wrap items-center gap-sm">
          <AddToCartStepper variant="compact-pill" quantity={2} />
          <Button variant="ghost" size="sm">
            Remove
          </Button>
        </div>
      </div>
    </li>
  );
}

/** Cart drawer matching Candy Area store layout. */
export const CartPanel: Story = {
  render: () => (
    <Aside defaultOpen>
      <AsideContent>
        <AsideHeader>
          <AsideTitle>
            <Text variant="heading-md" weight="bold">
              CART
            </Text>
          </AsideTitle>
          <AsideCloseButton />
        </AsideHeader>
        <AsideBody className="flex flex-col gap-md">
          <ul className="flex list-none flex-col gap-md p-0">
            <CartLineItemDemo />
          </ul>

          <div className="flex flex-col gap-xs border-t border-border pt-md">
            <Text variant="heading-sm" weight="bold">
              Totals
            </Text>
            <div className="flex items-center justify-between">
              <Text variant="body-md">Subtotal</Text>
              <Text variant="body-md" className="tabular-nums">
                ₪13.00
              </Text>
            </div>
          </div>

          <div className="flex flex-col gap-sm">
            <Text variant="body-sm" color="color-text-muted">
              Discount code
            </Text>
            <div className="flex gap-xs">
              <input
                type="text"
                placeholder="Discount code"
                className="h-9 min-w-0 flex-1 rounded-full border border-border-strong bg-surface px-sm typo-body-sm"
              />
              <Button variant="outline" size="sm">
                Apply
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-sm">
            <Text variant="body-sm" color="color-text-muted">
              Gift card code
            </Text>
            <div className="flex gap-xs">
              <input
                type="text"
                placeholder="Gift card code"
                className="h-9 min-w-0 flex-1 rounded-full border border-border-strong bg-surface px-sm typo-body-sm"
              />
              <Button variant="outline" size="sm">
                Apply
              </Button>
            </div>
          </div>

          <Button variant="cart" size="pill" className="mt-sm w-full">
            Continue to Checkout →
          </Button>
        </AsideBody>
      </AsideContent>
    </Aside>
  ),
  parameters: { layout: 'fullscreen' },
};

/** Controlled open state without a trigger (store layout pattern). */
export const Controlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="flex flex-col gap-md p-md">
        <Button onClick={() => setOpen(true)}>Open controlled aside</Button>
        <Aside open={open} onOpenChange={setOpen}>
          <AsideContent>
            <AsideHeader>
              <AsideTitle>SEARCH</AsideTitle>
              <AsideCloseButton />
            </AsideHeader>
            <AsideBody>
              <Text variant="body-md">Predictive search results go here.</Text>
            </AsideBody>
          </AsideContent>
        </Aside>
      </div>
    );
  },
};
