import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { H1 } from "@/components/Headings"
import Head from "next/head"

export default function Leistungen() {
  return (
    <>
      <Head>
        <title>Systemische Beratung Freund: Profil</title>
      </Head>
      <Header />
      <main>
        <H1 heading="Profil">
          <p>
            Hier möchte ich mich Ihnen vorstellen und Ihnen einen Einblick in
            meine Fähigkeiten, Erfahrungen und Interessen geben.
          </p>
        </H1>
      </main>
      <Footer />
    </>
  )
}
