/**
 * Spacing token names — match --spacing-* CSS custom properties
 * defined in src/tokens/spacing.css.
 * Usage: style.padding = `var(--spacing-${token})`
 */
export type SpacingToken =
  | 'none'
  | 'px'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';
