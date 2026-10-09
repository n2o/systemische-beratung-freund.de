import { keepTogether } from "@/lib/utils"
import { ServiceIcon } from "@/components/ServiceGlyph"
import { Button } from "@/components/ui/button"
import { serviceHref, services } from "@/config/site"

export function LeistungenNavigation() {
  return (
    <nav aria-label="Leistungen auf dieser Seite">
      <ul className="flex flex-wrap gap-3">
        {services.map((s) => (
          <li key={s.id}>
            <Button asChild variant="outline">
              <a href={serviceHref(s.id)}>
                <ServiceIcon id={s.id} className="size-6" />
                {keepTogether(s.name)}
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
