/**
 * Font weight token names — match --font-weight-* CSS custom properties
 * defined in src/tokens/typography-variables.scss.
 * Usage: style.fontWeight = `var(--font-weight-${weight})`
 */
export type FontWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'black';
