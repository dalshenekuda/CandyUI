# CandyUI

React component library with a built-in design system. Exports components, CSS custom properties, and TypeScript types.

For full API and design token reference, see [docs/CONSUMER_GUIDE.md](./docs/CONSUMER_GUIDE.md).

---

## Install

```bash
npm install candy-ui
```

**Required:** import the stylesheet in your app entry once:

```ts
import 'candy-ui/style.css';
```

This loads all brand colors, spacing, font weights as CSS custom properties and Tailwind utility classes.

---

## Components

| Component | Import name | Description |
|---|---|---|
| `Text` | `Text` | Polymorphic text with responsive typography |
| `Button` / `ActionButton` | `Button`, `ActionButton` | Filled / transparent button |
| `SelectButton` | `SelectButton` | Toggle-style button |
| `Modal` | `Modal` | Accessible dialog |
| `Tooltip` | `Tooltip` | Hover tooltip |
| `DropdownMenu` | `DropdownMenu`, `DropdownMenuItem`, `DropdownMenuLabel`, `DropdownMenuSeparator` | Dropdown menu |
| `Tag` | `Tag` | Label tag |
| `Divider` | `Divider` | Horizontal rule |

## Quick example

```tsx
import { Text, Button } from 'candy-ui';

export function Example() {
  return (
    <>
      <Text variant="h1">Page title</Text>
      <Text variant="body" color="grey-900">
        Body copy
      </Text>
      <Button onClick={() => console.log('Clicked')}>Click me</Button>
    </>
  );
}
```

See [docs/CONSUMER_GUIDE.md](./docs/CONSUMER_GUIDE.md) for all components, props, slots, design tokens and TypeScript types.

---

## Development

```bash
npm install          # install dependencies
npm run dev          # dev server
npm run storybook    # component explorer
npm run build        # production build → build/
npm run build:watch  # production build in watch mode
npm run test:run     # run tests
npm run format       # format with Prettier
npm run lint         # ESLint
```

### Local install in another project

```bash
# 1. Build
npm run build

# 2. Link globally
npm link

# 3. In the consuming project
npm link @dalshenekuda/candy-ui
```

Or use `npm pack` to create a `.tgz` and install from file.
