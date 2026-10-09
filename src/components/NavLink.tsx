"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Hover = single underline, current page = double: states change line type.
export function NavLink({
  className,
  ...props
}: React.ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname()
  return (
    <Link
      aria-current={pathname.startsWith(props.href) ? "page" : undefined}
      className={cn(
        "underline decoration-transparent underline-offset-[0.4em] transition-colors hover:decoration-current aria-[current=page]:decoration-current aria-[current=page]:decoration-double",
        className,
      )}
      {...props}
    />
  )
}
