import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Heading } from "@/components/heading"
import { Karte } from "@/components/karte"
import {
  AdresseLink,
  MailLink,
  Sprechzeiten,
  TelefonLink,
} from "@/components/kontakt-karte"
import { Map } from "@/components/Map/map"
import Head from "next/head"

const DEFAULT_CENTER = [51.25732, 10.15767]

function MyMap() {
  return (
    <div className="relative">
      <Map
        className="w-100 h-100 absolute"
        height="100%"
        center={DEFAULT_CENTER}
        zoom={17}
      >
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={DEFAULT_CENTER}>
              <Popup>Unsere Praxis</Popup>
            </Marker>
          </>
        )}
      </Map>
    </div>
  )
}

function Kontaktdaten() {
  return (
    <section>
      <h2 className="pb-7 text-center ">
        Gebhardt und Schrader
        <br />
        Physiotherapie GbR
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <AdresseLink className="text-center" />
        <MailLink className="text-center" />
        <Sprechzeiten
          className="text-center text-primary"
          listStyle="list-none"
        />
        <TelefonLink />
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <Head>
        <title>Gebhardt und Schrader Physiotherapie GbR: Impressum</title>
      </Head>
      <Header />

      <Heading heading="Kontakt zu uns">
        <p>
          Wir freuen uns gerne Sie kennenzulernen! Finden Sie hier einige
          Kontaktmöglichkeiten.
        </p>
      </Heading>

      <div className="bg-accent px-4 py-5">
        <Karte>
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Kontaktdaten />
              <MyMap />
            </div>
          </Container>
        </Karte>
      </div>

      <Footer />
    </>
  )
}
