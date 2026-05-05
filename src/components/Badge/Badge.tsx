import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-xs py-[2px] text-xs font-semibold transition-colors duration-base focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:     'border-transparent bg-brand text-text-on-brand hover:bg-brand/80',
        secondary:   'border-transparent bg-surface-raised text-text hover:bg-surface-raised/80',
        destructive: 'border-transparent bg-danger text-text-on-brand hover:bg-danger/80',
        outline:     'border-border text-text',
        success:     'border-transparent bg-success text-text-on-brand hover:bg-success/80',
        warning:     'border-transparent bg-warning text-text hover:bg-warning/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
