import { Container } from "@/components/Container"
import { PageHeader } from "@/components/Headings"
import { ServiceSection } from "@/components/Leistungen"
import { LeistungenNavigation } from "@/components/LeistungenNavigation"
import { services, site, pages } from "@/config/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: pages.leistungen.label,
  description: `Systemische Beratung und Therapie in ${site.address.city}: Einzel-, Paar-, Familien- und Teamberatung, Wiedereingliederung nach stationärem Aufenthalt und tiergestützte Arbeit.`,
  path: pages.leistungen.href,
})

export default function Page() {
  return (
    <>
      <PageHeader title={pages.leistungen.label}>
        <blockquote>
          <p>
            „Wenn etwas trotz vieler Anstrengungen nicht gut genug funktioniert
            und passt – dann höre auf damit und versuche etwas anderes.“
          </p>
          <cite className="mt-2 block not-italic">Steve de Shazer</cite>
        </blockquote>
      </PageHeader>
      <div className="bg-mist py-6">
        <Container>
          <LeistungenNavigation />
        </Container>
      </div>
      {services.map((s) => (
        <ServiceSection key={s.id} id={s.id} />
      ))}
    </>
  )
}
