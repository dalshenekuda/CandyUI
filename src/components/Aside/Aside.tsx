import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const Aside = DialogPrimitive.Root

const AsideTrigger = DialogPrimitive.Trigger

const AsidePortal = DialogPrimitive.Portal

const AsideClose = DialogPrimitive.Close

const AsideOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
))
AsideOverlay.displayName = DialogPrimitive.Overlay.displayName

const asideContentVariants = cva(
  'fixed z-50 flex h-full flex-col border-border bg-surface shadow-lift duration-base data-[state=open]:animate-in data-[state=closed]:animate-out',
  {
    variants: {
      side: {
        right:
          'inset-y-0 right-0 w-full max-w-[min(400px,100vw)] border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
        left:
          'inset-y-0 left-0 w-full max-w-[min(400px,100vw)] border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

export interface AsideContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof asideContentVariants> {}

const AsideContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  AsideContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <AsidePortal>
    <AsideOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(asideContentVariants({ side }), className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </AsidePortal>
))
AsideContent.displayName = DialogPrimitive.Content.displayName

const AsideHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex h-16 shrink-0 items-center justify-between gap-sm border-b border-border px-md',
      className,
    )}
    {...props}
  />
)
AsideHeader.displayName = 'AsideHeader'

const AsideBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex-1 overflow-y-auto p-md', className)}
    {...props}
  />
)
AsideBody.displayName = 'AsideBody'

const AsideFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'shrink-0 border-t border-border p-md',
      className,
    )}
    {...props}
  />
)
AsideFooter.displayName = 'AsideFooter'

const AsideTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight text-text', className)}
    {...props}
  />
))
AsideTitle.displayName = DialogPrimitive.Title.displayName

const AsideDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-text-muted', className)}
    {...props}
  />
))
AsideDescription.displayName = DialogPrimitive.Description.displayName

const AsideCloseButton = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(
      'rounded-sm text-text-muted opacity-70 transition-opacity duration-base hover:opacity-100 hover:text-text focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:pointer-events-none',
      className,
    )}
    {...props}
  >
    <X className="h-4 w-4" />
    <span className="sr-only">Close</span>
  </DialogPrimitive.Close>
))
AsideCloseButton.displayName = 'AsideCloseButton'

export {
  Aside,
  AsidePortal,
  AsideOverlay,
  AsideTrigger,
  AsideClose,
  AsideContent,
  AsideHeader,
  AsideBody,
  AsideFooter,
  AsideTitle,
  AsideDescription,
  AsideCloseButton,
}
