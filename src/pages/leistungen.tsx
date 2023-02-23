import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { H1 } from "@/components/Headings"
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
        <H1 heading="Leistungen">
          <p>
            Verschiedene Beratungen und Therapien sind möglich. Erhalten Sie
            hier einen Überblick über die Leistungen.
          </p>
        </H1>
        <Platzhalter />
        <Einzelberatung />
        <Paarberatung />
      </main>
      <Footer />
    </>
  )
}
