import * as React from 'react'

import { cn } from '@/lib/utils'

export type TextVariant =
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'subtitle-lg'
  | 'subtitle-md'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'caption-md'
  | 'caption-sm'
  | 'overline'

export type FontWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'black'

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
  | 'color-warning'

const defaultTag: Record<TextVariant, React.ElementType> = {
  'heading-xl':  'h1',
  'heading-lg':  'h2',
  'heading-md':  'h3',
  'heading-sm':  'h4',
  'subtitle-lg': 'p',
  'subtitle-md': 'p',
  'body-lg':     'p',
  'body-md':     'p',
  'body-sm':     'p',
  'caption-md':  'span',
  'caption-sm':  'span',
  overline:      'span',
}

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant
  as?: React.ElementType
  weight?: FontWeight
  color?: TextColor
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ variant = 'body-md', as, weight, color, className, style, children, ...props }, ref) => {
    const Tag = as ?? defaultTag[variant]

    const overrideStyle: React.CSSProperties = {
      ...(weight ? { fontWeight: `var(--font-weight-${weight})` } : {}),
      ...(color  ? { color: `var(--${color})` } : {}),
      ...style,
    }

    return (
      <Tag
        ref={ref}
        className={cn(`typo-${variant}`, className)}
        style={overrideStyle}
        {...props}
      >
        {children}
      </Tag>
    )
  },
)
Text.displayName = 'Text'

export { Text }
