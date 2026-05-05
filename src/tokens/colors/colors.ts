/**
 * Valid semantic color token names from src/tokens/theme-light.css and theme-dark.css.
 * Use as: style.color = `var(--${color})` or color prop on Text component.
 * No hex values here — colors resolve at runtime via CSS custom properties.
 */
export type TextColor =
  | 'color-text'
  | 'color-text-muted'
  | 'color-text-subtle'
  | 'color-text-on-brand'
  | 'color-brand'
  | 'color-brand-dark'
  | 'color-brand-light'
  | 'color-accent'
  | 'color-accent-dark'
  | 'color-accent-light'
  | 'color-accent-warm'
  | 'color-danger'
  | 'color-success'
  | 'color-warning';
