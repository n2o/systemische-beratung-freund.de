import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { H1Heading } from "@/components/Headings"
import Head from "next/head"

export default function Leistungen() {
  return (
    <>
      <Head>
        <title>Systemische Beratung Freund: Profil</title>
      </Head>
      <Header />
      <main>
        <H1Heading heading="Profil">
          <p>
            Hier möchte ich mich Ihnen vorstellen und Ihnen einen Einblick in
            meine Fähigkeiten, Erfahrungen und Interessen geben.
          </p>
        </H1Heading>
      </main>
      <Footer />
    </>
  )
}
