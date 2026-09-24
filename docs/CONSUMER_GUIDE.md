# CandyUI — Consumer guide (index)

Use **`@dalshenekuda/candy-ui`** in React 18+ apps. Full prop-level documentation is in **[REACT.md](./REACT.md)** and in Storybook (see README **Live demo**).

---

## Install

```bash
npm install @dalshenekuda/candy-ui
```

Import styles **once** in your app entry (required):

```ts
import '@dalshenekuda/candy-ui/style.css';
```

That bundle loads design tokens, `.typo-*` typography, and utility classes built from the kit’s CSS variables.

---

## Tailwind preset (recommended for app code)

If your app uses Tailwind and you want the same token utilities (`bg-surface`, `text-text`, `p-md`, `desktop:`, …):

```js
// tailwind.config.js
import uiKitPreset from '@dalshenekuda/candy-ui/tailwind.preset';

export default {
  presets: [uiKitPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

Package exports: `@dalshenekuda/candy-ui`, `@dalshenekuda/candy-ui/style.css`, `@dalshenekuda/candy-ui/tailwind.preset`.

---

## Dark theme

Semantic colors switch when **`dark`** is on the root element (typically `<html class="dark">`). The preset uses `darkMode: 'class'`.

---

## Public exports

From `@dalshenekuda/candy-ui`:

| Area | Symbols |
|------|---------|
| Typography | `Text`, types `TextVariant`, `TextColor`, `FontWeight`, `TextProps` |
| Actions | `Button`, `ButtonProps`, `buttonVariants` |
| Labels | `Badge`, `BadgeProps`, `badgeVariants` |
| Layout | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |
| Commerce | `ProductCard`, `ProductCardProps`, `ProductCardTone`, `AddToCartStepper`, `AddToCartStepperProps`, `AddToCartStepperVariant` |
| Overlays | `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogFooter`, `DialogClose`, `DialogPortal`, `DialogOverlay` |
| Drawer | `Aside`, `AsideTrigger`, `AsideContent`, `AsideHeader`, `AsideTitle`, `AsideDescription`, `AsideBody`, `AsideFooter`, `AsideCloseButton`, `AsideClose`, `AsidePortal`, `AsideOverlay` |

For examples and variant lists, see **[REACT.md](./REACT.md)**.

---

## Quick example

```tsx
import { Text, Button, Card } from '@dalshenekuda/candy-ui';
import '@dalshenekuda/candy-ui/style.css';

export function Example() {
  return (
    <Card>
      <Text variant="heading-lg" color="color-text">
        Section title
      </Text>
      <Text variant="body-md" color="color-text-muted">
        Supporting copy uses semantic color tokens.
      </Text>
      <Button variant="default" onClick={() => {}}>
        Shop now
      </Button>
    </Card>
  );
}
```
