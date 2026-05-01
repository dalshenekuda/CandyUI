# @boaideas/ui-kit — Consumer Guide

Copy this file into your project (e.g. as `UI_KIT_GUIDE.md`) to give your team and AI assistants context on how to use this library correctly.

---

## Setup

```bash
npm install @boaideas/ui-kit
```

Import the stylesheet **once** in your app entry. This is required — it loads all colors, spacing, and font tokens as CSS custom properties.

```ts
// main.ts
import '@boaideas/ui-kit/style.css';
```

---

## Text

The main typography component. Handles responsive font sizing automatically (mobile < 992px, desktop ≥ 992px).

```vue
<script setup>
import { Text } from '@boaideas/ui-kit';
</script>

<template>
  <!-- Headlines -->
  <Text variant="h1">Page title</Text>
  <Text variant="h2">Section heading</Text>
  <Text variant="h3">Sub-heading</Text>
  <Text variant="h4">Small heading</Text>

  <!-- Subtitles -->
  <Text variant="s1">Subtitle large</Text>
  <Text variant="s2">Subtitle small</Text>

  <!-- Body -->
  <Text variant="b1">Large body text</Text>
  <Text variant="b2">Regular body text (default)</Text>
  <Text variant="b3">Small body text</Text>

  <!-- Utility -->
  <Text variant="caption">Caption / label text</Text>
  <Text variant="credit">Fine print / credit</Text>

  <!-- color — any brand color token -->
  <Text variant="b2" color="primary-color-1">Dark navy</Text>
  <Text variant="b2" color="grey-600">Muted grey</Text>
  <Text variant="b2" color="secondary-color-6-base">Success green</Text>

  <!-- weight override (overrides the variant default) -->
  <Text variant="b2" weight="semibold">Semi-bold body</Text>
  <Text variant="b2" weight="bold">Bold body</Text>

  <!-- as — control the rendered HTML tag -->
  <Text variant="h1" as="div">H1 styles but renders as a div</Text>
  <Text variant="b2" as="span">Inline body text</Text>
</template>
```

### `variant` values

| Variant | Default tag | Desktop size | Mobile size | Default weight |
|---|---|---|---|---|
| `h1` | `<h1>` | 61px | 42px | bold |
| `h2` | `<h2>` | 49px | 35px | bold |
| `h3` | `<h3>` | 39px | 29px | bold |
| `h4` | `<h4>` | 31px | 24px | bold |
| `s1` | `<p>` | 25px | 20px | light |
| `s2` | `<p>` | 20px | 17px | regular |
| `b1` | `<p>` | 18px | 15px | light |
| `b2` / `body` | `<p>` | 16px | 14px | light |
| `b3` | `<p>` | 14px | 13px | light |
| `caption` | `<span>` | 13px | 12px | light (uses `c1` styles) |
| `credit` | `<span>` | 10px | 10px | medium |

### `weight` values

`light` · `regular` · `medium` · `semibold` · `bold`

---

## AlertMessage

A banner used for important notifications or error alerts.

```vue
<script setup>
import { ref } from 'vue';
import { AlertMessage } from '@boaideas/ui-kit';

const isVisible = ref(true);
</script>

<template>
  <AlertMessage
    v-model:visible="isVisible"
    variant="notification"
    @close="console.log('Alert closed')"
  >
    Successfully updated your subscription!
  </AlertMessage>

  <AlertMessage
    variant="alert"
    :visible="true"
  >
    Your payment method has expired.
  </AlertMessage>
</template>
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `visible` | `boolean` | `true` | Controls visibility (`v-model:visible`) |
| `variant` | `'notification' \| 'alert'` | `'notification'` | Notification (blue) or Alert (red) |

### Events

| Event | Payload | Description |
|---|---|---|
| `update:visible` | `boolean` | Emitted when visibility changes |
| `close` | — | Emitted when the close button is clicked |

---

## Colors

All brand colors are exposed both as **CSS custom properties** and as **Tailwind classes** (via the preset).

### Tailwind color classes

Use any color with `text-`, `bg-`, `border-`, `fill-`, `stroke-`, etc.

```html
<!-- Text -->
<p class="text-primary-1">Dark navy text</p>
<p class="text-primary-3">Mid blue text</p>
<p class="text-grey-600">Muted grey</p>
<p class="text-secondary-2-base">Error red</p>
<p class="text-secondary-6-base">Success green</p>
<p class="text-white-alpha-100">White text</p>

<!-- Backgrounds -->
<div class="bg-primary-1">Navy background</div>
<div class="bg-primary-4">Off-white background</div>
<div class="bg-primary-6">Pale blue background</div>
<div class="bg-grey-100">Light grey background</div>
<div class="bg-secondary-5-light">Light yellow background</div>

<!-- Borders -->
<div class="border border-primary-1">Navy border</div>
<div class="border border-grey-200">Light grey border</div>
<div class="border border-secondary-2-base">Error red border</div>
```

### CSS custom properties

Use CSS vars directly in your own stylesheets:

```css
.my-component {
  color: var(--primary-color-1);           /* dark navy */
  background: var(--primary-color-4);      /* off-white */
  border-color: var(--grey-300);
}

