import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { H1 } from "@/components/Headings"
import {
  Einzelberatung,
  Familienberatung,
  Paarberatung,
} from "@/components/Leistungen"
import { Platzhalter } from "@/components/Streifen"
import Head from "next/head"

export default function Leistungen() {
  return (
    <>
      <Head>
        <title>Systemische Beratung Freund: Leistungen</title>
      </Head>
      <Header />
      <main>
        <H1 heading="Leistungen">
          <div className="col-6">
            <blockquote className="w-50 text-xl italic text-gray-900">
              &bdquo;Wenn etwas trotz vieler Anstrengungen nicht gut genug
              funktioniert und passt- dann höre auf damit und versuche etwas
              anderes.&ldquo;
              <br />
              Steve de Shazer
            </blockquote>
          </div>
        </H1>
        <Platzhalter />
        <Einzelberatung />
        <Paarberatung />
        <Familienberatung />
      </main>
      <Footer />
    </>
  )
}
