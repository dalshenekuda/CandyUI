import * as React from 'react'

import { Card } from '@/components/Card/Card'
import { Text } from '@/components/Text/Text'
import { cn } from '@/lib/utils'

export interface ProductCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Image URL displayed in the square media area */
  imageSrc?: string
  /** Accessible label for the product image */
  imageAlt: string
  /** Native loading strategy for the product image */
  imageLoading?: 'eager' | 'lazy'
  /** Product name */
  title: React.ReactNode
  /** Secondary line under the title */
  description?: React.ReactNode
  /** Price or custom markup shown above the footer slot */
  price?: React.ReactNode
  /** Actions or supplementary content below the title block */
  footer?: React.ReactNode
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      className,
      imageSrc,
      imageAlt,
      imageLoading = 'lazy',
      title,
      description,
      price,
      footer,
      ...props
    },
    ref,
  ) => (
    <Card
      ref={ref}
      className={cn(
        'flex h-full flex-col overflow-hidden p-0 shadow-md',
        className,
      )}
      {...props}
    >
      <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-surface-raised">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="size-full object-cover"
            loading={imageLoading}
            decoding="async"
          />
        ) : (
          <div
            className="flex size-full items-center justify-center"
            role="img"
            aria-label={imageAlt}
          >
            <Text as="span" variant="body-sm" color="color-text-muted">
              No image
            </Text>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-sm p-md">
        <div className="flex flex-1 flex-col gap-xs">
          <Text variant="heading-lg" weight="semibold">
            {title}
          </Text>
          {description != null ? (
            <Text
              variant="heading-md"
              color="color-text-muted"
              className="line-clamp-3"
            >
              {description}
            </Text>
          ) : null}
          {price != null ? (
            <Text variant="heading-md" color="color-accent" weight="semibold">
              {price}
            </Text>
          ) : null}
        </div>
        {footer != null ? <div className="mt-auto pt-xs">{footer}</div> : null}
      </div>
    </Card>
  ),
)
ProductCard.displayName = 'ProductCard'

export { ProductCard }
