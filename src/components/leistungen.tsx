import { Container } from "@/components/container"
import { Karte } from "@/components/karte"
import { Transition } from "@headlessui/react"
import { useInView } from "framer-motion"
import dynamic from "next/dynamic"
import { Fragment, useRef } from "react"
const Button = dynamic(
  () => import("@/components/button").then((module) => module.Button),
  {
    ssr: false,
  }
)

const leistungen = [
  {
    heading: "Physiotherapie / Krankengymnastik",
    id: "physiotherapie",
    description:
      "...beinhaltet verschiedene Formen aktiver und passiver Bewegungstherapien, um Schmerzen zu lindern, gestörte oder verloren gegangene Funktionen wiederherzustellen und Ihr körperliches und geistiges Wohlbefinden zu erreichen. Sie arbeiten aktiv mit uns als Therapeuten zusammen, um den Heilungsprozess mitzugestalten.",
    href: "/leistungen#physiotherapie",
  },
  {
    heading: "KG-ZNS nach Bobath für Erwachsene",
    id: "neurologische-behandlung",
    description:
      "...findet bei Menschen mit angeborenen oder erworbenen Erkrankungen des Nervensystems seine Anwendung. Mit dem Ziel, die größtmögliche Selbständigkeit des Patienten zu erreichen, erarbeiten Therapeut und Patient alltagsbezogene Bewegungsabläufe.",
    href: "/leistungen#neurologische-behandlung",
  },
  {
    heading: "Manuelle Therapie / MT",
    id: "manuelle-therapie",
    description:
      "...dient der Behandlung von Störungen im Muskel-, Skelett- und Nervensystem. Nach einem Anfangsbefund wählt die Therapeutin Techniken aus, um Schmerzen und Bewegungseinschränkungen zu beheben.",
    href: "/leistungen#manuelle-therapie",
  },
  {
    heading: "Kiefergelenks&shy;behandlung / CMD",
    id: "kiefergelenksbehandlung",
    description:
      "...befasst sich mit der Untersuchung und Behandlung des Kiefergelenkes und der dazugehörigen Muskulatur. Spannungen und Fehlstellungen des Kiefers kann der Zahnarzt feststellen und dementsprechende Verordnungen ausstellen.",
    href: "/leistungen#kiefergelenksbehandlung",
  },
  {
    heading: "Manuelle Lymphdrainage / MLD",
    id: "manuelle-lymphdrainage",
    description:
      "...fördert den Abtransport von Gewebeflüssegkeit über das Lymphsystem. Dazu massiert die Therapeutin schonend das Gewebe entlang dem Verlauf der Lymphgefäße. Die Lymphdrainage wird an einem oder mehreren Körperteilen angewandt und dauert dementsprechend 30, 45 oder 60 min",
    href: "/leistungen#manuelle-lymphdrainage",
  },
  {
    heading: "Klassische Massagetherapie / KMT",
    id: "klassische-massagetherapie",
    description:
      "...lindert Schmerzen, verbessert die Beweglichkeit und kräftigt das Immunsystem. Verschiedene passive Techniken behandeln Spannungen in der Muskulatur und im Bindegewebe.",
    href: "/leistungen#klassische-massagetherapie",
  },
  {
    heading: "Fango",
    id: "fango",
    description:
      "...ist ein Heilschlamm, der in einer Packung auf ca. 50° erhitzt und auf den Körper aufgelegt wird. Sie entspannen in Decken eingehüllt, während die Wärme tief ins Gewebe eindringen kann, um Schmerzen zu lindern und die Durchblutung zu fördern.",
    href: "/leistungen#fango",
  },
]

export function LeistungsKarte() {
  return (
    <div className="bg-accent px-4 py-5">
      <Container>
        <Karte>
          <p>
            In unserer Praxis für Physiotherapie kommen verschiedene Techniken
            zum Einsatz, die die Bewegungs- und Funktionsfähigkeit des Körpers
            wiederherstellen bzw. erhalten.
          </p>
          <p>
            Im Folgenden geben wir Ihnen eine grobe Übersicht unserer
            Leistungen, die Sie vom Arzt verordnet bekommen und die von den
            Krankenkassen übernommen werden. Soweit Sie nicht von gesetzlichen
            Zuzahlungen befreit sind, leisten Sie eine Zuzahlung von 10% der
            Verordnung.
          </p>
          <p>
            Alle von uns angebotenen Leistungen können Sie selbstverständlich
            auch als Privatleistung erhalten.
          </p>
          <p>
            Gerne stellen wir Ihnen auch Gutscheine für unsere Leistungen aus.
          </p>
          <p>
            Wenn Sie Fragen haben, wenden Sie sich gerne persönlich oder
            telefonisch an uns oder lesen unter der Rubrik Fragen&Antworten nach
          </p>
        </Karte>
      </Container>
    </div>
  )
}

function Leistung({ leistung, withDescription = false }) {
  const { heading, href, description, id } = leistung
  const ref = useRef(null)

  return (
    <span ref={ref}>
      <Transition
        as={Fragment}
        show={useInView(ref, { once: true })}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 scale-50"
        enterTo="opacity-100 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <article
          id={id}
          className="relative rounded-xl bg-white p-6 shadow-xl shadow-slate-900/10 transition duration-300 ease-in hover:shadow-2xl"
        >
          <p
            className="hyphens-manual whitespace-normal font-bold tracking-tight text-slate-900 md:text-lg"
            dangerouslySetInnerHTML={{ __html: heading }}
          ></p>
          {!withDescription && (
            <Button className="text-sm" variant="outline" href={href}>
              Beschreibung
            </Button>
          )}
          {withDescription && <p>{description}</p>}
        </article>
      </Transition>
    </span>
  )
}

export function LeistungenLang() {
  return (
    <section
      id="leistungen"
      aria-label="Übersicht über unsere Leistungen"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3"
        >
          {leistungen.map((leistung, leistungIndex) => (
            <div key={leistungIndex}>
              <Leistung leistung={leistung} withDescription={true} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function LeistungenKurz() {
  return (
    <section
      id="leistungen"
      aria-label="Übersicht über unsere Leistungen"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            In unserer Praxis für Physiotherapie kommen verschiedene Techniken
            zum Einsatz, die die Bewegungs- und Funktionsfähigkeit des Körpers
            wiederherstellen bzw. erhalten.
          </p>
        </div>
        <div
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {leistungen.map((leistung, leistungIndex) => (
            <div key={leistungIndex}>
              <Leistung leistung={leistung} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