.badge--error   { color: var(--secondary-color-2-base); }  /* red */
.badge--success { color: var(--secondary-color-6-base); }  /* green */
.badge--warning { color: var(--secondary-color-5-dark); }  /* amber */
```

### Full color reference

**Primary**

| CSS var | Tailwind class | Value |
|---|---|---|
| `--primary-color-1` | `primary-1` | `#002349` — dark navy (main brand) |
| `--primary-color-2` | `primary-2` | `#7FBFF5` — light blue |
| `--primary-color-3` | `primary-3` | `#005BAB` — mid blue |
| `--primary-color-4` | `primary-4` | `#FAF8F8` — off white |
| `--primary-color-5` | `primary-5` | `#A3D5FF` — pale blue |
| `--primary-color-6` | `primary-6` | `#E4F2FD` — very pale blue |

**Grey scale** (1000 = darkest)

| CSS var | Tailwind class |
|---|---|
| `--grey-100` … `--grey-1000` | `grey-100` … `grey-1000` |

**Secondary** (each has `-dark`, `-base`, `-light`)

| Group | CSS var pattern | Tailwind class pattern |
|---|---|---|
| burgundy | `--secondary-color-1-{dark\|base\|light}` | `secondary-1-{dark\|base\|light}` |
| red | `--secondary-color-2-{dark\|base\|light}` | `secondary-2-{dark\|base\|light}` |
| coral | `--secondary-color-3-{dark\|base\|light}` | `secondary-3-{dark\|base\|light}` |
| orange | `--secondary-color-4-{dark\|base\|light}` | `secondary-4-{dark\|base\|light}` |
| yellow | `--secondary-color-5-{dark\|base\|light}` | `secondary-5-{dark\|base\|light}` |
| green | `--secondary-color-6-{dark\|base\|light}` | `secondary-6-{dark\|base\|light}` |

**White alpha**

| CSS var | Tailwind class | Opacity |
|---|---|---|
| `--white-alpha-10` … `--white-alpha-100` | `white-alpha-10` … `white-alpha-100` | 10% … 100% white |

---

## Spacing

All spacing tokens follow a 4px base grid. Every token works as both a **CSS var** and a **Tailwind spacing class**.

### Tailwind spacing classes

All standard Tailwind spacing utilities work: `p-`, `px-`, `py-`, `pt-` / `pb-` / `pl-` / `pr-`, `m-`, `mx-`, `my-`, `gap-`, `space-x-`, `space-y-`, `w-`, `h-`, etc.

```html
<!-- Padding -->
<div class="p-m">24px all sides</div>
<div class="px-s py-xxs">16px horizontal, 8px vertical</div>
<div class="pt-xs pb-s">12px top, 16px bottom</div>

<!-- Margin -->
<div class="mb-l">32px bottom margin</div>
<div class="mt-xxs">8px top margin</div>

<!-- Gap (flexbox / grid) -->
<div class="flex gap-s">16px gap between children</div>
<div class="flex flex-col gap-xxs">8px gap</div>

<!-- Width / height -->
<div class="w-m h-m">24px × 24px box</div>
```

### Token reference

| CSS var | Tailwind key | Value | Use case |
|---|---|---|---|
| `--spacing-none` | `none` | 0px | resets |
| `--spacing-xxxs` | `xxxs` | 4px | icon gaps, nudges |
| `--spacing-xxs` | `xxs` | 8px | compact padding |
| `--spacing-xs` | `xs` | 12px | tight padding |
| `--spacing-s` | `s` | 16px | default component padding |
| `--spacing-m` | `m` | 24px | card padding, section gaps |
| `--spacing-l` | `l` | 32px | large sections |
| `--spacing-xl` | `xl` | 40px | generous spacing |
| `--spacing-xxl` | `xxl` | 48px | page-level |
| `--spacing-xxxl` | `xxxl` | 56px | hero sections |

### CSS custom properties

```css
.card {
  padding: var(--spacing-m);        /* 24px */
  gap: var(--spacing-xxs);          /* 8px  */
  margin-bottom: var(--spacing-l);  /* 32px */
}
```

---

## Font weights

| CSS var | Tailwind class | Value |
|---|---|---|
| `--font-weight-light` | `font-light` | 300 |
| `--font-weight-regular` | `font-regular` | 400 |
| `--font-weight-medium` | `font-medium` | 500 |
| `--font-weight-semibold` | `font-semibold` | 600 |
| `--font-weight-bold` | `font-bold` | 700 |

```html
<p class="font-semibold">Semi-bold via Tailwind</p>
```

```css
.label { font-weight: var(--font-weight-semibold); }
```

---

## Border radius

| CSS var | Tailwind class | Value |
|---|---|---|
| `--radius-none` | `rounded-none` | 0 |
| `--radius-sm` | `rounded-sm` | — |
| `--radius-md` | `rounded-md` | 12px |
| `--radius-lg` | `rounded-lg` | — |
| `--radius-xl` | `rounded-xl` | — |
| `--radius-full` | `rounded-full` | 9999px |

```html
<div class="rounded-md">Standard card radius</div>
<span class="rounded-full">Pill / tag radius</span>
```

---

## Button / ActionButton

A general-purpose action button. `ActionButton` is an alias for `Button` kept for backwards compatibility.

