import { PageHeader } from "@/components/Headings"
import { Container } from "@/components/Container"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <>
      <PageHeader title="Seite nicht gefunden">
        Bitte überprüfen Sie die Adresse und versuchen Sie es erneut. Sollte der
        Fehler weiterhin auftreten,{" "}
        <Link href="/kontakt" className="link-fir">
          kontaktieren Sie uns
        </Link>{" "}
        bitte.
      </PageHeader>
      <Container className="pb-20 md:pb-28">
        <Button asChild>
          <Link href="/">Zur Startseite</Link>
        </Button>
      </Container>
    </>
  )
}
