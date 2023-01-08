import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Kurzprofil } from "@/components/Profil"
import Welcome from "@/components/Welcome"
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

        <Welcome />
        <Kurzprofil />
      </main>
      <Footer />
    </>
  )
}