```vue
<script setup>
import { Button, ActionButton } from '@boaideas/ui-kit';
</script>

<template>
  <!-- Filled (default) -->
  <Button @click="submit">Submit</Button>

  <!-- Ghost — no background, no border -->
  <Button ghost @click="cancel">Cancel</Button>

  <!-- Transparent — no background, visible border -->
  <Button transparent @click="back">Back</Button>

  <!-- Light color style (white text on dark backgrounds) -->
  <Button color-style="light" @click="doSomething">Light button</Button>

  <!-- Disabled -->
  <Button disabled>Unavailable</Button>

  <!-- No text-transform: uppercase (default is uppercase) -->
  <Button :uppercase="false">Mixed case label</Button>

  <!-- Render as a block div instead of <button> -->
  <Button type="block">Block element button</Button>

  <!-- ActionButton alias -->
  <ActionButton @click="submit">Submit</ActionButton>
</template>
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `colorStyle` | `'dark' \| 'light'` | `'dark'` | Dark = navy fill; Light = white text for dark backgrounds |
| `type` | `'button' \| 'block'` | `'button'` | Renders as `<button>` or `<div>` |
| `ghost` | `boolean` | `false` | No background, no border |
| `transparent` | `boolean` | `false` | No background, visible border |
| `uppercase` | `boolean` | `false` | Text-transform uppercase |
| `disabled` | `boolean` | `false` | Disabled state |
| `stopPropagation` | `boolean` | `false` | Calls `event.stopPropagation()` on click |

### Events

| Event | Payload | Description |
|---|---|---|
| `click` | `MouseEvent` | Emitted on click (not emitted when disabled) |

---

## SelectButton

A toggle button used for option selection within a group (e.g. size, plan tier).

```vue
<script setup>
import { ref } from 'vue';
import { SelectButton } from '@boaideas/ui-kit';

const selected = ref('monthly');
</script>

<template>
  <SelectButton
    color-style="dark"
    :is-active="selected === 'monthly'"
    @click="selected = 'monthly'"
  >
    Monthly
  </SelectButton>

  <SelectButton
    color-style="dark"
    :is-active="selected === 'annual'"
    @click="selected = 'annual'"
  >
    Annual
  </SelectButton>

  <!-- Small size -->
  <SelectButton color-style="medium" size-style="s" :is-active="true">
    Selected
  </SelectButton>

  <!-- Disabled -->
  <SelectButton color-style="medium" :is-disabled="true">
    Unavailable
  </SelectButton>
</template>
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `isActive` | `boolean` | `false` | Whether the button appears selected |
| `colorStyle` | `'light' \| 'medium' \| 'dark'` | — | Visual color scheme |
| `sizeStyle` | `'s' \| 'm'` | `'m'` | Compact (`s`) or standard (`m`) padding |
| `isDisabled` | `boolean` | `false` | Disabled state |

### Events

| Event | Payload | Description |
|---|---|---|
| `click` | — | Emitted on click |

---

## Tag

A small inline badge/label, typically used to highlight status or categories.

```vue
<script setup>
import { Tag } from '@boaideas/ui-kit';
</script>

<template>
  <!-- Default: neutral pale blue background, white text -->
  <Tag>Popular</Tag>

  <!-- Alarm: coral/red background -->
  <Tag style-bg="alarm">Alert</Tag>

  <!-- Yellow: light yellow background, dark text -->
  <Tag style-bg="yellow" text-color="dark">Warning</Tag>

  <!-- Custom background color -->
  <Tag :customBgColor="'#002349'">Custom</Tag>

  <!-- Custom text color -->
  <Tag :customTextColor="'#005BAB'">Custom text</Tag>

  <!-- Allow wrapping (disabled by default) -->
  <Tag :noWrap="false">This tag can wrap onto multiple lines</Tag>
</template>
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `styleBg` | `'neutral' \| 'alarm' \| 'yellow'` | `'neutral'` | Preset background color |
| `textColor` | `'light' \| 'dark'` | `'light'` | White (`light`) or navy (`dark`) text |
| `customBgColor` | `string` | `null` | Override background with any CSS color |
| `customTextColor` | `string` | `null` | Override text with any CSS color |
| `noWrap` | `boolean` | `true` | Prevent text wrapping |

---

## Divider

A full-width horizontal rule using the light grey token.

```vue
<script setup>
import { Divider } from '@boaideas/ui-kit';
</script>

<template>
  <div>
    <p>Section one content</p>
    <Divider />
    <p>Section two content</p>
  </div>
</template>
```

No props. Renders a 1px `--grey-100` horizontal line at full width.

---

## ContentPlate

A simple container with a pale-blue background and rounded corners. Use it as a card surface.

```vue
<script setup>
import { ContentPlate } from '@boaideas/ui-kit';
</script>

<template>
  <ContentPlate>
    <p>Content inside the plate</p>
  </ContentPlate>
</template>
```

No props. Full-width, rounded-xl, pale blue (`--primary-color-6`) background.

---

## Modal

A dialog overlay built on Reka UI. Controlled via `v-model`.

```vue
<script setup>
import { ref } from 'vue';
import { Modal, Button } from '@boaideas/ui-kit';

const isOpen = ref(false);
</script>

<template>
  <Button @click="isOpen = true">Open modal</Button>

  <Modal v-model="isOpen" aria-title="Confirm action">
    <!-- Close icon slot (renders inside the DialogClose wrapper) -->
    <template #header-close>
      <span aria-label="Close">✕</span>
    </template>

    <!-- Optional header -->
    <template #header>
      <h2>Are you sure?</h2>
    </template>

    <!-- Body content -->
    <template #body>
      <p style="padding: 0 2rem 1rem">This action cannot be undone.</p>
    </template>

    <!-- Optional footer with action buttons -->
    <template #footer>
      <Button transparent @click="isOpen = false">Cancel</Button>
      <Button @click="confirm">Confirm</Button>
    </template>
  </Modal>
