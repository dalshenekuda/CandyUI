# AI Coding Guide — @boaideas/ui-kit

This file helps AI assistants (Claude, Copilot, etc.) understand the project structure and conventions so they can contribute correctly.

---

## What this project is

A UI kit published as `@boaideas/ui-kit`. The project currently contains both **Vue 3** legacy components and **React** new components. New components are written in React; existing Vue components remain in place.

**React stack:** React + TypeScript + Tailwind CSS + Radix UI (via shadcn) + CVA + `cn()` (clsx + tailwind-merge).
**Vue stack (legacy):** Vue 3 + TypeScript + SCSS + Tailwind CSS.

---

## Architecture — token flow

Every value traces back to a single source file. Understand this chain and you understand the whole project.

```
src/tokens/palette.css             ← hex values live here ONLY (--palette-*)
src/tokens/theme-light.css         ← semantic tokens for light theme (--color-*)
src/tokens/theme-dark.css          ← semantic tokens for dark theme (.dark { --color-* })
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
├── lib/
│   └── utils.ts                ← cn() helper (clsx + tailwind-merge)
├── tokens/
│   ├── palette.css             ← raw hex values (--palette-*)
│   ├── theme-light.css         ← semantic roles, light theme (--color-*)
│   ├── theme-dark.css          ← semantic roles, dark theme (.dark { --color-* })
│   ├── spacing.css             ← spacing scale (--spacing-*)
│   └── base.css                ← radius, shadows, transitions
│
├── components/                 ← React components (new, flat structure)
│   └── <ComponentName>/
│       ├── <ComponentName>.tsx        ← component + inline types
│       └── <ComponentName>.stories.ts ← Storybook stories
│
├── primitives/                 ← Vue primitives (legacy, keep as-is)
│   └── <ComponentName>/
│       ├── <ComponentName>.vue
│       ├── types.ts            ← Mandatory (Vue convention)
│       ├── index.ts            ← Mandatory (barrel export)
│       └── <ComponentName>.stories.ts
│
├── patterns/                   ← Complex Vue components (legacy)
│
├── domain-level/               ← Business-logic Vue components (legacy)
│
└── styles/                     ← Global CSS entry
```

---

## Key conventions

### React Component Structure (new components in `src/components/`)
```
src/components/<ComponentName>/
  <ComponentName>.tsx           ← component logic + inline types (no separate types.ts)
  <ComponentName>.stories.ts    ← Storybook stories
```
- Types live inline in the `.tsx` file. Add a separate `types.ts` only if types are exported for consumers.
- Use `cn()` from `@/lib/utils` for class merging.
- Use CVA (`cva` from `class-variance-authority`) for variant logic.
- All Tailwind classes must use token-mapped utilities — **never** shadcn defaults (`bg-primary`, `bg-background`, etc.).

**shadcn → our tokens mapping:**
| shadcn class | our class |
|---|---|
| `bg-primary` | `bg-brand` |
| `text-primary-foreground` | `text-text-on-brand` |
| `bg-destructive` | `bg-danger` |
| `bg-background` | `bg-surface` |
| `bg-secondary` | `bg-surface-raised` |
| `text-foreground` | `text-text` |
| `text-muted-foreground` | `text-text-muted` |
| `bg-accent` (hover) | `bg-surface-raised` |
| `text-primary` (link) | `text-brand` |
| `border-input` | `border-border` |
| `ring-ring` | `ring-brand` |
| `fill-muted-foreground` | `fill-text-muted` |
| `fill-muted` | `fill-surface` |

### Vue Component Structure (legacy, `src/primitives/` and `src/patterns/`)
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
