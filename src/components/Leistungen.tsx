import { FadeIn } from "@/components/FadeIn"
import { H2Heading, H2HeadingLeft } from "@/components/Headings"
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline"
import { useRef } from "react"

const leistungen = [
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

function Leistung({ leistung }) {
  const ref = useRef(null)
  return (
    <span ref={ref}>
      <FadeIn parentRef={ref}>
        <span>
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <leistung.icon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            {leistung.name}
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">
            {leistung.description}
          </dd>
        </span>
      </FadeIn>
    </span>
  )
}

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
            {leistungen.map((leistung, leistungIndex) => (
              <div key={leistungIndex} className="relative pl-16">
                <Leistung leistung={leistung} />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

function LeistungsBeschreiber({
  heading = "",
  leadHeading = "",
  childrenLeft = undefined,
  childrenRight = undefined,
}) {
  return (
    <div className="mb-10 overflow-hidden bg-white py-8 px-6 lg:px-8 xl:py-12">
      <div className="mx-auto max-w-max lg:max-w-7xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <H2HeadingLeft leadHeading={leadHeading} heading={heading} />
        </div>
        <div className="relative">
          <svg
            className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-lg prose-indigo text-gray-700 lg:max-w-none">
                {childrenLeft}
              </div>
              <div className="prose prose-lg prose-indigo mt-6 text-gray-700 lg:mt-0">
                {childrenRight}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Einzelberatung() {
  const childrenLeft = (
    <>
      <p>
        Sie haben das Gefühl auf der Stelle zu treten, ein Thema aus ihrer
        Vergangenheit holt sie immer wieder ein, Sie stehen vor einer wichtigen
        Entscheidung. Sie sind unzufrieden mit sich selbst oder befinden sich in
        einer Krise, aus der Sie keinen Ausweg sehen.
      </p>
      <p>
        Dann kommen Sie mit ihrem persönlichen Anliegen zu mir in die
        Einzelberatung und wir machen uns gemeinsam auf den Weg hin zu einer
        Zukunft gemäß ihrer Wünsche und Bedürfnisse. Erwecken Sie mit mir an
        Ihrer Seite ihre Ressourcen und Kräfte, wagen Sie neue Perspektiven
        einzunehmen und lernen Sie sich selbst als wichtigstes Werkzeug ihres
        Lebens anzuwenden.
      </p>
    </>
  )
  const childrenRight = (
    <>
      <p>
        Dem vorweg steht für mich eine wertschätzende und vertrauensvolle
        Beziehung. Lernen Sie mich in einem ersten persönlichen / telefonischen
        Gespräch kennen und überprüfen Sie für sich, ob Sie sich eine
        Zusammenarbeit mit mir vorstellen können.
      </p>
    </>
  )

  return (
    <LeistungsBeschreiber
      leadHeading="Einzelberatung"
      heading="Individuelle Themen und Herausforderungen"
      childrenLeft={childrenLeft}
      childrenRight={childrenRight}
    />
  )
}

export function Paarberatung() {
  const childrenLeft = (
    <p>
      Bestimmen Gefühle wie Enttäuschung, Wut, Trauer, Frust, Müdigkeit, Sorge
      oder Eifersucht den Alltag ihrer Partnerschaft kann es hilfreich sein in
      neutraler, geschützter Atmosphäre mit Unterstützung eines objektiven
      Dritten darüber ins Gespräch zu kommen. Weg von der Schuldfrage, sondern
      in dem Bewusstsein, dass zu einer Partnerschaft zwei gehören, möchte ich
      Ihnen dazu verhelfen sich ihrer persönlichen Wünsche und Bedürfnisse
      gewahr zu werden und darüber in den Austausch zu kommen. Wagen Sie mit mir
      einen Perspektivwechsel, um einen rationalen Blick auf ihre Probleme zu
      entwickeln und im Miteinander konstruktive Lösungsstrategien zu
      erarbeiten.
    </p>
  )
  const childrenRight = (
    <p>
      Vereinbaren Sie gern einen Kennenlerntermin mit mir, um herauszufinden, ob
      ich für Sie die passende Wegbegleiterin bin.
    </p>
  )
  return (
    <LeistungsBeschreiber
      leadHeading="Paarberatung"
      heading="Konflikte innerhalb einer Beziehung"
      childrenLeft={childrenLeft}
      childrenRight={childrenRight}
    />
  )
}
