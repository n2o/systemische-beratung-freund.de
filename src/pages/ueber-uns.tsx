import { Container } from "@/components/container"
import { FadeIn } from "@/components/FadeIn"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Heading } from "@/components/heading"
import { Karte } from "@/components/karte"
import { KontaktKarte } from "@/components/kontakt-karte"
import { PraxisBilder } from "@/components/praxis-bilder"
import alex from "@/images/team/alex.webp"
import antjeKristin from "@/images/team/antje-kristin.webp"
import imke from "@/images/team/imke.webp"
import melanie from "@/images/team/melanie.webp"
import ursula from "@/images/team/ursula.webp"
import Head from "next/head"
import Image from "next/image"
import { useRef } from "react"

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

const people = [
  {
    name: "Imke Schrader",
    image: imke,
    bio: "Imke Schrader ist Gesellschafterin und seit 1998 Physiotherapeutin. Sie hat besonders in der Behandlung von neurologischen Erkrankungen in verschiedenen Kliniken und Praxen Erfahrung sammeln können. Sie hat sich in der Brügger-Therapie, der KG ZNS nach Bobath für Erwachsene und der manuellen Therapie nach dem Maitland-Konzept fortgebildet. Sie bietet auch Hausbesuche an.",
  },
  {
    name: "Alexandra Gebhardt",
    image: alex,
    bio: "Alexandra Gebhardt ist Gesellschafterin und seit 2004 als Physiotherapeutin tätig und bringt viel Berufserfahrung mit, insbesondere im Bereich der manuellen Lymphdrainage, der Kompressionsbehandlung und der Manuellen Therapie. Zusätzlich hat sie sich in CMD / Kiefergelenksbehandlungen und der Fussreflexzonen-Therapie fortgebildet. Sie bietet auch Hausbesuche an.",
  },
  {
    name: "Melanie Kiep",
    image: melanie,
    bio: "Melanie Kiep ist seit 2001 als Physiotherapeutin tätig und hat zudem eine Ausbildung als Krankenschwester absolviert. Seit 2004 arbeitet sie in der Praxis in Ershausen und verstärkt nun das neue Team. Sie hat sich insbesondere im Bereich der manuellen Therapie und der manuellen Lymphdrainage fortgebildet.",
  },
  {
    name: "Antje-Kristin",
    image: antjeKristin,
    bio: "",
  },
  {
    name: "Ursula Pudenz",
    image: ursula,
    bio: "Ursula Pudenz ist seit 1977 als Physiotherapeutin tätig und führte von 1996 bis 2021 erfolgreich ihre eigene Praxis in den aktuellen Räumlichkeiten. Durch ihre langjährige Erfahrung und Fortbildungen in Manueller Therapie, Manueller Lymphdrainage und Rückenschule unterstützt sie weiterhin die Praxis.",
  },
]

function Person({ person }) {
  const ref = useRef(null)
  return (
    <li ref={ref}>
      <FadeIn parentRef={ref}>
        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
          <div className="aspect-w-3 aspect-h-4 h-0 sm:aspect-w-3 sm:aspect-h-5">
            <Image
              src={person.image}
              className="rounded-lg object-cover shadow-lg"
              alt={person.name}
            />
          </div>
          <div className="sm:col-span-2">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3>{person.name}</h3>
            </div>
            <div className="text-lg">
              <p className="text-gray-500">{person.bio}</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </li>
  )
}

export function Personen() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {people.map((person) => (
              <Person key={person.name} person={person} />
            ))}
          </ul>
        </div>
      </div>
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
      <Heading heading="Über uns">
        <p>Lernen Sie das Team hinter unserer Physiotherapiepraxis kennen.</p>
      </Heading>
      <WelcomeCard />
      <Personen />
      <Container>
        <PraxisBilder />
      </Container>
      <KontaktKarte />
      <Footer />
    </>
  )
}