# @boaideas/ui-kit

Vue 3 component library with a built-in design system. Exports components, CSS custom properties, and TypeScript types.

---

## Install

```bash
npm install @boaideas/ui-kit
```

**Required:** import the stylesheet in your app entry once:

```ts
import '@boaideas/ui-kit/style.css';
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

### Text component

```vue
<Text variant="h1">Page title</Text>
<Text variant="body" color="grey-900">Body copy</Text>
<Text variant="caption" color="grey-600" weight="medium">Helper text</Text>
<Text variant="h2" as="div">Heading rendered as div</Text>
```

Props: `variant` · `color` · `weight` · `as`

See [UI_KIT_CONSUMER_GUIDE.md](./UI_KIT_CONSUMER_GUIDE.md) for full design token usage.

### Other components

```vue
<script setup>
import {
  ActionButton, Modal, Tooltip,
  DropdownMenu, DropdownMenuItem
} from '@boaideas/ui-kit';
</script>

<template>
  <ActionButton @click="onClick">Click</ActionButton>

  <Tooltip content="More info">
    <ActionButton>Hover me</ActionButton>
  </Tooltip>

  <DropdownMenu>
    <template #trigger><ActionButton>Menu</ActionButton></template>
    <DropdownMenuItem @select="onEdit">Edit</DropdownMenuItem>
    <DropdownMenuItem @select="onDelete" :destructive="true">Delete</DropdownMenuItem>
  </DropdownMenu>
</template>
```

### Global registration

```ts
import { createApp } from 'vue';
import { install } from '@boaideas/ui-kit';
import '@boaideas/ui-kit/style.css';

const app = createApp(App);
app.use(install);
```

---

## Design tokens

All tokens are exposed as CSS custom properties in `style.css`.

```css
/* Colors — full brand palette */
var(--primary-color-1)        /* #002349 — dark navy */
var(--grey-900)               /* #6A6C77 */
var(--secondary-color-2-base) /* #BD2624 — red */

/* Spacing — 4px base grid */
var(--spacing-xxxs) /* 4px  */
var(--spacing-xxs)  /* 8px  */
var(--spacing-xs)   /* 12px */
var(--spacing-s)    /* 16px */
var(--spacing-m)    /* 24px */
var(--spacing-l)    /* 32px */
var(--spacing-xl)   /* 40px */
var(--spacing-xxl)  /* 48px */
var(--spacing-xxxl) /* 56px */

/* Font weights */
var(--font-weight-light)    /* 300 */
var(--font-weight-regular)  /* 400 */
var(--font-weight-semibold) /* 600 */
var(--font-weight-bold)     /* 700 */

/* Border radius */
var(--radius-sm)   /* 8px    */
var(--radius-md)   /* 12px   */
var(--radius-lg)   /* 16px   */
var(--radius-xl)   /* 20px   */
var(--radius-full) /* 9999px */

/* Transitions */
var(--transition-fast) /* 150ms */
var(--transition-base) /* 200ms */
var(--transition-slow) /* 300ms */
```

Full reference: [UI_KIT_CONSUMER_GUIDE.md](./UI_KIT_CONSUMER_GUIDE.md)

---

## TypeScript types

```ts
import type { TextVariant, TextColor, SpacingToken, FontWeight } from '@boaideas/ui-kit';
```

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
npm link @boaideas/ui-kit
```

Or use `npm pack` to create a `.tgz` and install from file.
