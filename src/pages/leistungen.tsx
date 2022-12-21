import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Heading } from "@/components/Heading"
import { KontaktKarte } from "@/components/KontaktKarte"
import { LeistungenLang, LeistungsKarte } from "@/components/Leistungen"
import Head from "next/head"

export default function Page() {
  return (
    <>
      <Head>
        <title>Gebhardt und Schrader Physiotherapie GbR: Leistungen</title>
      </Head>
      <Header />
      <main>
        <Heading heading="Unsere Leistungen">
          Wir bieten Ihnen eine Vielzahl an Behandlungsmöglichkeiten an. Finden
          Sie hier eine Übersicht und weitere Informationen zu den einzelnen
          Behandlungsmethoden.
        </Heading>
        <LeistungsKarte />
        <LeistungenLang />
        <KontaktKarte />
      </main>
      <Footer />
    </>
  )
}
