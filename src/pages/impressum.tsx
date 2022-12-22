import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { SprinkleBackground } from "@/components/hero"
import Head from "next/head"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <Head>
        <title>Gebhardt und Schrader Physiotherapie GbR: Impressum</title>
      </Head>
      <Header />
      <SprinkleBackground />
      <Container>
        <h1>Impressum</h1>
        <h2>Angaben gemäß &sect; 5 TMG</h2>
        <p>
          Gebhardt und Schrader Physiotherapie GbR
          <br />
          Kreisstraße 46a
          <br />
          37308 Schimberg OT Ershausen
        </p>

        <h3>Vertreten durch</h3>
        <p>
          Imke Schrader
          <br />
          Alexandra Gebhardt
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: (03 60 82) 90 82 17
          <br />
          Telefax: (03 60 82) 90 13 85
          <br />
          E-Mail: gebhardtundschrader@outlook.de
        </p>

        <h2>Steuernummer</h2>
        <p>157/154/22201</p>

        {/* <h2 >
          Berufsbezeichnung und berufsrechtliche Regelungen
        </h2>
        <p>
          Berufsbezeichnung:
          <br />
          Physiotherapeut
        </p> */}
        {/* <p>
          Zuständige Kammer:
          <br />
        </p>
        <p>
          Verliehen in:
          <br />
        </p> */}
        <p>Es gelten folgende berufsrechtliche Regelungen:</p>
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
      <Footer />
    </>
  )
}
