import { Container } from "@/components/container"
import { Karte } from "@/components/karte"

const heading = "Willkommen!"
const lead = "Herzlich willkommen bei der Physiotherapie Gebhardt und Schrader"
const body =
  "Wir sind ein Team von erfahrenen Physiotherapeutinnen, die sich auf die Behandlung von Schmerzen und Bewegungsproblemen jeglicher Art spezialisiert haben. Unser Ziel ist es, Sie wieder fit und gesund zu machen und Ihnen dabei zu helfen, Ihre Gesundheit und Ihr Wohlbefinden zu verbessern. Wir freuen uns darauf, Sie kennenzulernen und Ihnen bei Ihren Therapiebedürfnissen zu helfen."

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
        </div>
      </Container>
    </div>
  )
}
