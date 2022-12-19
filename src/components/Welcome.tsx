import { Container } from "@/components/Container"
import { Karte } from "@/components/Karte"
import backgroundImage from "@/images/behandlungsraum.webp"
import Image from "next/image"

const heading = "Willkommen!"
const lead = "Herzlich willkommen bei der Physiotherapie Gebhardt und Schrader"
const body =
  "Wir sind ein Team von erfahrenen Physiotherapeutinnen, die sich auf die Behandlung von Schmerzen und Bewegungsproblemen jeglicher Art spezialisiert haben. Unser Ziel ist es, Sie wieder fit und gesund zu machen und Ihnen dabei zu helfen, Ihre Gesundheit und Ihr Wohlbefinden zu verbessern. Wir freuen uns darauf, Sie kennenzulernen und Ihnen bei Ihren Therapiebedürfnissen zu helfen."

function PraxisBild({ ...props }) {
  return <Image src={backgroundImage} alt="Bild der Praxis" {...props} />
}

export default function Welcome() {
  return (
    <div className="bg-accent px-4 py-5">
      <Container>
        <div className="my-12 md:flex">
          <Karte
            className="z-10 md:w-2/3"
            heading={heading}
            lead={lead}
            body={body}
          />
          <div className="relative md:-left-24 md:w-1/3">
            <PraxisBild className="md:object-contain" fill />
          </div>
          <PraxisBild className="mx-auto w-2/3 rounded shadow-lg md:hidden" />
        </div>
      </Container>
    </div>
  )
}
