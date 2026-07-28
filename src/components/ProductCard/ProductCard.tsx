import * as React from 'react'

import { Text } from '@/components/Text/Text'
import { cn } from '@/lib/utils'

export type ProductCardTone =
  | 'blueras'
  | 'raspberry'
  | 'spearmint'
  | 'lemon'
  | 'lime'

export interface ProductCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  imageSrc?: string
  imageAlt: string
  imageLoading?: 'eager' | 'lazy'
  /** cover = fill frame; contain = cutout on tone field */
  fit?: 'cover' | 'contain'
  /** Flavor tone — vars resolve via data-tone-vars; fill on hover/focus (or rest when toneMode="rest") */
  tone?: ProductCardTone | null
  /** hover = transparent rest + tone on group-hover/focus-within; rest = always filled (Storybook) */
  toneMode?: 'hover' | 'rest'
  title: React.ReactNode
  description?: React.ReactNode
  /** Meta line e.g. flavor label */
  meta?: React.ReactNode
  /** Price label on media (top-left); page-colored field, print border on hover */
  price?: React.ReactNode
  compareAtPrice?: React.ReactNode
  badgeTopLeft?: React.ReactNode
  badgeTopRight?: React.ReactNode
  footer?: React.ReactNode
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      className,
      imageSrc,
      imageAlt,
      imageLoading = 'lazy',
      fit = 'cover',
      tone = null,
      toneMode = 'hover',
      title,
      description,
      meta,
      price,
      compareAtPrice,
      badgeTopLeft,
      badgeTopRight,
      footer,
      ...props
    },
    ref,
  ) => {
    const priceSticker = price != null ? (
      <span
        className={cn(
          'inline-flex items-center rounded-xs',
          'border-[length:var(--border-hairline)] border-transparent',
          'bg-bg px-sm py-xs tabular-nums font-semibold',
          'typo-subtitle-lg text-text',
          'transition-all duration-base ease-out-quart',
          'group-hover/card:border-border-strong',
          'group-focus-within/card:border-border-strong',
        )}
      >
        {price}
      </span>
    ) : null

    const topLeftOverlay = priceSticker ?? badgeTopLeft

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex h-full flex-col gap-sm rounded-xs p-sm',
          'bg-transparent text-text',
          'transition-colors duration-base ease-out-quart',
          tone &&
            toneMode === 'hover' && [
              'group-hover/card:bg-tone-bg group-hover/card:text-tone-ink',
              'group-focus-within/card:bg-tone-bg group-focus-within/card:text-tone-ink',
            ],
          tone && toneMode === 'rest' && 'bg-tone-bg text-tone-ink',
          className,
        )}
        {...(tone ? {'data-tone-vars': tone} : {})}
        {...props}
      >
        {topLeftOverlay ? (
          <div className="pointer-events-none absolute left-0 top-0 z-10">
            {topLeftOverlay}
          </div>
        ) : null}
        <div className="relative aspect-square w-full shrink-0 overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className={cn(
                'size-full transition-transform duration-base ease-out-quart group-hover/card:scale-[1.08] group-focus-within/card:scale-[1.08]',
                fit === 'contain' ? 'object-contain p-sm' : 'object-cover',
              )}
              loading={imageLoading}
              decoding="async"
            />
          ) : (
            <div
              className="flex size-full items-center justify-center opacity-60"
              role="img"
              aria-label={imageAlt}
            >
              <Text as="span" variant="body-sm">
                No image
              </Text>
            </div>
          )}
          {badgeTopRight ? (
            <div className="pointer-events-none absolute right-2 top-2 z-10">{badgeTopRight}</div>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col gap-xs text-center">
          <Text
            variant="meta-sm"
            className={cn(
              'line-clamp-1 min-h-[14px] uppercase md:min-h-[15px]',
              meta ? 'opacity-70' : 'opacity-0',
            )}
            aria-hidden={meta == null || meta === '' ? true : undefined}
          >
            {meta != null && meta !== '' ? meta : '\u00a0'}
          </Text>
          <Text variant="heading-md" weight="semibold" className="line-clamp-2">
            {title}
          </Text>
          {compareAtPrice != null ? (
            <Text variant="body-sm" className="tabular-nums line-through opacity-60">
              {compareAtPrice}
            </Text>
          ) : null}
          {description != null ? (
            <Text variant="body-sm" className="line-clamp-2 opacity-70">
              {description}
            </Text>
          ) : null}

          {footer != null ? (
            <div className="mt-auto flex flex-col items-center gap-xs pt-xs">{footer}</div>
          ) : null}
        </div>
      </div>
    )
  },
)
ProductCard.displayName = 'ProductCard'

export { ProductCard }
