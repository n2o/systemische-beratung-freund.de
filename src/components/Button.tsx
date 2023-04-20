import clsx from "clsx"
import Link from "next/link"

export function Button({ href, className = "", ...props }) {
  return (
    <Link
      href={href}
      className={clsx(
        "rounded-md bg-primary-dark px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm transition ease-in hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark",
        className
      )}
      {...props}
    />
  )
}
