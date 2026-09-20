# CandyUI — React consumer guide

Use **`@dalshenekuda/candy-ui`** in React 18+ apps. For interactive props and states, open Storybook once deployed (see README **Live demo**).

---

## Setup

```bash
npm install @dalshenekuda/candy-ui
```

Import styles **once** in your app entry (required):

```ts
import '@dalshenekuda/candy-ui/style.css';
```

Optional Tailwind preset so your app can use the same token utilities:

```js
// tailwind.config.js
export default {
  presets: [require('@dalshenekuda/candy-ui/tailwind.preset')],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

Main import:

```tsx
import {
  Text,
  Button,
  ActionButton,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  ProductCard,
  AddToCartStepper,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Aside,
  AsideTrigger,
  AsideContent,
  AsideHeader,
  AsideTitle,
  AsideDescription,
  AsideBody,
  AsideFooter,
  AsideCloseButton,
} from '@dalshenekuda/candy-ui';
```

`ActionButton` is an alias for `Button` (same props).

---

## Text

Responsive typography via `variant`, optional `weight`, `color`, and `as` for the HTML element.

```tsx
<Text variant="heading-lg" color="color-text">
  Section title
</Text>
<Text variant="body-md" color="color-text-muted">
  Supporting copy
</Text>
<Text variant="caption-sm" weight="semibold" color="color-brand">
  Label
</Text>
```

### Variants

`display-2xl`, `display-xl`, `display-lg`, `heading-xl`, `heading-lg`, `heading-md`, `heading-sm`, `meta-md`, `meta-sm`, `subtitle-lg`, `subtitle-md`, `body-lg`, `body-md`, `body-sm`, `caption-md`, `caption-sm`, `overline`

### Colors

Semantic tokens (map to CSS variables): `color-text`, `color-text-muted`, `color-text-subtle`, `color-text-on-brand`, `color-brand`, `color-brand-dark`, `color-brand-light`, `color-accent`, `color-accent-dark`, `color-accent-light`, `color-accent-alt`, `color-accent-warm`, `color-danger`, `color-success`, `color-warning`, `tone-ink`, `tone-accent`

### Other props

- `weight`: `light` | `regular` | `medium` | `semibold` | `bold` | `black`
- `balance`: applies `text-balance` on display headings
- `as`: override the rendered tag

---

## Button

```tsx
<Button variant="default" size="default" onClick={() => {}}>
  Primary
</Button>
<Button variant="cart" size="pill">
  Add to cart
</Button>
<Button variant="outline" loading>
  Saving…
</Button>
```

Variants include `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`, `tone`, `cart`. Sizes: `default`, `sm`, `lg`, `xl`, `icon`, `pill`. Use `asChild` with Radix Slot when composing links.

---

## Card & Badge

```tsx
<Card>
  <CardHeader>
    <CardTitle>Bundle</CardTitle>
    <CardDescription>Three flavors</CardDescription>
  </CardHeader>
  <CardContent>
    <Badge variant="sale">Sale</Badge>
  </CardContent>
  <CardFooter>
    <Button size="sm">Details</Button>
  </CardFooter>
</Card>
```

Badge variants include `default`, `secondary`, `destructive`, `outline`, `success`, `warning`, `sale`, `soldout`, `new`, `tone`, `ink`, `print`.

---

## Commerce components

### ProductCard

Product tile with image, optional tone field, price sticker, badges, and a `footer` slot (often `AddToCartStepper`).

```tsx
<ProductCard
  imageSrc="/product.png"
  imageAlt="Caramel cluster"
  title="Caramel cluster"
  meta="SWEET"
  price="₪6.50"
  tone="blueras"
  fit="contain"
  footer={<AddToCartStepper quantity={0} onAdd={() => {}} />}
/>
```

`tone`: `blueras` | `raspberry` | `spearmint` | `lemon` | `lime`. `toneMode`: `hover` (store default) or `rest` (always filled, useful in Storybook).

### AddToCartStepper

Controlled quantity stepper; `quantity === 0` shows the add button.

```tsx
<AddToCartStepper
  quantity={2}
  variant="compact-pill"
  onAdd={() => {}}
  onIncrease={() => {}}
  onDecrease={() => {}}
/>
```

### Dialog

Centered modal for confirmations or short forms.

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm</DialogTitle>
      <DialogDescription>Remove this item?</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Remove</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Aside

Side drawer (cart, filters, mobile menu). Same Radix dialog primitives, different layout.

```tsx
<Aside>
  <AsideTrigger asChild>
    <Button variant="ghost">Cart</Button>
  </AsideTrigger>
  <AsideContent side="right">
    <AsideHeader>
      <AsideTitle>Your cart</AsideTitle>
      <AsideCloseButton />
    </AsideHeader>
    <AsideBody>{/* line items */}</AsideBody>
    <AsideFooter>
      <Button className="w-full">Checkout</Button>
    </AsideFooter>
  </AsideContent>
</Aside>
```

---

## Storybook

Full prop tables, autodocs, and visual states live in Storybook. After Chromatic deploy, use the public URL from the README **Live demo** section.
