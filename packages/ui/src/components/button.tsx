import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@workspace/ui/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-4 focus-visible:border-foreground aria-invalid:border-destructive aria-invalid:border-4",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground border-4 border-foreground shadow-neobrutal hover:shadow-[8px_8px_0px_0px_oklch(0.1_0_0)] active:shadow-neobrutal-sm',
        destructive:
          'bg-destructive text-white border-4 border-foreground shadow-neobrutal hover:shadow-[8px_8px_0px_0px_oklch(0.1_0_0)] active:shadow-neobrutal-sm',
        outline:
          'border-4 border-foreground bg-background shadow-neobrutal-sm hover:shadow-[6px_6px_0px_0px_oklch(0.1_0_0)] hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground border-4 border-foreground shadow-neobrutal-sm hover:shadow-[6px_6px_0px_0px_oklch(0.1_0_0)] active:shadow-neobrutal-sm',
        ghost: 'border-4 border-transparent hover:border-foreground hover:bg-accent hover:text-accent-foreground shadow-neobrutal-sm hover:shadow-[4px_4px_0px_0px_oklch(0.1_0_0)]',
        link: 'text-primary underline-offset-4 hover:underline border-4 border-transparent',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-none gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-none px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
