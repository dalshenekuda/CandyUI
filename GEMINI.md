# Gemini CLI Mandates — @boaideas/ui-kit

You MUST strictly adhere to the rules defined in `.cursor/rules/new-component.mdc` when creating or modifying components. These rules are foundational and take absolute precedence.

## Critical Mandates:

1.  **Folder Structure:** Every component MUST have its own directory with `ComponentName.vue`, `types.ts`, and `index.ts`.
2.  **Aliases:** ALWAYS use `@/` alias for all imports. Never use relative paths like `../../`.
3.  **Styling:** 
    - NEVER use Bootstrap classes.
    - NEVER hardcode hex colors, px sizes, or font-sizes.
    - Use Tailwind for layout, SCSS mixins (`@include typo-*`) for typography.
4.  **Storybook:** Every component MUST have a `.stories.ts` with full documentation (description, categories in `argTypes`).
5.  **Money:** ALWAYS use `moneyDisplay` utility for currency formatting.
6.  **Text Component:** ALWAYS use `<Text>` primitive for any text rendering.
7.  **Language:** ALL code comments MUST be in English.

Refer to `.cursor/rules/new-component.mdc` for the full specification.

## Documentation Note:
- `UI_KIT_CONSUMER_GUIDE.md` is a reference document for consumers. It SHOULD NOT be subject to automatic code checks or forced synchronization unless explicitly requested by the user.
