# AI Coding Guide — @boaideas/ui-kit

This file helps AI assistants (Claude, Copilot, etc.) understand the project structure and conventions so they can contribute correctly.

---

## What this project is

A Vue 3 component library published as `@boaideas/ui-kit`. It builds to `build/ui-kit.js` + `build/style.css` and is consumed by external Vue apps.

---

## Architecture — token flow

Every value traces back to a single source file. Understand this chain and you understand the whole project.

```
src/brand-variables.scss          ← hex values live here ONLY
  └─→ :root { --primary-color-1: #002349 ... }
        ├─→ Vue components         (var(--primary-color-1) in <style>)
        ├─→ Tailwind config        ('primary': 'var(--primary-color-1)')
        └─→ Text component props   (style.color = `var(--${props.color})`)

src/typography-variables.scss     ← all font sizes and weights live here
  └─→ :root { --font-weight-semibold: 600 ... }
        ├─→ Tailwind config        ('semibold': 'var(--font-weight-semibold)')
        └─→ any component          (var(--font-weight-semibold) in CSS)
  └─→ typography-mixins.scss      (responsive @mixin typo-h1 etc.)
        ├─→ typography-classes.scss  (standalone .typo-h1 CSS classes)
        └─→ Text.vue <style>         (@include typo-h1 per variant)

src/spacing-variables.scss        ← all spacing values live here
  └─→ :root { --spacing-m: 24px ... }
        ├─→ Tailwind config        ('m': 'var(--spacing-m)')
        └─→ any component          (var(--spacing-m) in CSS)

src/styles/style.css              ← border radius + transitions live here
  └─→ :root { --radius-md: 12px, --transition-base: 200ms ... }
        ├─→ Tailwind config        ('md': 'var(--radius-md)')
        └─→ any component          (var(--radius-md) in CSS)
```

**Rule: never hardcode a hex color, font size, spacing, radius, or transition value anywhere except the source files above.**

---

## File structure

```
src/
├── index.ts                    ← library entry; exports all components and types
├── main.ts                     ← dev-only app entry
├── types.ts                    ← global shared interfaces
├── brand-variables.scss        ← colors source of truth
├── spacing-variables.scss      ← spacing source of truth
├── typography-variables.scss   ← font sizes/weights source of truth
│
├── composables/                ← shared UI logic (useToggle, etc.)
│
├── design-system/              ← Storybook-only documentation pages
│   └── tokens/                 ← design token shadow objects for Tailwind
│
├── primitives/                 ← Simple UI atoms (Button, Tag, ContentPlate)
│   └── <ComponentName>/
│       ├── <ComponentName>.vue
│       ├── types.ts            ← Mandatory
│       ├── index.ts            ← Mandatory (barrel export)
│       └── <ComponentName>.stories.ts
│
├── patterns/                   ← Complex Reka UI components (Modal, Tooltip)
│
├── domain-level/               ← Business-logic components
│   ├── entity/                 ← Domain atoms (product, subscription)
│   ├── features/               ← Logic-heavy features (filterBy)
│   ├── utils/                  ← Business utils (money.ts)
│   └── widgets/                ← Composite UI (CylinderSelection, PriceBlock)
│
├── ui/                         ← Internal UI framework
│   ├── tokens/                 ← Type definitions for tokens
│   └── components/             ← Polymorphic <Text> component
│
└── styles/                     ← Tailwind entry and global CSS (radius, transitions)
```

---

## Key conventions

### Mandatory Component Structure
Every component MUST reside in its own directory:
```
path/to/<ComponentName>/
  <ComponentName>.vue        ← logic and template
  types.ts                  ← prop/emit interfaces (MANDATORY)
  index.ts                  ← clean exports (MANDATORY)
  <ComponentName>.stories.ts ← documentation (MANDATORY)
```
- **Aliases:** ALWAYS use `@/` alias for all imports (e.g., `@/domain-level/types`). NEVER use relative paths.
- **index.ts:** Must export component as default or named, plus all types.

### Styling rules
- **No Bootstrap:** NEVER use `d-flex`, `col-*`, etc. Use Tailwind.
- **Colors**: always `var(--primary-color-1)` — never `#002349`
- **Spacing**: always `var(--spacing-m)` or Tailwind `p-m` — never `16px`
- **Font sizes**: always use the SCSS mixins (`@include typo-b2`) — never `font-size: 16px`
- **Desktop Breakpoint:** Use `desktop:` prefix (992px+). Default is mobile.

### Storybook & Documentation (Mandatory)
- Every component MUST have `argTypes` categorized (Data, Appearance, State, Emits, Slots).
- Use `parameters.docs.description.component` for high-level docs.

### Language & Comments
- ALL code comments MUST be in English.

### Money & Text
- **Money:** ALWAYS use `moneyDisplay` from `@/domain-level/utils/money`.
- **Text:** ALWAYS use `<Text>` primitive. Never use raw `<span>` or `<p>` for UI text.

### Text component — how it works
- `variant` → adds CSS class `ui-text--{variant}` which applies the responsive mixin
- `color` → inline style `color: var(--{color})` — resolves to brand CSS var at runtime
- `weight` → inline style `font-weight: var(--font-weight-{weight})`
- `as` → overrides the rendered HTML tag (defaults are semantic: h1→`<h1>`, body→`<p>`)

---

## What's exported to consuming projects

```ts
// UI primitives & patterns
import { Text, Button, ActionButton, SelectButton, Modal, Tooltip,
         DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
         Tag, Divider } from '@boaideas/ui-kit';

// ActionButton is an alias for Button (same component, kept for backwards compatibility)

// Domain-level components
import { CylinderCard, CylinderQuantityCard, CylinderTypeSelector, FrequencySelector,
         CylinderSelection, ProgressBar } from '@boaideas/ui-kit';

// Types
import type { TextVariant, TextColor, SpacingToken, FontWeight, ButtonProps } from '@boaideas/ui-kit';

// CSS (must import once in app entry)
import '@boaideas/ui-kit/style.css';
```

Raw token objects (`designTokens`) are **not intended for consumers** — consuming projects use CSS vars, not JS values.

---

## Build & dev commands

```bash
npm run build        # produces build/ui-kit.js + build/style.css + types/
npm run storybook    # component explorer at localhost:6006
npm run format       # Prettier (auto-fix)
npm run format:check # Prettier (CI check)
npm run lint         # ESLint
npm run test:run     # Vitest
```

---

## What NOT to do

- Do not hardcode hex colors, px sizes, or ms values in component `<style>` blocks — use CSS vars or SCSS mixins
- Do not add font sizes directly in component CSS — use `@include typo-*` mixins
- Do not add new color/spacing/weight tokens to `design-tokens.ts` — they live in SCSS source files only
- Do not add radius or transition values to `design-tokens.ts` — they live in `src/styles/style.css`
- Do not add `reka-ui` back to `peerDependencies` — it is intentionally bundled
- Do not create a new token object in `ui/tokens/` with actual values — keep them as types only
