import clsx from "clsx"
import Link from "next/link"

const baseStyles = {
  solid:
    "mt-3 inline-flex items-center rounded-full border border-transparent px-3.5 py-2 text-md transition duration-300 font-medium leading-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
  outline:
    "mt-3 inline-flex items-center rounded-full border border-transparent px-3.5 py-2 text-md transition duration-300 font-medium leading-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
}

const variantStyles = {
  solid: {
    accent:
      "text-dark bg-accent hover:bg-primary hover:text-white focus:ring-secondary",
  },
  outline: {
    accent:
      "text-dark border-accent bg-transparent bg-accent hover:bg-primary hover:text-white focus:ring-secondary",
  },
}

export function Button({
  variant = "solid",
  color = "accent",
  className = "",
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
