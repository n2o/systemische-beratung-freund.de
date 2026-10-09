import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-(length:--stroke) border-transparent font-semibold whitespace-nowrap outline-(length:--stroke) outline-offset-[3px] outline-transparent transition-[outline-color,background-color,color] duration-200 select-none focus-visible:outline-2 focus-visible:outline-fir disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1.15em]",
  {
    variants: {
      // Hover adds a second ring: states change line type, not only colour.
      variant: {
        default: "bg-fir text-paper hover:outline-fir",
        sun: "border-fir bg-sun text-fir hover:outline-fir",
        outline: "border-fir text-fir hover:outline-fir",
        ghost: "text-fir hover:bg-mist",
      },
      size: {
        default: "h-11 px-5 text-base",
        lg: "h-13 px-6 text-lg",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

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
