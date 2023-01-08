import { Container } from "@/components/Container"
import { Karte } from "@/components/Karte"
import womandog from "@/images/womandog.webp"
import Image from "next/image"

export function Kurzprofil() {
  return (
    <>
      <Container>
        <section className="content mt-5 mb-1">
          <div className="md:flex">
            <Karte className="md:mr-5" heading="Über Lisa">
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
              <p className="italic">
                Lisa Freund, verheiratet, freiberuflich tätig seit 2022
              </p>
              <h3 className="mt-5">Berufliche Erfahrungen</h3>
              <ul className="ml-5 list-inside list-disc">
                <li>In Ausbildung zur Systemischen Therapeutin (KiB)</li>
                <li>Ausbildung zur Systemischen Beraterin (KiB)</li>
                <li>Studium der Rehabilitationswissenschaften (M.A.)</li>
                <li>
                  Bis heute Pädagogin im Betreuungsdienst und Therapeutin in der
                  Kinder- und Jugendpsychiatrie
                </li>
                <li>
                  Bis 2016 Pädagogin im Betreuungsdienst in der
                  Erwachsenenpsychiatrie
                </li>
                <li>Studium der Rehabilitationspädagogik (B.A.)</li>
              </ul>
            </Karte>
            <Image
              className="image"
              src={womandog}
              alt="Bild von Lisa mit ihrem Hund Lasse"
              width={300}
              height={30}
            />
          </div>
        </section>
      </Container>
    </>
  )
}
