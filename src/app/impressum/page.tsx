import { Container } from "@/components/Container"
import { H1 } from "@/components/Headings"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Impressum",
}

export default function Leistungen() {
  return (
    <>
      <H1 heading="Impressum"></H1>
      <Container>
        <p>
          Lisa Freund
          <br />
          Westhauser Straße 39
          <br />
          42857 Remscheid
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 0176 62579217
          <br />
          E-Mail: info@systemische-beratung-freund.de
        </p>

        <h2>
          Verbraucher&shy;streit&shy;beilegung /
          Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>
          Quelle:{" "}
          <Link href="https://www.e-recht24.de" target="_blank">
            e-recht24.de
          </Link>
        </p>
      </Container>
    </>
  )
}
