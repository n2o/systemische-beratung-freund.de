import { Container } from "@/components/Container"
import { H1 } from "@/components/Headings"
import {
  Einzelberatung,
  Familienberatung,
  Paarberatung,
  Teamberatung,
  TiergestuetzteArbeit,
  Wiedereingliederung,
} from "@/components/Leistungen"
import { LeistungenNavigation } from "@/components/LeistungenNavigation"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leistungen",
}

export default function Page() {
  return (
    <>
      <H1 heading="Leistungen">
        <blockquote className="w-3/4 mx-auto text-xl italic text-gray-900">
          &bdquo;Wenn etwas trotz vieler Anstrengungen nicht gut genug
          funktioniert und passt- dann höre auf damit und versuche etwas
          anderes.&ldquo;
          <br />
          Steve de Shazer
        </blockquote>
      </H1>
      <div className="my-10" />
      <div>
        <div className="bg-slate-100 px-3 py-5">
          <Container>
            <LeistungenNavigation />
          </Container>
        </div>
        <Wiedereingliederung />
        <Einzelberatung />
        <Paarberatung />
        <Familienberatung />
        <Teamberatung />
        <TiergestuetzteArbeit />
      </div>
    </>
  )
}
