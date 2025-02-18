import clsx from "clsx"

export function LeistungIcon({
  className,
  Icon,
  IconComponent,
}: {
  className?: string
  Icon?: any
  IconComponent?: any
}) {
  return (
    <div
      className={clsx(
        "text-primary-dark flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light",
        className,
      )}
    >
      {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
      {IconComponent && IconComponent}
    </div>
  )
}
