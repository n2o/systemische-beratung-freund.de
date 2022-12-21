import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Heading } from "@/components/heading"
import { Karte } from "@/components/karte"
import Head from "next/head"

const alexandra =
  "Alexandra Gebhardt ist Gesellschafterin und seit 2004 als Physiotherapeutin tätig und bringt viel Berufserfahrung mit, insbesondere im Bereich der manuellen Lymphdrainage, der Kompressionsbehandlung und der Manuellen Therapie. Zusätzlich hat sie sich in CMD/Kiefergelenksbehandlungen und der Fussreflexzonen-Therapie fortgebildet. Sie bietet auch Hausbesuche an."

function WelcomeCard() {
  return (
    <div className="bg-accent px-4 py-5">
      <Container>
        <Karte>
          <div className="prose prose-lg prose-slate mx-auto">
            <p>
              Unsere Physiotherapie Praxis haben wir im Juni 2021 neu eröffnet.
              Wir sind in die Räume der Praxis von Ursula Pudenz eingezogen und
              konnten dort verzugslos starten. Unser Ziel ist es, unseren
              Patienten ein breitgefächertes Spektrum an physiotherapeutischer
              Behandlung zu bieten.
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
  )
}

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
      <WelcomeCard />
      <Footer />
    </>
  )
}
