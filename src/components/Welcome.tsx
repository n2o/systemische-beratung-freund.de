import { Container } from "@/components/Container"
import { H1Heading } from "@/components/Headings"

export default function Welcome() {
  return (
    <Container className="my-12">
      <H1Heading heading="Herzlich Willkommen" />
      <p>
        Sehen wir uns nicht alle bei Zeit im Alltag gewissen Herausforderungen
        ausgesetzt, die in einem Moment kaum der Rede wert sind und an anderer
        Stelle schier unüberwindbar scheinen? Viel zu oft geraten wir im Leben
        in Situationen, die wir als Experten in eigener Sache ohne weiteres zu
        lösen wüssten, wenn da nicht all die äußeren Einflüsse und/oder
        individuellen Gedankenmodelle wären, die einen konstruktiven,
        selbstsicheren Blick auf die Dinge erschweren.
      </p>
      <p>
        Trotz der Vielzahl an Angeboten scheint die Hemmschwelle sich dann
        Unterstützung zu suchen immer noch sehr hoch. So sei Ihnen an dieser
        Stelle gesagt:
      </p>
      <p className="italic">
        Den ersten Schritt zur Veränderung haben Sie bereits gemacht!
      </p>
    </Container>
  )
}
