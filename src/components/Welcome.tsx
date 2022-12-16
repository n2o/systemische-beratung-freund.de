import { Container } from "@/components/Container"
import backgroundImage from "@/images/behandlungsraum.webp"
import Image from "next/image"

export default function Example() {
  return (
    <div className="bg-accent px-4 py-5">
      <Container>
        <div className="relative">
          <div className=" my-7 mx-6 rounded-lg bg-white px-4 py-5 shadow-2xl sm:px-6">
            <h2 className="pb-3 text-3xl">Herzlich Willkommen</h2>
            <p>
              Herzlich willkommen bei der Physiotherapie Ershausen! Wir sind ein
              Team von erfahrenen Physiotherapeutinnen, die sich auf die
              Behandlung von Schmerzen und Bewegungsproblemen jeglicher Art
              spezialisiert haben. Unser Ziel ist es, Sie wieder fit und gesund
              zu machen und Ihnen dabei zu helfen, Ihre Gesundheit und Ihr
              Wohlbefinden zu verbessern. Wir freuen uns darauf, Sie
              kennenzulernen und Ihnen bei Ihren Therapiebedürfnissen zu helfen
            </p>
          </div>
          <div className="">
            <Image src={backgroundImage} width={200} height={200} alt="TODO" />
          </div>
        </div>
      </Container>
    </div>
  )
}
