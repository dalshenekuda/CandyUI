/**
 * Design system tokens for Tailwind config.
 * Colors are not here — they come from brand CSS custom properties (brand-variables.scss).
 * Spacing is not here — values live in spacing-variables.scss, exposed as CSS vars, used via var(--spacing-*).
 * Font weights are not here — values live in typography-variables.scss, exposed as CSS vars, used via var(--font-weight-*).
 * Border radius is not here — values live in src/styles/style.css, exposed as CSS vars, used via var(--radius-*).
 * Transitions are not here — values live in src/styles/style.css, exposed as CSS vars, used via var(--transition-*).
 */
export const designTokens = {
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 35, 73, 0.05)',
    md: '0 4px 6px -1px rgba(0, 35, 73, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 35, 73, 0.1)',
  },
} as const;

export type DesignTokens = typeof designTokens;
