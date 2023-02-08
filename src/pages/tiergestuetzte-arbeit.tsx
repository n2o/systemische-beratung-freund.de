import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { H1Heading } from "@/components/Headings"
import Head from "next/head"

export default function Leistungen() {
  return (
    <>
      <Head>
        <title>Systemische Beratung Freund: Tiergestützte Arbeiten</title>
      </Head>
      <Header />
      <main>
        <H1Heading heading="Tiergestützte Arbeiten">
          <p>
            Tiergestützte Arbeit ist eine innovative Methode, die Menschen dabei
            unterstützt, Herausforderungen zu meistern und ihr Wohlbefinden zu
            verbessern.
          </p>
        </H1Heading>
      </main>
      <Footer />
    </>
  )
}