</template>
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `boolean` | `false` | Controls open/closed state (`v-model`) |
| `size` | `'md' \| 'lg' \| 'xl' \| 'full'` | `'lg'` | Max width: 500 / 800 / 1200 / 100vw |
| `ariaTitle` | `string` | `'Dialog'` | Screen-reader title (visually hidden) |
| `noCloseOnBackdrop` | `boolean` | `false` | Prevent closing on backdrop click |
| `closeOnEscape` | `boolean` | `true` | Allow Escape key to close |
| `bodySvgImage` | `string` | — | Raw SVG string injected into the body |

### Events

| Event | Description |
|---|---|
| `update:modelValue` | Emitted when open state changes |
| `open` | Emitted after the modal opens (auto-focus complete) |
| `close` | Emitted after the modal closes |

### Slots

| Slot | Description |
|---|---|
| `header-close` | Content inside the close button (e.g. an × icon) |
| `header` | Optional header area below the close row |
| `body` | Main content area |
| `footer` | Optional footer, typically action buttons |

---

## Tooltip

A hover/focus tooltip built on Reka UI. Wrap any trigger element as the default slot.

```vue
<script setup>
import { Tooltip, Button } from '@boaideas/ui-kit';
</script>

<template>
  <!-- Basic tooltip on top (default) -->
  <Tooltip content="This is a tooltip">
    <Button>Hover me</Button>
  </Tooltip>

  <!-- Position on the right, with custom delay -->
  <Tooltip content="Opens after 500ms" side="right" :delay-duration="500">
    <span>ℹ️</span>
  </Tooltip>

  <!-- Below the trigger -->
  <Tooltip content="Below tooltip" side="bottom" :side-offset="8">
    <Button>Below</Button>
  </Tooltip>
</template>
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `content` | `string` | — | Text displayed inside the tooltip (required) |
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Preferred side to show the tooltip |
| `sideOffset` | `number` | `5` | Distance in px between trigger and tooltip |
| `delayDuration` | `number` | `200` | Delay in ms before the tooltip appears |

---

## DropdownMenu

A composable dropdown built on Reka UI. Use the sub-components to build the menu items.

```vue
<script setup>
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
} from '@boaideas/ui-kit';

function handleEdit() { /* ... */ }
function handleDelete() { /* ... */ }
</script>

<template>
  <DropdownMenu>
    <!-- Trigger — any element works -->
    <template #trigger>
      <Button>Options ▾</Button>
    </template>

    <!-- Menu content -->
    <DropdownMenuLabel>Account</DropdownMenuLabel>

    <DropdownMenuItem @select="handleEdit">Edit profile</DropdownMenuItem>
    <DropdownMenuItem shortcut="⌘S" @select="save">Save</DropdownMenuItem>
    <DropdownMenuItem disabled>Unavailable action</DropdownMenuItem>

    <DropdownMenuSeparator />

    <DropdownMenuItem destructive @select="handleDelete">Delete</DropdownMenuItem>
  </DropdownMenu>
</template>
```

### DropdownMenu props

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Preferred side for the menu |
| `sideOffset` | `number` | `5` | Distance in px between trigger and menu |
| `align` | `'start' \| 'center' \| 'end'` | `'end'` | Alignment relative to the trigger |

### DropdownMenuItem props

| Prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Greys out the item and prevents selection |
| `destructive` | `boolean` | `false` | Renders text in red |
| `icon` | `Component` | — | Vue component rendered as a 20×20 icon |
| `shortcut` | `string` | — | Keyboard shortcut label shown on the right |

### Events

| Component | Event | Description |
|---|---|---|
| `DropdownMenuItem` | `select` | Emitted when the item is clicked/activated |

---

## BottomActionBar

A fixed bottom bar for page-level actions. Adapts layout between desktop and mobile.

```vue
<script setup>
import { BottomActionBar, Button, Text } from '@boaideas/ui-kit';
</script>

<template>
  <!-- Desktop layout: left content + right actions side by side -->
  <BottomActionBar>
    <template #left>
      <Text variant="b2" color="primary-color-1">3 cylinders · Every month</Text>
    </template>
    <template #right>
      <Button transparent @click="cancel">Cancel</Button>
      <Button @click="confirm">Continue</Button>
    </template>
  </BottomActionBar>

  <!-- Mobile layout: stacks vertically -->
  <BottomActionBar :is-mobile="true">
    <template #left>
      <Text variant="b3" color="primary-color-1">Your selection summary</Text>
    </template>
    <template #right>
      <Button @click="confirm">Continue</Button>
    </template>
  </BottomActionBar>
</template>
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `isMobile` | `boolean` | `false` | Switches to stacked mobile layout |

### Slots

| Slot | Description |
|---|---|
| `left` | Left-side content (summary text, pricing, etc.) |
| `right` | Right-side actions (buttons) |

---

## Typography classes

Apply responsive typography to any element without using the `Text` component:

```html
<h1 class="typo-h1">Headline</h1>
<p class="typo-b2">Body copy</p>
<span class="typo-c1">Caption</span>
```

Available classes: `typo-h1` `typo-h2` `typo-h3` `typo-h4` `typo-s1` `typo-s2` `typo-b1` `typo-b2` `typo-b3` `typo-c1` `typo-credit` `typo-button-large` `typo-button-medium` `typo-button-small`

All are responsive (mobile-first, desktop styles apply at ≥ 992px).

---

## TypeScript types

