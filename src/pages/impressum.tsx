import { Container } from "@/components/Container"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Heading } from "@/components/Heading"
import Head from "next/head"

const h2Classes = "text-2xl pt-3 pb-1"

export default function Page() {
  return (
    <>
      <Head>
        <title>Gebhardt und Schrader Physiotherapie GbR: Impressum</title>
      </Head>
      <Header />
      <Container>
        <Heading heading="Impressum" />
        <h1 className="text-3xl">Impressum</h1>
        <h2 className={h2Classes}>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>
          Gebhardt und Schrader Physiotherapie GbR
          <br />
          Kreisstraße 46a
          <br />
          37308 Schimberg OT Ershausen
        </p>

        <h3 className="text-lg">Vertreten durch</h3>
        <p>
          Imke Schrader
          <br />
          Alexandra Gebhardt
        </p>

        <h2 className={h2Classes}>Kontakt</h2>
        <p>
          Telefon: (03 60 82) 90 82 17
          <br />
          Telefax: (03 60 82) 90 13 85
          <br />
          E-Mail: gebhardtundschrader@outlook.de
        </p>

        <h2 className={h2Classes}>Steuernummer</h2>
        <p>
          157/154/22201
        </p>

        <h2 className={h2Classes}>
          Berufsbezeichnung und berufsrechtliche Regelungen
        </h2>
        <p>
          Berufsbezeichnung:
          <br />
          Physiotherapeut
        </p>
        {/* <p>
          Zust&auml;ndige Kammer:
          <br />
        </p>
        <p>
          Verliehen in:
          <br />
        </p> */}
        <p>Es gelten folgende berufsrechtliche Regelungen:</p>
        <h2 className={h2Classes}>
          Verbraucher&shy;streit&shy;beilegung /
          Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>
          Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
        </p>
      </Container>
      <Footer />
    </>
  )
}
