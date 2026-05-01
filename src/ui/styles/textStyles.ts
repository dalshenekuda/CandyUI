/**
 * Maps Text component variants to the SCSS typography classes defined in
 * typography-classes.scss (which are responsive via typography-mixins.scss).
 */
export const textVariantClasses = {
  h1: 'typo-h1',
  h2: 'typo-h2',
  h3: 'typo-h3',
  h4: 'typo-h4',
  s1: 'typo-s1',
  s2: 'typo-s2',
  b1: 'typo-b1',
  b2: 'typo-b2',
  body: 'typo-b2',
  b3: 'typo-b3',
  caption: 'typo-c1',
  caption2: 'typo-c2',
  credit: 'typo-credit',
} as const;

export type TextVariant = keyof typeof textVariantClasses;

export const textVariantDefaultTag: Record<TextVariant, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  s1: 'p',
  s2: 'p',
  b1: 'p',
  b2: 'p',
  body: 'p',
  b3: 'p',
  caption: 'span',
  caption2: 'span',
  credit: 'span',
};
