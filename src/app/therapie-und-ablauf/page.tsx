import { ContactActions } from "@/components/ContactActions"
import { Container } from "@/components/Container"
import { PageHeader } from "@/components/Headings"
import { PhaseSteps } from "@/components/PhaseSteps"
import { pages, servicePrice, site } from "@/config/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: pages.ablauf.label,
  description: `So läuft die systemische Therapie in ${site.address.city} ab: kostenfreies Informationsgespräch, Entscheidung, Sitzungen in Praxis, bei Ihnen zu Hause oder in Bewegung.`,
  path: pages.ablauf.href,
})

const einzel = servicePrice("einzelberatung")
const paar = servicePrice("paarberatung")
const familie = servicePrice("familienberatung")

export default function Page() {
  return (
    <>
      <PageHeader title={pages.ablauf.label} />
      <section aria-labelledby="phasen" className="pb-16 md:pb-20">
        <Container>
          <h2 id="phasen" className="sr-only">
            Die vier Phasen
          </h2>
          <PhaseSteps />
        </Container>
      </section>
      <section className="hairline-t section-y">
        <Container>
          <div className="max-w-prose space-y-4 text-lg">
            <p>
              Kontaktieren Sie mich gern telefonisch, per SMS oder E-Mail für
              einen Termin zum Informationsgespräch.
            </p>
            <p>
              In diesem Erstkontakt lernen wir einander zunächst kennen. Sie
              haben die Möglichkeit einen ersten Einblick von mir und meiner
              Arbeitsweise als Therapeutin zu gewinnen, während ich einen
              Eindruck erhalte, was Sie thematisch zu mir führt, sowie welche
              Vorstellungen und Ziele Sie im Hinblick auf Therapie und Beratung
              verfolgen.
            </p>
            <p>
              Im Anschluss treffen Sie die Entscheidung, ob Sie sich eine
              Zusammenarbeit mit mir vorstellen können. Ich prüfe derweil, ob
              ich Ihren Therapieauftrag annehmen kann.
            </p>
            <p>
              Einzelsitzungen dauern in der Regel {einzel.unit}, Paar- /
              Familiensitzungen ca. {paar.unit}. Dabei beläuft sich der Rhythmus
              bei Einzel- und Paarsitzungen zumeist auf {einzel.rhythm}, bei
              Familiensitzungen auf {familie.rhythm}. Je nach Situation kann es
              auch sinnvoll sein individuelle Absprachen zu treffen.
            </p>
            <p>
              Zwischen den Sitzungen lade ich Sie immer wieder mit Hilfe von
              Impulsen, Übungen und Experimenten dazu ein, Inhalte weiter zu
              denken, Ihre Perspektive zu verändern, neue Erfahrungen zu machen
              und damit Ihr Handlungsrepertoire zu erweitern.
            </p>
          </div>
          <ContactActions className="mt-12" />
        </Container>
      </section>
    </>
  )
}
