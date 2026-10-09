import { keepTogether } from "@/lib/utils"
import { ServiceIcon } from "@/components/ServiceGlyph"
import { serviceHref, services } from "@/config/site"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

// Stacked form of the system diagram, used below lg and on the overview.
export function ServiceList() {
  return (
    <ul className="relative grid gap-x-12 md:grid-cols-2">
      {services.map((s) => (
        <li key={s.id} className="hairline-b">
          <Link
            href={serviceHref(s.id)}
            className="group flex items-center gap-5 py-6 outline-offset-4"
          >
            <ServiceIcon id={s.id} className="size-14 shrink-0 text-fir" />
            <span className="flex-1">
              <span className="block text-xl font-semibold text-fir underline decoration-transparent decoration-(length:--stroke) underline-offset-4 group-hover:decoration-current group-hover:decoration-double">
                {keepTogether(s.name)}
              </span>
              <span className="text-muted-foreground">{s.heading}</span>
            </span>
            <ArrowRightIcon
              aria-hidden="true"
              className="size-5 shrink-0 text-fir transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
