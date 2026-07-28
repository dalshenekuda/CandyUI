import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-xs px-xs py-[2px] typo-meta-sm font-medium transition-colors duration-base focus:outline-none focus:ring-2 focus:ring-accent-alt focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:     'border-transparent bg-brand text-text-on-brand',
        secondary:   'border-transparent bg-surface-sunken text-text',
        destructive: 'border-transparent bg-danger text-text-on-brand',
        outline:     'border border-border text-text',
        success:     'border-transparent bg-success text-text-on-brand',
        warning:     'border-transparent bg-warning text-text',
        sale:        'border-transparent bg-accent text-text-on-brand',
        soldout:     'border border-border-strong bg-transparent text-text-muted',
        new:         'border-transparent bg-accent-alt text-text-on-brand',
        tone:        'border-transparent bg-[var(--tone-accent)] text-[var(--tone-ink)]',
        ink:         'border-transparent bg-text text-bg',
        print:       'border-[length:var(--border-hairline)] border-current bg-transparent text-current',
      },
      rotate: {
        none: '',
        left: '-rotate-2',
        right: 'rotate-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      rotate: 'none',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, rotate, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, rotate }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
