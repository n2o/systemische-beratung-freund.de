import { LeistungsUebersicht } from "@/components/Leistungen"
import { Kurzprofil } from "@/components/Profil"
import Welcome from "@/components/Welcome"

export default function Page() {
  return (
    <div>
      <div className="h-96 w-full bg-[url('/img/sandbank.webp')] bg-cover bg-fixed bg-center">
        <div className="flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-40 py-12">
          <div className="text-center">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center bg-primary-light opacity-80 p-4 rounded-lg">
                <span className="text-xl font-semibold text-primary-dark md:text-2xl lg:text-3xl">
                  &quot;Vielleicht stehen wir uns manchmal selbst im Weg, damit
                  wir über unsere Bedürfnisse stolpern&quot;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Welcome />
      <Kurzprofil />
      <LeistungsUebersicht />
    </div>
  )
}
