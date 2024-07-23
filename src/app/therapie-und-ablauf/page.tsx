import { Container } from "@/components/Container"
import { H1 } from "@/components/Headings"
import praxis from "@/images/placeholder_praxis.webp"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Therapie und Ablauf",
}

export default function Page() {
  return (
    <>
      <H1 heading="Therapie und Ablauf"></H1>
      <Container>
        <div className="bg-white px-6 lg:px-8">
          <div className="text-base leading-7 text-gray-700">
            <div className="mt-10">
              <p>
                Kontaktieren Sie mich gern telefonisch, via SMS oder über das
                hiesige Kontaktformular für einen Termin zum
                Informationsgespräch.
              </p>
              <p className="mt-2">
                In diesem Erstkontakt lernen wir einander zunächst kennen. Sie
                haben die Möglichkeit einen ersten Einblick von mir und meiner
                Arbeitsweise als Therapeutin zu gewinnen, während ich einen
                Eindruck erhalte, was Sie thematisch zu mir führt, sowie welche
                Vorstellungen und Ziele Sie im Hinblick auf Therapie und
                Beratung verfolgen.
              </p>
              <p className="mt-2">
                Im Anschluss treffen Sie die Entscheidung, ob Sie sich eine
                Zusammenarbeit mit mir vorstellen können. Ich prüfe derweil, ob
                ich Ihren Therapieauftrag annehmen kann.
              </p>
              <p className="mt-2">
                Einzelsitzungen dauern in der Regel 60 Minuten, Paar- /
                Familiensitzungen ca. 90 Minuten. Dabei beläuft sich der
                Rhythmus bei Einzel- und Paarsitzungen zumeist auf alle 1-2
                Wochen, bei Familiensitzungen auf etwa alle 4 Wochen. Je nach
                Situation kann es auch sinnvoll sein individuelle Absprachen zu
                treffen.
              </p>
              <p className="mt-2">
                Zwischen den Sitzungen lade ich Sie immer wieder mit Hilfe von
                Impulsen, Übungen und Experimenten dazu ein, Inhalte weiter zu
                denken, Ihre Perspektive zu verändern, neue Erfahrungen zu
                machen und damit Ihr Handlungsrepertoire zu erweitern.
              </p>
            </div>
            <figure className="mt-16">
              <Image
                src={praxis.src}
                alt="Bild der Praxis"
                width={500}
                height={200}
                className="aspect-video w-full md:w-3/4 mx-auto rounded-xl bg-gray-50 object-cover"
              />
            </figure>
          </div>
        </div>
      </Container>
    </>
  )
}
