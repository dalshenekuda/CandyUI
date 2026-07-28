import * as React from 'react'

import { Button } from '@/components/Button/Button'
import { cn } from '@/lib/utils'

export type AddToCartStepperVariant = 'default' | 'compact' | 'compact-pill'

export interface AddToCartStepperProps {
  quantity: number
  onAdd?: () => void
  onIncrease?: () => void
  onDecrease?: () => void
  addButton?: React.ReactNode
  decreaseButton?: React.ReactNode
  increaseButton?: React.ReactNode
  disabled?: boolean
  loading?: boolean
  addLabel?: string
  size?: 'sm' | 'default' | 'lg'
  variant?: AddToCartStepperVariant
  className?: string
}

type StepperSize = NonNullable<AddToCartStepperProps['size']>

const SIZE_CONFIG: Record<
  StepperSize,
  {
    height: string
    iconWidth: string
    maxWidth: string
    qtyText: string
    glyphText: string
  }
> = {
  sm: {
    height: 'h-9',
    iconWidth: 'w-9 min-w-9',
    maxWidth: 'max-w-[12rem]',
    qtyText: 'text-sm',
    glyphText: 'text-sm',
  },
  default: {
    height: 'h-11',
    iconWidth: 'w-11 min-w-11',
    maxWidth: 'max-w-[14rem]',
    qtyText: 'text-base',
    glyphText: 'text-base',
  },
  lg: {
    height: 'h-11',
    iconWidth: 'w-11 min-w-11',
    maxWidth: 'max-w-[16rem]',
    qtyText: 'text-base',
    glyphText: 'text-base',
  },
}

const COMPACT_PILL = {
  height: 'h-8',
  iconWidth: 'w-8 min-w-8',
  qtyText: 'text-sm',
  glyphText: 'text-sm',
} as const

const SEGMENT_BASE =
  'flex shrink-0 items-center justify-center self-stretch leading-none'

function SegmentedControl({
  children,
  className,
  variant,
  height,
}: {
  children: React.ReactNode
  className?: string
  variant: AddToCartStepperVariant
  height: string
}) {
  return (
    <div
      className={cn(
        'inline-flex items-stretch overflow-hidden bg-surface border-[length:var(--border-print)] border-border-strong',
        variant === 'compact' && 'h-8 rounded-md',
        variant === 'compact-pill' && 'h-8 rounded-full',
        variant === 'default' && cn(height, 'rounded-full'),
        className,
      )}
      role="group"
    >
      {children}
    </div>
  )
}

function SegmentedButton({
  children,
  className,
  compactSized,
  iconWidth,
  glyphText,
  ...props
}: React.ComponentProps<typeof Button> & {
  compactSized?: boolean
  iconWidth: string
  glyphText: string
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        SEGMENT_BASE,
        'h-full rounded-none border-0 p-0 font-semibold text-text shadow-none hover:bg-surface-sunken hover:text-text active:translate-y-0 active:shadow-none [&]:leading-none',
        compactSized ? COMPACT_PILL.iconWidth : iconWidth,
        compactSized ? COMPACT_PILL.glyphText : glyphText,
        className,
      )}
      {...props}
    >
      <span aria-hidden className="leading-none">
        {children}
      </span>
    </Button>
  )
}

function QuantityDisplay({
  quantity,
  compactSized,
  loading,
  qtyText,
}: {
  quantity: number
  compactSized?: boolean
  loading?: boolean
  qtyText: string
}) {
  const [displayQty, setDisplayQty] = React.useState(quantity)
  const [animating, setAnimating] = React.useState(false)

  React.useEffect(() => {
    if (quantity !== displayQty) {
      setAnimating(true)
      setDisplayQty(quantity)
      const t = window.setTimeout(() => setAnimating(false), 220)
      return () => window.clearTimeout(t)
    }
  }, [quantity, displayQty])

  return (
    <span
      aria-live="polite"
      className={cn(
        SEGMENT_BASE,
        'min-w-[2.5ch] flex-1 border-x border-border px-xs tabular-nums font-semibold text-text transition-transform duration-base',
        compactSized ? COMPACT_PILL.qtyText : qtyText,
        animating && 'scale-110 ease-spring',
        loading && 'opacity-60',
      )}
    >
      {displayQty}
    </span>
  )
}

export function AddToCartStepper({
  quantity,
  onAdd,
  onIncrease,
  onDecrease,
  addButton,
  decreaseButton,
  increaseButton,
  disabled = false,
  loading = false,
  addLabel,
  size = 'default',
  variant = 'default',
  className,
}: AddToCartStepperProps) {
  const isDisabled = disabled || loading
  const isCompactVariant = variant === 'compact' || variant === 'compact-pill'
  const resolvedAddLabel = addLabel ?? (isCompactVariant ? 'Add' : 'Add to cart')
  const addButtonSize = isCompactVariant ? 'sm' : 'pill'
  const config = SIZE_CONFIG[size]
  const controlWidth = cn('w-full', config.maxWidth)
  const displayHeight =
    variant === 'compact-pill' ? COMPACT_PILL.height : config.height
  const displayQtyText =
    variant === 'compact-pill' ? COMPACT_PILL.qtyText : config.qtyText
  const displayGlyphText =
    variant === 'compact-pill' ? COMPACT_PILL.glyphText : config.glyphText
  const displayIconWidth =
    variant === 'compact-pill' ? COMPACT_PILL.iconWidth : config.iconWidth

  if (quantity === 0) {
    return (
      <div className={cn('flex w-full', className)}>
        {addButton ?? (
          <Button
            type="button"
            variant={isCompactVariant ? 'outline' : 'cart'}
            size={addButtonSize}
            className={cn(
              isCompactVariant
                ? 'h-8 w-full px-sm typo-button-sm'
                : cn(controlWidth, config.height, 'rounded-full'),
            )}
            disabled={isDisabled}
            loading={loading}
            onClick={onAdd}
          >
            {resolvedAddLabel}
          </Button>
        )}
      </div>
    )
  }

  return (
    <SegmentedControl
      variant={variant}
      height={displayHeight}
      className={cn(
        isCompactVariant ? 'w-fit max-w-full' : controlWidth,
        className,
      )}
    >
      {decreaseButton ?? (
        <SegmentedButton
          compactSized={isCompactVariant}
          iconWidth={displayIconWidth}
          glyphText={displayGlyphText}
          disabled={isDisabled}
          aria-label="Decrease quantity"
          onClick={onDecrease}
        >
          −
        </SegmentedButton>
      )}
      <QuantityDisplay
        quantity={quantity}
        compactSized={isCompactVariant}
        loading={loading}
        qtyText={displayQtyText}
      />
      {increaseButton ?? (
        <SegmentedButton
          compactSized={isCompactVariant}
          iconWidth={displayIconWidth}
          glyphText={displayGlyphText}
          disabled={isDisabled}
          aria-label="Increase quantity"
          onClick={onIncrease}
        >
          +
        </SegmentedButton>
      )}
    </SegmentedControl>
  )
}
