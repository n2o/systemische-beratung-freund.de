"use client"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { H1 } from "@/components/Headings"
import Head from "next/head"

export default function Page() {
  return (
    <>
      <Head>
        <title>Systemische Beratung Freund: Therapie und Ablauf</title>
      </Head>
      <Header />
      <main>
        <H1 heading="Therapie und Ablauf"></H1>
      </main>
      <Footer />
    </>
  )
}
