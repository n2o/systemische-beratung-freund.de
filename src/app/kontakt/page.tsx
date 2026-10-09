import { ContactActions, PracticeAddress } from "@/components/ContactActions"
import { Container } from "@/components/Container"
import { PageHeader } from "@/components/Headings"
import { site, pages } from "@/config/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: pages.kontakt.label,
  description: `Kontakt zur ${site.name} in ${site.address.city}: telefonisch, per SMS oder E-Mail. Das Informationsgespräch ist kostenfrei.`,
  path: pages.kontakt.href,
})

export default function Page() {
  return (
    <>
      <PageHeader title={pages.kontakt.label}>
        Ich freue mich auf Ihre Kontaktaufnahme. Bitte nutzen Sie eine der
        folgenden Möglichkeiten, um mit mir in Verbindung zu treten. Ich werde
        mich so schnell wie möglich bei Ihnen melden.
      </PageHeader>
      <section aria-label="Kontaktmöglichkeiten" className="pb-20 md:pb-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <ContactActions />
          <PracticeAddress
            className="hairline-t pt-6 lg:border-t-0 lg:hairline-l lg:pt-0 lg:pl-12"
            linkClassName="link-fir"
          >
            {/* The one relationship this page is about: you and me. */}
            <svg
              viewBox="0 0 220 60"
              aria-hidden="true"
              className="stroke-system mb-6 w-52"
              fill="none"
            >
              <circle cx="30" cy="30" r="27" className="stroke-fir" />
              <circle cx="30" cy="30" r="21" className="fill-sun stroke-fir" />
              <path
                d="M64 30H162"
                className="draw-in stroke-fir"
                pathLength={1}
              />
              <circle
                cx="190"
                cy="30"
                r="25"
                className="fill-paper stroke-fir"
              />
              {[
                [30, "Sie"],
                [190, site.owner.split(" ")[0]],
              ].map(([x, label]) => (
                <text
                  key={label}
                  x={x}
                  y="35"
                  textAnchor="middle"
                  fontSize="14"
                  className="fill-fir stroke-none font-bold"
                >
                  {label}
                </text>
              ))}
            </svg>
          </PracticeAddress>
        </Container>
      </section>
    </>
  )
}
