import clsx from "clsx"
import Link from "next/link"

export function Button({ href, className = "", ...props }) {
  return (
    <Link
      href={href}
      className={clsx(
        "rounded-md bg-primary-light px-2.5 py-1.5 text-sm font-semibold text-primary shadow-xs transition ease-in hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
      {...props}
    />
  )
}
