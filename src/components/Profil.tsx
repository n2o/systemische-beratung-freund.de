import { Container } from "@/components/Container"
import { site } from "@/config/site"
import lisa from "@/images/lisa.webp"
import Image from "next/image"

const vita = [
  "Ausbildung zur Systemischen Therapeutin (KiB)",
  "Ausbildung zur Systemischen Beraterin (KiB)",
  "Bis heute Therapeutin und Behandlungsleitung in einer Jugendhilfeeinrichtung mit Fachklinik",
  "Bis 2023 Pädagogin im Betreuungsdienst der Kinder- und Jugendpsychiatrie",
  "Studium der Rehabilitationswissenschaften (M.A.)",
  "Bis 2016 Pädagogin im Betreuungsdienst in der Erwachsenenpsychiatrie",
  "Studium der Rehabilitationspädagogik (B.A.)",
]

export function Kurzprofil() {
  return (
    <section aria-labelledby="ueber-mich" className="section-y">
      <Container className="grid items-start gap-12 lg:grid-cols-[2fr_3fr]">
        <Image
          src={lisa}
          alt={`Porträt von ${site.owner}`}
          sizes="(min-width: 1024px) 448px, 100vw"
          placeholder="blur"
          className="aspect-[4/5] w-full max-w-md rounded-lg object-cover"
        />
        <div>
          <h2 id="ueber-mich" className="text-title">
            Über mich
          </h2>
          <p className="mt-4 text-lg font-semibold text-fir">
            {site.owner}, verheiratet, freiberuflich tätig seit 2022.
          </p>
          <p className="mt-4 max-w-prose">
            In meiner beraterischen / therapeutischen Tätigkeit widme ich mich
            mit Leidenschaft, Empathie, Professionalität und Klarheit Einzelnen,
            Paaren, Familien und Teams, die auf der Suche nach Veränderung sind.
            Hierbei ist es mir einerseits wichtig auf kreative,
            unkonventionelle, alltagsnahe Methoden zurück zu greifen, mit dem
            Ziel, dass meine Klienten am Ende einer jeden Sitzung etwas
            Konkretes mit nach Hause nehmen. Zum anderen bin ich gern spontan
            und entwickle gemeinsam mit meinen Klienten individuell auf sie
            zugeschnittene Ideen und Wege.
          </p>
          <h3 className="mt-10 text-lg">Berufliche Erfahrungen</h3>
          <ul className="mt-4 hairline-l border-sage">
            {vita.map((item) => (
              <li key={item} className="relative py-1.5 pl-6">
                <span
                  aria-hidden="true"
                  className="absolute top-[0.95em] -left-[5px] size-2.5 rounded-full hairline border-fir bg-paper"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
