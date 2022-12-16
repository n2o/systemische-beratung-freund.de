import { Container } from "@/components/Container"
import Link from "next/link"
import { Button } from "./Button"

const leistungen = [
  {
    heading: "Physiotherapie / Krankengymnastik",
    description: "",
    href: "/leistungen#physiotherapie",
  },
  {
    heading: "KG-ZNS nach Bobath für Erwachsene",
    description: "",
    href: "/leistungen#neurologische-behandlung",
  },
  {
    heading: "Manuelle Therapie / MT",
    description: "",
    href: "/leistungen#manuelle-therapie",
  },
  {
    heading: "Kiefergelenksbehandlung / CMD",
    description: "",
    href: "/leistungen#kiefergelenksbehandlung",
  },
  {
    heading: "Manuelle Lymphdrainage / MLD",
    description: "",
    href: "/leistungen#manuelle-lymphdrainage",
  },
  {
    heading: "Klassische Massagetherapie / KMT",
    description: "",
    href: "/leistungen#klassische-massagetherapie",
  },
  {
    heading: "Fango",
    description: "",
    href: "/leistungen#fango",
  },
]

export function Leistungen() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <div
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {leistungen.map((leistung, leistungIndex) => (
            <div key={leistungIndex}>
              <Link href={leistung.href}>
                <div className="relative rounded-xl bg-white p-6 shadow-xl shadow-slate-900/10 transition duration-300 ease-in hover:shadow-2xl">
                  <p className="text-lg tracking-tight text-slate-900">
                    {leistung.heading}
                  </p>
                  <Button
                    className="text-sm"
                    variant="outline"
                    href={leistung.href}
                  >
                    Zur Beschreibung
                  </Button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
