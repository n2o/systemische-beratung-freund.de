import { UserCircleIcon } from "@heroicons/react/24/outline"

export function Logo(props) {
  return (
    <span {...props}>
      <div className="flex flex-row">
        <UserCircleIcon className="inline h-6 pr-1 text-primary" />
        <span className="align-middle">
          Praxis für Systemische Beratung
          <br />
          und -Therapie Lisa Freund
        </span>
      </div>
    </span>
  )
}
