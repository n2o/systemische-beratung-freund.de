import { Container } from "@/components/Container"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { H1 } from "@/components/Headings"
import Head from "next/head"
import Link from "next/link"

export default function Leistungen() {
  return (
    <>
      <Head>
        <title>Systemische Beratung Freund: Impressum</title>
      </Head>
      <Header />
      <main>
        <H1 heading="Impressum"></H1>
        <Container>
          <h2>Angaben gemäß &sect; 5 TMG</h2>
          <p>
            Lisa Freund
            <br />
            Entenstr. 42
            <br />
            000000 Entenhausen
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: (01 23 34) 00 00 00
            <br />
            E-Mail: some@mail.de
          </p>

          <h2>
            Verbraucher&shy;streit&shy;beilegung /
            Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <p>
            Quelle:{" "}
            <Link href="https://www.e-recht24.de" target="_blank">
              e-recht24.de
            </Link>
          </p>
        </Container>
      </main>
      <Footer />
    </>
  )
}
