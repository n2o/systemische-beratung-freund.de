import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Heading } from "@/components/heading"
import { KontaktKarte } from "@/components/kontakt-karte"
import { LeistungenLang, LeistungsKarte } from "@/components/leistungen"
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
