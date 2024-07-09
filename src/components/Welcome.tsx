import { Container } from "@/components/Container"
import { H1 } from "@/components/Headings"

export default function Welcome() {
  return (
    <Container className="my-12">
      <H1 heading="Herzlich Willkommen" />
      <p>
        Sind wir nicht alle im Alltag immer wieder Herausforderungen ausgesetzt,
        die manchmal unbedeutend erscheinen und an anderer Stelle schier
        unüberwindbar wirken? Häufig geraten wir in Situationen, die wir als
        Experten unserer eigenen Angelegenheiten problemlos lösen könnten, wenn
        nicht all die äußeren Einflüsse und individuellen Denkmuster wären, die
        unseren konstruktiven und selbstsicheren Blick auf die Dinge erschweren.
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
