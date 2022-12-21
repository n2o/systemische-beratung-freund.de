import { Faqs } from "@/components/faqs"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { KontaktKarte } from "@/components/kontakt-karte"
import { LeistungenKurz } from "@/components/leistungen"
import Welcome from "@/components/welcome"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Gebhardt und Schrader Physiotherapie GbR</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <LeistungenKurz />
        <KontaktKarte />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
