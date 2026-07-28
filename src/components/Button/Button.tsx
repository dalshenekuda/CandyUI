import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md typo-button-md font-semibold transition-all duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-alt focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'border-[length:var(--border-print)] border-border-strong bg-brand text-text-on-brand shadow-press hover:bg-brand-hover active:translate-y-[2px] active:shadow-none',
        destructive:
          'border-[length:var(--border-print)] border-danger bg-danger text-text-on-brand shadow-press hover:opacity-90 active:translate-y-[2px] active:shadow-none',
        outline:
          'border-[length:var(--border-print)] border-border-strong bg-surface text-text shadow-press hover:bg-surface-sunken active:translate-y-[2px] active:shadow-none',
        secondary:
          'border border-border bg-surface-raised text-text hover:bg-surface-sunken',
        ghost:
          'hover:bg-surface-sunken text-text-muted hover:text-text',
        link:
          'text-accent-alt underline-offset-4 hover:underline',
        tone:
          'border-[length:var(--border-print)] border-[var(--tone-border)] bg-[var(--tone-accent)] text-[var(--tone-ink)] shadow-press hover:opacity-90 active:translate-y-[2px] active:shadow-none',
        cart:
          'rounded-full border-0 bg-accent text-text-on-brand shadow-none hover:bg-accent-alt hover:text-text-on-brand active:translate-y-0 active:shadow-none dark:bg-accent-alt dark:hover:bg-accent dark:hover:text-text-on-brand',
      },
      size: {
        default: 'h-10 px-md py-sm',
        sm:      'h-9 rounded-md px-sm',
        lg:      'h-11 rounded-md px-lg',
        xl:      'h-14 rounded-md px-xl typo-button-lg',
        icon:    'h-10 w-10',
        pill:    'h-12 rounded-full px-xl typo-button-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <>
            <span
              className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              aria-hidden
            />
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
