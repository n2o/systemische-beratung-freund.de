import { Faqs } from "@/components/Faqs"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { KontaktKarte } from "@/components/KontaktKarte"
import { Leistungen } from "@/components/Leistungen"
import Welcome from "@/components/Welcome"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Gebhardt und Schrader Physiotherapie GbR</title>
        <meta
          name="description"
          content="Physiotherapie Gebhardt und Schrader in Ershausen. Wir sind ein Team von erfahrenen Physiotherapeutinnen, die sich auf die Behandlung von Schmerzen und Bewegungsproblemen jeglicher Art spezialisiert haben."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Leistungen />
        <KontaktKarte />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
