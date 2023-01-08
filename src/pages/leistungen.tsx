import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { HeadingFuerSection } from "@/components/Heading"
import Head from "next/head"

export default function Leistungen() {
  return (
    <>
      <Head>
        <title>Systemische Beratung Freund: Leistungen</title>
      </Head>
      <Header />
      <main>
        <HeadingFuerSection heading="Leistungen">
          <p>
            Verschiedene Beratungen und Therapien sind möglich. Erhalten Sie
            hier einen Überblick über die Leistungen.
          </p>
        </HeadingFuerSection>
      </main>
      <Footer />
    </>
  )
}
