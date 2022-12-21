import { Button } from "@/components/button"
import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { FaceSmileIcon } from "@heroicons/react/24/outline"

export default function FourOhFour() {
  return (
    <>
      <Header />
      <Container>
        <div className="bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="mx-auto max-w-max">
            <main className="sm:flex">
              <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                404
              </p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Seite nicht gefunden
                  </h1>
                  <p className="mt-1 text-base text-gray-500">
                    Bitte überprüfen Sie die Adresse und versuchen Sie es
                    erneut. Sollte der Fehler weiterhin auftreten, kontaktieren
                    Sie uns bitte <FaceSmileIcon className="inline h-4" />
                  </p>
                </div>
                <div className="sm:pl-6">
                  <Button href="/" variant="outline" className="">
                    Zur Startseite
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