```ts
import type { TextVariant, TextColor, SpacingToken, FontWeight, ButtonProps } from '@boaideas/ui-kit';

// Useful for component props
defineProps<{
  size?: SpacingToken;     // 'none' | 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'
  color?: TextColor;       // 'primary-color-1' | 'grey-900' | ...all brand tokens
  textStyle?: TextVariant; // 'h1' | 'h2' | 'h3' | 'h4' | 's1' | 's2' | 'b1' | 'b2' | 'b3' | 'body' | 'caption' | 'credit'
  weight?: FontWeight;     // 'light' | 'regular' | 'medium' | 'semibold' | 'bold'
}>();

// Apply spacing token as CSS var
const style = { padding: `var(--spacing-${props.size})` };

// Apply color token as CSS var
const style = { color: `var(--${props.color})` };
```

---

## Domain-level components

These are business-specific components exported from the library. Import them the same way as primitives.

```ts
import {
  CylinderCard,
  CylinderQuantityCard,
  CylinderTypeSelector,
  FrequencySelector,
  CylinderSelection,
  ProgressBar,
  SectionNotes,
  ChangeQtyButton,
  ProductLine,
  ProductSummary,
} from '@boaideas/ui-kit';
```

---

### CylinderCard

A selectable card displaying a single cylinder variant (type/size). Emits `select` when clicked.

```vue
<script setup>
import { ref } from 'vue';
import { CylinderCard } from '@boaideas/ui-kit';

const selectedId = ref(null);

const variant = {
  id: 1,
  title: '60L Cylinder',
  featured_image: { src: 'https://example.com/cylinder.png' },
};
</script>

<template>
  <CylinderCard
    :variant="variant"
    :selected-variant-id="selectedId"
    @select="selectedId = $event"
  />

  <!-- With error state (e.g. form validation failed) -->
  <CylinderCard
    :variant="variant"
    :selected-variant-id="selectedId"
    :error="true"
    @select="selectedId = $event"
  />

  <!-- Mobile layout (full-width card) -->
  <CylinderCard
    :variant="variant"
    :selected-variant-id="selectedId"
    :is-mobile="true"
    @select="selectedId = $event"
  />
</template>
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `{ id: number; title: string; featured_image?: { src: string; alt?: string } \| null }` | — | The cylinder variant to display (required) |
| `selectedVariantId` | `number \| null` | — | Currently selected variant ID |
| `error` | `boolean` | `false` | Shows red border for validation errors |
| `isMobile` | `boolean` | `false` | Full-width mobile layout |

#### Events

| Event | Payload | Description |
|---|---|---|
| `select` | `number` | Emits the variant's `id` when clicked |

---

### CylinderTypeSelector

Renders a row of `CylinderCard` components from a list of variants.

```vue
<script setup>
import { ref } from 'vue';
import { CylinderTypeSelector } from '@boaideas/ui-kit';

const selectedId = ref(null);

const variants = [
  { id: 1, title: '60L Cylinder', featured_image: { src: '/60l.png' } },
  { id: 2, title: '110L Cylinder', featured_image: { src: '/110l.png' } },
];
</script>

<template>
  <CylinderTypeSelector
    :variants="variants"
    :selected-variant-id="selectedId"
    @select="selectedId = $event"
  />
</template>
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variants` | `Variant[]` | — | Array of cylinder variants (required) |
| `selectedVariantId` | `number \| null` | — | Currently selected ID |
| `error` | `boolean` | `false` | Propagates error state to all cards |
| `isMobile` | `boolean` | `false` | Propagates mobile layout to all cards |

#### Events

| Event | Payload | Description |
|---|---|---|
| `select` | `number` | Emitted when any card is clicked |

---

### CylinderQuantityCard

A selectable card showing a quantity, price, and optional shipping cost.
Prices are in **cents** (e.g. `2999` = $29.99).

```vue
<script setup>
import { ref } from 'vue';
import { CylinderQuantityCard } from '@boaideas/ui-kit';

const selectedQty = ref(0);
</script>

<template>
  <!-- Basic card: 2 cylinders at $19.99 -->
  <CylinderQuantityCard
    :qty="2"
    :price="{ original: 1999, discounted: 1999 }"
    :selected-qty="selectedQty"
    :disabled="false"
    @select="selectedQty = $event"
  />

  <!-- With discounted price and shipping -->
  <CylinderQuantityCard
    :qty="3"
    :price="{ original: 2999, discounted: 2499 }"
    :selected-qty="selectedQty"
    :disabled="false"
    :display-shipping="true"
    :shipping-price="{ original: 999, discounted: 0 }"
    :translations="{
      quantity_card_shipping_label: 'Shipping',
      quantity_card_free_shipping_label: 'Free shipping',
    }"
    @select="selectedQty = $event"
    @select-disabled="showCylinderError = true"
  />
</template>
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `qty` | `number` | — | The quantity this card represents (required) |
| `selectedQty` | `number` | — | Currently selected quantity (required) |
| `price` | `{ original: number; discounted: number }` | — | Price in cents (required) |
| `disabled` | `boolean` | `true` | Greys out the card; emits `select-disabled` instead |
| `error` | `boolean` | `false` | Red border for validation errors |
| `displayShipping` | `boolean` | `false` | Show shipping section at bottom |
| `shippingPrice` | `{ original: number; discounted: number }` | `{ original: 0, discounted: 0 }` | Shipping cost in cents |
| `translations` | `object` | `{}` | Labels: `quantity_card_shipping_label`, `quantity_card_free_shipping_label` |

