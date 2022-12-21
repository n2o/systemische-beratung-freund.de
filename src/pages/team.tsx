import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Heading } from "@/components/heading"
import { Karte } from "@/components/karte"
import Head from "next/head"

export default function Page() {
  return (
    <>
      <Head>
        <title>Gebhardt und Schrader Physiotherapie GbR: Team</title>
      </Head>
      <Header />
      <Heading heading="Unser Team">
        <p>Lernen Sie das Team hinter unserer Physiotherapiepraxis kennen.</p>
      </Heading>
      <div className="bg-accent px-4 py-5">
        <Container>
          <Karte>
            <div className="grid grid-cols-2 gap-20">
              <p>
                Unsere Physiotherapie Praxis haben wir im Juni 2021 neu
                eröffnet. Wir sind in die Räume der Praxis von Ursula Pudenz
                eingezogen und konnten dort verzugslos starten. Unser Ziel ist
                es, unseren Patienten ein breitgefächertes Spektrum an
                physiotherapeutischer Behandlung zu bieten.
              </p>
              <p>
                Fachliche Kompetenz in freundlicher Atmosphäre, sowie
                Zuverlässigkeit stehen für uns im Mittelpunkt für eine gute und
                effektive Zusammenarbeit.
              </p>
            </div>
          </Karte>
        </Container>
      </div>
      <Footer />
    </>
  )
}
