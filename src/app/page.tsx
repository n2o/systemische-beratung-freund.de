import { ContactActions } from "@/components/ContactActions"
import { Container } from "@/components/Container"
import { PhaseSteps } from "@/components/PhaseSteps"
import { Kurzprofil } from "@/components/Profil"
import { ServiceList } from "@/components/ServiceList"
import { SystemDiagram } from "@/components/SystemDiagram"
import { site } from "@/config/site"
import lisaMitLasse from "@/images/lisa-mit-lasse.webp"
import { pageMetadata } from "@/lib/metadata"
import Image from "next/image"

export const metadata = pageMetadata({
  description: site.description,
  path: "/",
})

export default function Page() {
  return (
    <>
      <Container className="grid items-center gap-12 pt-12 pb-20 md:pt-20 lg:grid-cols-[1fr_1.1fr] lg:pb-28">
        <div>
          <h1 className="text-display">{site.headline}</h1>
          <p className="mt-6 max-w-xl text-xl">
            Für Einzelne, Paare, Familien und Teams. Je nach Bedarf in meinen
            Praxisräumen, bei Ihnen zu Hause oder im Gespräch in Bewegung.
          </p>
          <ContactActions className="mt-10" />
        </div>
        <SystemDiagram layout="wide" className="hidden w-full lg:block" />
        <SystemDiagram
          layout="compact"
          className="mx-auto w-full max-w-sm lg:hidden"
        />
      </Container>

      <section aria-labelledby="willkommen" className="bg-mist section-y">
        <Container className="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
          <div>
            <h2 id="willkommen" className="text-title">
              Herzlich willkommen
            </h2>
            <div className="mt-6 max-w-prose space-y-4 text-lg">
              <p>
                Sind wir nicht alle im Alltag immer wieder Herausforderungen
                ausgesetzt, die manchmal unbedeutend erscheinen und an anderer
                Stelle schier unüberwindbar wirken? Häufig geraten wir in
                Situationen, die wir als Experten unserer eigenen
                Angelegenheiten problemlos lösen könnten, wenn nicht all die
                äußeren Einflüsse und individuellen Denkmuster wären, die
                unseren konstruktiven und selbstsicheren Blick auf die Dinge
                erschweren.
              </p>
              <p>
                Trotz der Vielzahl an Angeboten scheint die Hemmschwelle sich
                dann Unterstützung zu suchen immer noch sehr hoch. So sei Ihnen
                an dieser Stelle gesagt:
              </p>
              <p className="text-xl font-semibold text-fir">
                Den ersten Schritt zur Veränderung haben Sie bereits gemacht!
              </p>
            </div>
          </div>
          <figure>
            <Image
              src={lisaMitLasse}
              alt={`${site.owner} hockt auf einem Waldweg und umarmt ihren Labrador Lasse`}
              sizes="(min-width: 1024px) 448px, 100vw"
              placeholder="blur"
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
            <figcaption className="mt-4 text-lg text-fir">
              „Vielleicht stehen wir uns manchmal selbst im Weg, damit wir über
              unsere Bedürfnisse stolpern.“
            </figcaption>
          </figure>
        </Container>
      </section>

      <section aria-labelledby="leistungen" className="section-y">
        <Container>
          <h2 id="leistungen" className="text-title">
            Was kommt für Sie in Frage?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Finden Sie hier eine Übersicht über die Leistungen, die ich Ihnen
            anbieten kann.
          </p>
          <div className="mt-10">
            <ServiceList />
          </div>
        </Container>
      </section>

      <section aria-labelledby="ablauf" className="hairline-y section-y">
        <Container>
          <h2 id="ablauf" className="text-title">
            So beginnt die Zusammenarbeit
          </h2>
          <div className="mt-12">
            <PhaseSteps />
          </div>
        </Container>
      </section>

      <Kurzprofil />

      <section aria-labelledby="kontakt-aufnehmen" className="hairline-t pt-20">
        <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="kontakt-aufnehmen" className="text-title">
              Rufen Sie mich an.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Ich freue mich auf Ihre Kontaktaufnahme und melde mich so schnell
              wie möglich bei Ihnen.
            </p>
          </div>
          <ContactActions />
        </Container>
      </section>
    </>
  )
}