#### Events

| Event | Payload | Description |
|---|---|---|
| `select` | `number` | Emitted with the qty value when clicked (and not disabled) |
| `select-disabled` | — | Emitted when clicked while `disabled` is true |

---

### FrequencySelector

A frequency picker in either **tile** (button) or **dropdown** mode.

```vue
<script setup>
import { ref } from 'vue';
import { FrequencySelector } from '@boaideas/ui-kit';

const selectedFrequency = ref(null);

const options = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
];
</script>

<template>
  <!-- Dropdown mode (default) — shows all options in a dropdown -->
  <FrequencySelector
    view-mode="dropdown"
    :selected-frequency="selectedFrequency"
    :frequency-options="options"
    :translations="{
      cylinder_select_frequency_base_template: 'Every @@ freq_month @@ month(s)',
    }"
    @select="selectedFrequency = $event"
  />

  <!-- Tile mode — renders a single clickable tile (use one per option in a v-for) -->
  <FrequencySelector
    v-for="opt in options"
    :key="opt.value"
    view-mode="tiles"
    :selected-frequency="selectedFrequency"
    :option="opt"
    :translations="{
      cylinder_select_frequency_base_template: 'Every @@ freq_month @@ month(s)',
    }"
    @select="selectedFrequency = $event"
  />

  <!-- With explicit labels (bypasses template rendering) -->
  <FrequencySelector
    view-mode="dropdown"
    :selected-frequency="selectedFrequency"
    :frequency-options="[
      { value: 1, label: 'Monthly', sublabel: 'Most popular' },
      { value: 3, label: 'Quarterly' },
    ]"
    @select="selectedFrequency = $event"
  />
</template>
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `viewMode` | `'tiles' \| 'dropdown'` | `'dropdown'` | Rendering mode |
| `selectedFrequency` | `string \| number \| null` | — | Currently selected value (required) |
| `frequencyOptions` | `FrequencyOption[]` | `[]` | Options for dropdown mode |
| `option` | `FrequencyOption` | — | Single option for tile mode |
| `disabled` | `boolean` | `false` | Disables interaction |
| `error` | `boolean` | `false` | Red border (tile mode) or red border (dropdown) |
| `warning` | `boolean` | `false` | Orange border (dropdown mode) |
| `dropdownFullWidth` | `boolean` | `false` | Dropdown takes full width of its container |
| `baseFrequency` | `number` | `1` | Base interval for label ratio calculation |
| `baseSubscriptionName` | `string` | `''` | Injected into label templates |
| `translations` | `object` | `{}` | Template strings with `@@ freq_month @@`, `@@ freq_suffix @@`, `@@ base_subscription_name @@` placeholders |

#### Events

| Event | Payload | Description |
|---|---|---|
| `select` | `string \| number` | Emitted with the selected option's value |
| `select-disabled` | — | Emitted when interaction happens while disabled |

---

### CylinderSelection

A full cylinder subscription selection widget — combines type selector, quantity cards, and frequency selector into one self-contained flow.

```vue
<script setup>
import { CylinderSelection } from '@boaideas/ui-kit';

const variants = [
  { id: 1, title: '60L', featured_image: { src: '/60l.png' } },
  { id: 2, title: '110L', featured_image: { src: '/110l.png' } },
];

const quantities = [1, 2, 3, 6];

const getCylinderPrice = (qty) => ({
  original: qty * 2999,
  discounted: qty * 2499,
});

const frequencies = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
];

const translations = {
  cylinder_selection_choose_cylinder: 'Choose your cylinder',
  cylinder_selection_choose_quantity: 'How many cylinders?',
  cylinder_selection_choose_frequency: 'How often?',
  cylinder_selection_badge_text: 'Popular',
  cylinder_selection_not_sure: "Not sure which to choose?",
  cylinder_selection_quantity_required: 'Please select a quantity',
  cylinder_selection_cylinder_required: 'Please select a cylinder',
  cylinder_selection_frequency_required: 'Please select a frequency',
  quantity_card_free_shipping_label: 'Free shipping',
  cylinder_select_frequency_base_template: 'Every @@ freq_month @@ month(s)',
};

// Expose the widget ref to call handleContinue()
const widgetRef = ref(null);

function onContinue({ cylinderId, qty, frequency }) {
  console.log('Selection:', { cylinderId, qty, frequency });
}
</script>

<template>
  <CylinderSelection
    ref="widgetRef"
    :cylinder-variants="variants"
    :available-quantities="quantities"
    :get-cylinder-price="getCylinderPrice"
    :frequency-options="frequencies"
    :popular-qty="3"
    :popular-frequency="1"
    :show-quantity-shipping="true"
    :translations="translations"
    @continue="onContinue"
    @save-changes="onContinue"
  />

  <!-- Call handleContinue() externally to validate and emit continue -->
  <button @click="widgetRef.handleContinue()">Continue</button>
