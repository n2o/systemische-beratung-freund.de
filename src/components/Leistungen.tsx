// import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
const Button = dynamic(
  () => import("@/components/Button").then((module) => module.Button),
  {
    ssr: false,
  }
)

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

function Leistung({ leistung }) {
  const { heading, href } = leistung
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="relative rounded-xl bg-slate-100 p-6 shadow-xl shadow-slate-900/10 transition duration-300 ease-in hover:shadow-2xl">
        <p className="text-lg font-medium tracking-tight text-slate-900">
          {heading}
        </p>
        <Button className="text-sm" variant="outline" href={href}>
          Zur Beschreibung
        </Button>
      </div>
    </motion.div>
  )
}

export function Leistungen() {
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
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
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
