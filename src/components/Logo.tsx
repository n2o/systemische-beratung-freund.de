import { UserCircleIcon } from "@heroicons/react/24/outline"

export function Logo(props) {
  return (
    <span {...props}>
      <UserCircleIcon className="inline h-6 pr-1 text-primary" />
      <span className="align-middle">Systemische Beratung Freund</span>
    </span>
  )
}
