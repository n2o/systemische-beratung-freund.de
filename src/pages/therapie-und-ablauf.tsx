"use client"
import { Container } from "@/components/Container"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { H1 } from "@/components/Headings"
import praxis from "@/images/placeholder_praxis.webp"
import Head from "next/head"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <Head>
        <title>Systemische Beratung Freund: Therapie und Ablauf</title>
      </Head>
      <Header />
      <main>
        <H1 heading="Therapie und Ablauf"></H1>
        <Container>
          <Image
            src={praxis.src}
            alt="Beispielbild"
            width={500}
            height={200}
            className="float-right mb-5 ms-7"
          />
          <p>
            Kontaktieren Sie mich gern telefonisch, via SMS oder über das
            hiesige Kontaktformular für einen Termin für ein
            Informationsgespräch.
          </p>

          <p>
            In diesem Erstkontakt lernen wir einander zunächst kennen. Sie haben
            die Möglichkeit einen ersten Einblick von mir und meiner
            Arbeitsweise als Therapeutin zu gewinnen, während ich einen Eindruck
            erhalte, was Sie thematisch zu mir führt, sowie welche Vorstellungen
            und Ziele Sie im Hinblick auf Therapie und Beratung verfolgen.
          </p>

          <p>
            Im Anschluss treffen Sie die Entscheidung, ob Sie sich eine
            Zusammenarbeit mit mir vorstellen können. Ich prüfe derweil, ob ich
            Ihren Therapieauftrag annehmen kann.
          </p>

          <p>
            Einzelsitzungen dauern in der Regel 60 Minuten, Paar- /
            Familiensitzungen ca. 90 Minuten. Der Rhythmus beläuft sich bei
            Einzel- und Paarsitzungen zumeist auf alle 1-2 Wochen, bei
            Familiensitzungen auf etwa alle 4 Wochen. Je nach Situation kann es
            auch sinnvoll sein individuelle Absprachen zu treffen.
          </p>

          <p>
            Zwischen den Sitzungen lade ich Sie immer wieder mit Hilfe von
            Impulsen, Übungen und Experimenten dazu ein Inhalte weiter zu
            denken, Ihre Perspektive zu verändern, neue Erfahrungen zu machen
            und damit Ihr Handlungsrepertoire zu erweitern.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  )
}
