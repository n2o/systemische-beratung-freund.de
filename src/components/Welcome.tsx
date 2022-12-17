import { Container } from "@/components/Container"
import backgroundImage from "@/images/behandlungsraum.webp"
import clsx from "clsx"
import Image from "next/image"

const heading = "Willkommen!"
const lead = "Herzlich willkommen bei der Physiotherapie Gebhard und Schrade"
const body =
  "Wir sind ein Team von erfahrenen Physiotherapeutinnen, die sich auf die Behandlung von Schmerzen und Bewegungsproblemen jeglicher Art spezialisiert haben. Unser Ziel ist es, Sie wieder fit und gesund zu machen und Ihnen dabei zu helfen, Ihre Gesundheit und Ihr Wohlbefinden zu verbessern. Wir freuen uns darauf, Sie kennenzulernen und Ihnen bei Ihren Therapiebedürfnissen zu helfen."

function Karte({ className }) {
  return (
    <div
      className={clsx(
        "mx-6 my-7 rounded-lg bg-white px-4 py-5 shadow-2xl sm:px-6",
        className
      )}
    >
      <h2 className="pb-3 text-3xl">{heading}</h2>
      <p>{lead}</p>
      <p>{body}</p>
    </div>
  )
}

function PraxisBild({ className = "" }) {
  return (
    <Image
      src={backgroundImage}
      fill
      alt="Bild der Praxis"
      className={clsx("md:object-contain", className)}
    />
  )
}

export default function Welcome() {
  return (
    <div className="bg-accent px-4 py-5">
      <Container>
        <div className="my-12 md:flex">
          <Karte className="z-10 md:w-2/3" />
          <div className="relative md:-left-24 md:w-1/3">
            <PraxisBild />
          </div>
        </div>
      </Container>
    </div>
  )
}