</template>
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `cylinderVariants` | `Variant[]` | — | Available cylinder types (required) |
| `availableQuantities` | `number[]` | — | List of selectable quantities (required) |
| `getCylinderPrice` | `(qty: number) => Price` | — | Returns price object for a given qty (required) |
| `frequencyOptions` | `FrequencyOption[]` | — | Available frequencies (required) |
| `getShippingPrice` | `(qty: number) => Price` | — | Returns shipping price for a given qty |
| `popularQty` | `number` | `3` | Highlights this qty with a "Popular" tag |
| `popularFrequency` | `string \| number` | `1` | Highlights this frequency with a "Popular" tag |
| `isMobile` | `boolean` | `false` | Mobile layout (stepper for qty, dropdown for frequency) |
| `showQuantityShipping` | `boolean` | `true` | Show shipping section on quantity cards |
| `initialCylinderId` | `number` | — | Pre-selected cylinder |
| `initialQty` | `number` | — | Pre-selected quantity |
| `initialFrequency` | `string \| number` | — | Pre-selected frequency |
| `frequencyBaseFrequency` | `number` | `1` | Base interval for frequency label math |
| `frequencyBaseSubscriptionName` | `string` | `''` | Injected into frequency label templates |
| `translations` | `CylinderSelectionTranslations` | `{}` | All UI label strings |

#### Events

| Event | Payload | Description |
|---|---|---|
| `continue` | `{ cylinderId, qty, frequency }` | Emitted after `handleContinue()` passes validation |
| `saveChanges` | `{ cylinderId, qty, frequency }` | Emitted whenever all three fields have a value |

#### Exposed method

| Method | Description |
|---|---|
| `handleContinue()` | Validates all selections and emits `continue`. Call via template ref. |

---

### ProgressBar

A discount-tier progress bar. Displays how many more items are needed to unlock the next discount, and turns green when the maximum is reached.

```vue
<script setup>
import { ProgressBar } from '@boaideas/ui-kit';

const tiers = [
  { min: 0, value: null },
  { min: 3, value: '10%' },
  { min: 6, value: '20%' },
];

const translations = {
  label_initial: 'Add @@ next_discount @@ off — add more!',
  label_single: 'Add 1 more for @@ next_discount @@ off',
  label_plural: 'Add @@ count @@ more for @@ next_discount @@ off',
  label_maximum: '🎉 Maximum discount unlocked!',
  added_count: '@@ count @@ added',
};
</script>

<template>
  <ProgressBar
    :tiers="tiers"
    :selected-count="2"
    :translations="translations"
  />
</template>
```

#### Props

| Prop | Type | Description |
|---|---|---|
| `tiers` | `{ min: number; value: string \| null }[]` | Discount tier thresholds and labels (required) |
| `selectedCount` | `number` | Current number of selected items (required) |
| `translations` | `Record<string, string>` | Label templates — see keys below (required) |

#### Translation keys

| Key | Placeholders | Description |
|---|---|---|
| `label_initial` | `@@ next_discount @@` | Shown when count is 0 |
| `label_single` | `@@ next_discount @@` | Shown when 1 item away from next tier |
| `label_plural` | `@@ count @@`, `@@ next_discount @@` | Shown when 2+ items away |
| `label_maximum` | — | Shown when max tier is reached |
| `added_count` | `@@ count @@` | Count display on the right of the bar |

---

### SectionNotes

A bulleted notes/information list with a title. Reads up to 5 note strings from the translations object.

```vue
<script setup>
import { SectionNotes } from '@boaideas/ui-kit';

const translations = {
  section_notes_title: 'Important information',
  section_notes_note_1: 'Subscription renews automatically.',
  section_notes_note_2: 'Cancel anytime from your account.',
  section_notes_note_3: 'Prices include GST.',
};
</script>

<template>
  <SectionNotes :translations="translations" />
</template>
```

#### Props

| Prop | Type | Description |
|---|---|---|
| `translations` | `SectionNotesTranslations` | Object with `section_notes_title` and up to 5 `section_notes_note_N` keys |

---

### ChangeQtyButton

An add/remove quantity control with two display modes.

```vue
<script setup>
import { ref } from 'vue';
import { ChangeQtyButton } from '@boaideas/ui-kit';

const qty = ref(0);

function handleChange(direction) {
  if (direction === 'plus') qty.value++;
  if (direction === 'minus' && qty.value > 0) qty.value--;
}
</script>

<template>
  <!-- inButton mode: shows "Add" button at qty=0, stepper when qty>0 -->
  <ChangeQtyButton
    :qty="qty"
    type="inButton"
    add-button-text="Add"
    @change-qty="handleChange"
  />

  <!-- Light style variant (outlined, for use on dark backgrounds) -->
  <ChangeQtyButton
    :qty="qty"
    type="inButton"
    button-style="light"
    @change-qty="handleChange"
  />

  <!-- empty mode: icon-only –/count/+ (used in product grids) -->
  <ChangeQtyButton
    :qty="qty"
    type="empty"
    size="small"
    @change-qty="handleChange"
  />
</template>
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `qty` | `number` | — | Current quantity (required) |
| `type` | `'inButton' \| 'empty'` | `'inButton'` | Display style |
| `size` | `'small' \| 'big'` | `'small'` | Affects padding and text size |
| `buttonStyle` | `'dark' \| 'light'` | `'dark'` | Dark = filled navy; Light = outlined |
| `addButtonText` | `string` | `'Add'` | Label shown when `qty === 0` in `inButton` mode |
| `isDisabled` | `boolean` | `false` | Disables the add button |
| `decreaseDisabled` | `boolean` | `false` | Disables the minus icon (`empty` mode) |
| `increaseDisabled` | `boolean` | `false` | Disables the plus icon (`empty` mode) |

#### Events

| Event | Payload | Description |
|---|---|---|
| `change-qty` | `'plus' \| 'minus'` | Emitted when + or − is tapped |

---

### ProductLine

A product row used in order summaries and subscription item lists.

```vue
<script setup>
import { ProductLine } from '@boaideas/ui-kit';
</script>

