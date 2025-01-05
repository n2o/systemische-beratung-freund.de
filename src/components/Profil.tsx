import { Container } from "@/components/Container"
import lisaLasse from "@/images/lisa-mit-lasse.webp"
import Image from "next/image"

export function Kurzprofil() {
  return (
    <div className="my-16 bg-slate-50 py-8">
      <Container className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 xl:flex-row">
          <Image
            className="aspect-[3/4] w-80 flex-none rounded-2xl object-cover"
            src={lisaLasse.src}
            alt="Lisa mit Lasse"
            width={320}
            height={427}
          />
          <div className="flex-auto text-gray-900">
            <h2 className="text-lg font-semibold leading-8 tracking-tight">
              Über mich
            </h2>
            <p className="text-base leading-7">
              Lisa Freund, verheiratet, freiberuflich tätig seit 2022.
            </p>
            <div className="mt-1 text-base leading-7">
              <p>
                In meiner beraterischen / therapeutischen Tätigkeit widme ich
                mich mit Leidenschaft, Empathie, Professionalität und Klarheit
                Einzelnen, Paaren, Familien und Teams, die auf der Suche nach
                Veränderung sind. Hierbei ist es mir einerseits wichtig auf
                kreative, unkonventionelle, alltagsnahe Methoden zurück zu
                greifen, mit dem Ziel, dass meine Klienten am Ende einer jeden
                Sitzung etwas Konkretes mit nach Hause nehmen. Zum anderen bin
                ich gern spontan und entwickle gemeinsam mit meinen Klienten
                individuell auf sie zugeschnittene Ideen und Wege.
              </p>
              <h3 className="mt-5">Berufliche Erfahrungen</h3>
              <ul className="ml-5 list-inside list-disc">
                <li>Ausbildung zur Systemischen Therapeutin (KiB)</li>
                <li>Ausbildung zur Systemischen Beraterin (KiB)</li>
                <li>
                  Bis heute Therapeutin und Behandlungsleitung in einer
                  Jugendhilfeeinrichtung mit Fachklinik
                </li>
                <li>
                  bis 2023 Pädagogin im Betreuungsdienst der Kinder- und
                  Jugendpsychiatrie
                </li>
                <li>Studium der Rehabilitationswissenschaften (M.A.)</li>
                <li>
                  Bis 2016 Pädagogin im Betreuungsdienst in der
                  Erwachsenenpsychiatrie
                </li>
                <li>Studium der Rehabilitationspädagogik (B.A.)</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
