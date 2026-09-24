# CandyUI

React component library and design system for **headless commerce** storefronts—built for Hydrogen, custom Shopify stacks, and any React app that needs accessible, token-driven UI primitives.

**Live demo:** [Storybook on Chromatic](https://main--6ab56ef1aed13efbc107d427.chromatic.com/)

---

## Install

```bash
npm install @dalshenekuda/candy-ui
```

**Required:** import the stylesheet once in your app entry:

```ts
import '@dalshenekuda/candy-ui/style.css';
```

This loads semantic colors, spacing, typography, and Tailwind utility classes aligned with the library tokens.

**Optional:** extend Tailwind in your app with the published preset:

```js
// tailwind.config.js
export default {
  presets: [require('@dalshenekuda/candy-ui/tailwind.preset')],
};
```

Package entry points: `@dalshenekuda/candy-ui`, `@dalshenekuda/candy-ui/style.css`, `@dalshenekuda/candy-ui/tailwind.preset`.

---

## Components

| Component | Import | Description |
|---|---|---|
| `Text` | `Text` | Responsive typography with semantic color tokens |
| `Button` | `Button` | Primary actions (variants: default, outline, cart, tone, …) |
| `Badge` | `Badge` | Labels and status chips |
| `Card` | `Card` | Surface container for content |
| `ProductCard` | `ProductCard` | Commerce product tile (image, price, footer slot) |
| `AddToCartStepper` | `AddToCartStepper` | Quantity / add-to-cart control |
| `Dialog` | `Dialog` | Centered modal (Radix) |
| `Aside` | `Aside` | Side drawer / panel (cart, nav) |

---

## Quick example

```tsx
import { Text, Button, Card } from '@dalshenekuda/candy-ui';
import '@dalshenekuda/candy-ui/style.css';

export function Example() {
  return (
    <Card>
      <Text variant="heading-lg" color="color-text">
        Featured sweets
      </Text>
      <Text variant="body-md" color="color-text-muted">
        Token-driven typography for storefront copy.
      </Text>
      <Button variant="default" onClick={() => console.log('Clicked')}>
        Shop now
      </Button>
    </Card>
  );
}
```

---

## Documentation

- **Component API and examples:** [docs/REACT.md](./docs/REACT.md)
- **Install, exports, dark mode, preset:** [docs/CONSUMER_GUIDE.md](./docs/CONSUMER_GUIDE.md) (index — details in REACT.md)
- **Interactive API:** [Storybook](https://main--6ab56ef1aed13efbc107d427.chromatic.com/)

See also CandyArea (companion storefront project, not linked here).

---

## Development

```bash
npm install          # install dependencies
npm run dev          # Vite dev server
npm run storybook    # component explorer (local)
npm run build        # production build → build/
npm run build-storybook  # static Storybook → storybook-static/
npm run build:watch  # production build in watch mode
npm run test:run     # unit tests
npm run format       # Prettier write
npm run format:check # Prettier check
npm run lint         # ESLint
npm run type-check   # TypeScript
```

### Local install in another project

```bash
npm run build
npm link

# In the consuming project
npm link @dalshenekuda/candy-ui
```

Or use `npm pack` to create a `.tgz` and install from file.
