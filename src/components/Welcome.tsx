import { Container } from "@/components/Container"
import backgroundImage from "@/images/behandlungsraum.webp"
import Image from "next/image"

export default function Example() {
  return (
    <div className="bg-accent px-4 py-5">
      <Container>
        <div className="my-12 flex flex-row">
          <div className="z-10 mx-6 my-7 w-2/3 rounded-lg bg-white px-4 py-5 shadow-2xl sm:px-6">
            <h2 className="pb-3 text-3xl">Willkommen!</h2>
            <p>
              Herzlich willkommen bei der Physiotherapie Gebhard und Schrader!
            </p>
            <p>
              Wir sind ein Team von erfahrenen Physiotherapeutinnen, die sich
              auf die Behandlung von Schmerzen und Bewegungsproblemen jeglicher
              Art spezialisiert haben. Unser Ziel ist es, Sie wieder fit und
              gesund zu machen und Ihnen dabei zu helfen, Ihre Gesundheit und
              Ihr Wohlbefinden zu verbessern. Wir freuen uns darauf, Sie
              kennenzulernen und Ihnen bei Ihren Therapiebedürfnissen zu helfen
            </p>
          </div>
          <div className="relative -left-24 w-1/3">
            <Image
              src={backgroundImage}
              fill
              alt="TODO"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
