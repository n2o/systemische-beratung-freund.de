import { H2Heading } from "@/components/Headings"
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline"

const features = [
  {
    name: "Einzelberatung",
    description:
      "In einer Einzelberatung steht eine Person im Mittelpunkt. Hier geht es um individuelle Themen und Herausforderungen, die gemeistert werden müssen. Durch die systemische Sichtweise werden Zusammenhänge innerhalb des persönlichen Umfelds beleuchtet.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Paarberatung",
    description:
      "In der Paarberatung werden Konflikte und Probleme innerhalb einer Beziehung angesprochen und bearbeitet. Hier steht das gemeinsame Verständnis und die Stärkung der Beziehung im Fokus.",
    icon: LockClosedIcon,
  },
  {
    name: "Familienberatung",
    description:
      "In der Familienberatung geht es um die Interaktionen und Beziehungen innerhalb einer Familie. Hier werden Konflikte gelöst und Lösungen für Herausforderungen gefunden, um das Familienleben zu verbessern.",
    icon: ArrowPathIcon,
  },
  {
    name: "Teamberatung",
    description:
      "In der Teamberatung werden Prozesse und Interaktionen innerhalb eines Teams betrachtet. Hier geht es darum, die Zusammenarbeit zu verbessern und Konflikte zu lösen, um ein erfolgreiches Arbeiten zu ermöglichen",
    icon: FingerPrintIcon,
  },
]

export function LeistungsUebersicht() {
  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <H2Heading
          heading="Leistungsübersicht"
          leadHeading="Was kommt für Sie in Frage?"
        >
          <p>
            Finden Sie hier eine Übersicht über die Leistungen, die ich Ihnen
            anbieten kann. Sollten Sie Fragen haben, kontaktieren Sie mich
            gerne.
          </p>
        </H2Heading>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
