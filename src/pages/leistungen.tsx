import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { H1Heading } from "@/components/Headings"
import { Einzelberatung, Paarberatung } from "@/components/Leistungen"
import { Platzhalter } from "@/components/Streifen"
import Head from "next/head"

export default function Leistungen() {
  return (
    <>
      <Head>
        <title>Systemische Beratung Freund: Leistungen</title>
      </Head>
      <Header />
      <main>
        <H1Heading heading="Leistungen">
          <p>
            Verschiedene Beratungen und Therapien sind möglich. Erhalten Sie
            hier einen Überblick über die Leistungen.
          </p>
        </H1Heading>
        <Platzhalter />
        <Einzelberatung />
        <Paarberatung />
      </main>
      <Footer />
    </>
  )
}
