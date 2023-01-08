import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import Welcome from "@/components/welcome"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Systemische Beratung Freund</title>
        <meta name="description" content="Systemische Beratung Freund" />
      </Head>
      <Header />
      <main>
        <div className="h-96 w-full bg-[url('/img/sandbank.webp')] bg-cover bg-fixed bg-center">
          <div className="flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-40 py-12">
            <div className="text-center">
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                  <span className="text-xl font-semibold text-gray-200 md:text-2xl lg:text-3xl">
                    &quot;Vielleicht stehen wir uns manchmal selbst im Weg,
                    damit wir über unsere Bedürfnisse stolpern&quot;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="content pt-5">
          <h1 className="pt-0">Herzlich Willkommen</h1>
          <p>
            Sehen wir uns nicht alle bei Zeit im Alltag gewissen
            Herausforderungen ausgesetzt, die in einem Moment kaum der Rede wert
            sind und an anderer Stelle schier unüberwindbar scheinen? Viel zu
            oft geraten wir im Leben in Situationen, die wir als Experten in
            eigener Sache ohne weiteres zu lösen wüssten, wenn da nicht all die
            äußeren Einflüsse und/oder individuellen Gedankenmodelle wären, die
            einen konstruktiven, selbstsicheren Blick auf die Dinge erschweren.
          </p>
          <p>
            Trotz der Vielzahl an Angeboten scheint die Hemmschwelle sich dann
            Unterstützung zu suchen immer noch sehr hoch. So sei Ihnen an dieser
            Stelle gesagt:
          </p>
          <p className="italic">
            Den ersten Schritt zur Veränderung haben Sie bereits gemacht!
          </p>
        </section>

        <Hero />
        <Welcome />
      </main>
      <Footer />
    </>
  )
}
