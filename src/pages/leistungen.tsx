import { Hero } from "@/components/Hero"
import { KontaktKarte } from "@/components/KontaktKarte"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Gebhardt und Schrader Physiotherapie GbR: Leistungen</title>
      </Head>
      <main>
        <Hero />
        <KontaktKarte />
      </main>
    </>
  )
}