<template>
  <!-- In-stock with discount -->
  <ProductLine
    :product="{
      featured_image: 'https://example.com/product.png',
      title: 'Sparkling Water Flavour Pack',
    }"
    :price="{
      original: 1999,
      discounted: 1499,
      discountPercent: 25,
    }"
    discount-label="off"
  >
    <!-- Optional slot: quantity control, notes, etc. -->
    <span>Qty: 2</span>
  </ProductLine>

  <!-- Out of stock -->
  <ProductLine
    type="outOfStock"
    :product="{
      featured_image: 'https://example.com/product.png',
      title: 'Sparkling Water Flavour Pack',
      qty: 0,
    }"
    :price="{ original: 1999 }"
  >
    <template #line_note>
      <span>Currently unavailable</span>
    </template>
  </ProductLine>
</template>
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `product` | `{ featured_image: string; title: string; qty?: number }` | — | Product data (required) |
| `price` | `{ original: number; discounted?: number \| null; discountPercent?: number \| null }` | — | Price in cents (required) |
| `type` | `'inStock' \| 'outOfStock'` | `'inStock'` | Layout variant |
| `discountLabel` | `string` | `'discount'` | Text after the discount percentage badge |

#### Slots

| Slot | Mode | Description |
|---|---|---|
| default | `inStock` | Rendered below the product title (e.g. quantity control) |
| `unit-price` | `inStock` | Rendered below the price (e.g. per-unit price) |
| `line_note` | `outOfStock` | Rendered below the qty label |

---

### ProductSummary

A collapsible summary row for a subscription line item (cylinders, flavours, etc.).

```vue
<script setup>
import { ProductSummary, SummaryCylindersIcon } from '@boaideas/ui-kit';
</script>

<template>
  <ProductSummary
    title="CO₂ Cylinders"
    :qty="3"
    :price="{ original: 7497, discounted: 6297 }"
    quantity-label="Cylinders"
  >
    <!-- Required: icon slot -->
    <template #icon>
      <SummaryCylindersIcon />
    </template>

    <!-- Optional: tag beneath the title/qty line -->
    <template #tag>
      <span class="text-xs text-green-600">Free shipping</span>
    </template>

    <!-- Optional: always-visible content below the header row -->
    <template #main>
      <div>Always visible extra content</div>
    </template>

    <!-- Collapsible: shown when the row is expanded -->
    <template #sub>
      <div>60L Cylinder × 3</div>
    </template>
  </ProductSummary>
</template>
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Product group name (required) |
| `qty` | `number` | — | Total quantity (required) |
| `price` | `{ original: number; discounted?: number \| null }` | — | Price in cents (required) |
| `quantityLabel` | `string` | `'Quantity'` | Label shown before the qty number |

#### Slots

| Slot | Description |
|---|---|
| `icon` | Icon displayed to the left of the title (required) |
| `tag` | Optional tag below the title row |
| `main` | Always-visible content below the header |
| `sub` | Collapsible content revealed on click |

---

### PriceBlock

A summary block for prices, shipping, and total. Typically used in checkout or order review.

```vue
<script setup>
import { PriceBlock } from '@boaideas/ui-kit';

const subtotal = {
  original: 7497,
  discounted: 6297,
  discountPercent: 16
};

const translations = {
  price_block_title: 'Order Summary',
  price_block_subtotal_label: 'Subtotal',
  price_block_shipping_label: 'Shipping',
  price_block_shipping_free: 'Free',
  price_block_total_label: 'Total',
  price_block_total_info: '*Recurring charges every 3 months'
};
</script>

<template>
  <!-- Detailed mode (shows subtotal, shipping, and total) -->
  <PriceBlock
    view-mode="detailed"
    :order-subtotal-price="subtotal"
    :order-shipping-price="0"
    :translations="translations"
  />

  <!-- Simple mode (shows only shipping) -->
  <PriceBlock
    view-mode="simple"
    :order-shipping-price="999"
    :translations="translations"
  />
</template>
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `viewMode` | `'detailed' \| 'simple'` | `'detailed'` | Which rows to display |
| `orderSubtotalPrice` | `{ original: number; discounted: number; discountPercent: number \| null }` | — | Required for 'detailed' mode |
| `orderShippingPrice` | `number` | `0` | Shipping price in cents |
| `translations` | `object` | — | Required labels (see below) |

#### Translations Object Keys

| Key | Description |
|---|---|
| `price_block_title` | Header (detailed mode only) |
| `price_block_subtotal_label` | Label for subtotal row |
| `price_block_taxes_info` | (Optional) Note below subtotal |
| `price_block_shipping_label` | Label for shipping row |
| `price_block_shipping_free` | Text when shipping is 0 |
| `price_block_shipping_info` | (Optional) Note below shipping |
| `price_block_total_label` | Label for total row |
| `price_block_total_info` | (Optional) Note below total |

---

## Rules

- Always import `@boaideas/ui-kit/style.css` — without it, no tokens or styles will work
- Use CSS custom properties from this list — do not hardcode hex values or pixel sizes
- The `Text` component handles responsive font sizing — use it for all text content instead of raw `<h1>`, `<p>` etc.
- For text color overrides, use the `color` prop on `Text`, not a wrapping element with `style="color:..."`
- Prices passed to domain-level components are always in **cents** (integer) — `2999` = $29.99
- The `CylinderSelection` widget manages its own internal state; call `handleContinue()` via a template ref to validate and emit the result
