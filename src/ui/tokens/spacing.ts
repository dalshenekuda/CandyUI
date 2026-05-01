/**
 * Spacing token names — match $spacing-* in spacing-variables.scss.
 * Values resolve at runtime via var(--spacing-{name}).
 */
export type SpacingToken = 'none' | 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
