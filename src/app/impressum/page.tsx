import { Container } from "@/components/Container"
import { PageHeader } from "@/components/Headings"
import { mailto, site, pages } from "@/config/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: pages.impressum.label,
  description: `Impressum der ${site.name} in ${site.address.city} mit Anschrift, Telefon, E-Mail und Hinweisen zur Streitbeilegung.`,
  path: pages.impressum.href,
})

export default function Impressum() {
  return (
    <>
      <PageHeader title={pages.impressum.label} />
      <Container>
        <div className="prose prose-fir max-w-prose pb-8">
          <p>
            {site.owner}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: <a href={site.phone.href}>{site.phone.display}</a>
            <br />
            E-Mail: <a href={mailto}>{site.email}</a>
          </p>

          <h2>
            Verbraucher&shy;streit&shy;beilegung /
            Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <p>
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              e-recht24.de
            </a>
          </p>
        </div>
      </Container>
    </>
  )
}
