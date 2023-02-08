import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { H1Heading } from "@/components/Headings"
import Head from "next/head"

export default function Leistungen() {
  return (
    <>
      <Head>
        <title>Systemische Beratung Freund: Leitbild</title>
      </Head>
      <Header />
      <main>
        <H1Heading heading="Leitbild">
          <p>
            Unser Leitbild ist das Fundament unserer Arbeit und zeigt, was uns
            antreibt und woran wir glauben. Es gibt uns Orientierung und hilft
            uns, Entscheidungen zu treffen, die im Einklang mit unseren Werten
            stehen. Hier möchten wir Ihnen zeigen, wer wir sind und was uns
            wichtig ist.
          </p>
        </H1Heading>
      </main>
      <Footer />
    </>
  )
}
