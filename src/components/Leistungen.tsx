"use client"
import { Button } from "@/components/Button"
import { FadeIn } from "@/components/FadeIn"
import { H2, H2Left } from "@/components/Headings"
import {
  CheckBadgeIcon,
  FingerPrintIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"
import { useRef } from "react"

const leistungen = [
  {
    name: "Einzelberatung",
    link: "/leistungen#einzelberatung",
    description:
      "In einer Einzelberatung steht eine Person im Mittelpunkt. Hier geht es um individuelle Themen und Herausforderungen, die gemeistert werden müssen. Durch die systemische Sichtweise werden Zusammenhänge innerhalb des persönlichen Umfelds beleuchtet.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Paarberatung",
    link: "/leistungen#paarberatung",
    description:
      "In der Paarberatung werden Konflikte und Probleme innerhalb einer Beziehung angesprochen und bearbeitet. Hier steht das gemeinsame Verständnis und die Stärkung der Beziehung im Fokus.",
    icon: UsersIcon,
  },
  {
    name: "Familienberatung",
    link: "/leistungen#familienberatung",
    description:
      "In der Familienberatung geht es um die Interaktionen und Beziehungen innerhalb einer Familie. Hier werden Konflikte gelöst und Lösungen für Herausforderungen gefunden, um das Familienleben zu verbessern.",
    icon: UserGroupIcon,
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
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <leistung.icon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            {leistung.name}
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">
            <p>{leistung.description}</p>
            {leistung.link && (
              <Button href={leistung.link}>Mehr erfahren</Button>
            )}
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
        <H2
          heading="Leistungsübersicht"
          leadHeading="Was kommt für Sie in Frage?"
        >
          <p>
            Finden Sie hier eine Übersicht über die Leistungen, die ich Ihnen
            anbieten kann. Sollten Sie Fragen haben, kontaktieren Sie mich
            gerne.
          </p>
        </H2>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
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
  childrenLeft,
  childrenRight,
  ...props
}) {
  return (
    <div
      className="mb-10 overflow-hidden bg-white px-6 py-8 lg:px-8 xl:py-12"
      {...props}
    >
      <div className="mx-auto max-w-max lg:max-w-7xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <H2Left leadHeading={leadHeading} heading={heading} />
        </div>
        <div className="relative">
          <svg
            className="absolute right-0 top-0 -mr-20 -mt-20 hidden md:block md:[overflow-anchor:none]"
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
        Sie sind mit sich im hier und jetzt unzufrieden, zögern eine wichtige
        Entscheidung heraus, haben das Gefühl auf der Stelle zu treten oder
        sehen sich gar einer augenscheinlich unüberwindbaren Hürde gegenüber.
      </p>
      <p>
        Was auch immer Ihr guter Grund ist, sich Unterstützung zu suchen: Ich
        möchte Ihnen dabei eine Wegbegleiterin sein, die Ihnen wann immer
        notwendig, Halt und Sicherheit bietet. Wagen Sie mit mir an Ihrer Seite
        Ihren ganz persönlichen Entwicklungsprozess und lernen Sie sich als
        wichtigstes Werkzeug Ihres Lebens anzuwenden.
      </p>
    </>
  )
  const childrenRight = (
    <p>
      Hierfür benötige ich von Ihnen die Offenheit und den Mut andere
      Perspektiven einzunehmen, Neues auszuprobieren, sowie vertraute
      Verhaltensmuster und Glaubenssätze zu durchbrechen.
    </p>
  )

  return (
    <LeistungsBeschreiber
      id="einzelberatung"
      leadHeading="Einzelberatung / -therapie"
      heading="Individuelle Themen und Herausforderungen"
      childrenLeft={childrenLeft}
      childrenRight={childrenRight}
    />
  )
}

export function Paarberatung() {
  const childrenLeft = (
    <>
      <p>
        Konfliktfähige Themen in einer Partnerschaft sind vielfältig: fehlende
        Wertschätzung, Familienplanung, Eifersucht, Sexualität,
        Freizeitgestaltung, Kommunikation oder Loyalität seien hier nur
        beispielhaft aufgelistet.
      </p>
      <p>
        Entscheidend ist, wie wir damit umgehen. Erhalten jene Themen Raum zur
        Besprechung, nach Möglichkeit sachlich, auf Augenhöhe, konstruktiv und
        nur unter Voraussetzung, dass beide gemeinsam an einer Lösung arbeiten
        wollen, ist eine glückliche Paarbindung möglich. Gelingt es den Partnern
        jedoch nicht ein adäquates Setting für Konflikte und Belastungen zu
        schaffen, eigenständig Lösungen zu finden und/oder entwickelt einer oder
        beide Personen körperliche/psychische Symptome, ist es ratsam sich
        beraterische/therapeutische Hilfe zu suchen.
      </p>
    </>
  )
  const childrenRight = (
    <>
      <p>
        Ich biete Ihnen einen neutralen, sicheren Rahmen und unterstütze Sie
        dabei sich achtsam und wohlwollend einander zuzuwenden. Wir erarbeiten
        gemeinsam Ideen und Strategien zur Bewältigung Ihrer Konflikte, sodass
        Sie wieder mit mehr Leichtigkeit, Freude und Genuss durchs Leben gehen.
      </p>
      <p>
        Hierfür benötige ich von Ihnen die Bereitschaft gemeinsam mit Ihrem
        Partner Veränderung zu schaffen und die Offenheit und Ehrlichkeit
        Gefühle und Absichten beim Namen zu nennen.
      </p>
    </>
  )
  return (
    <LeistungsBeschreiber
      id="paarberatung"
      leadHeading="Paarberatung"
      heading="Konflikte innerhalb einer Beziehung"
      childrenLeft={childrenLeft}
      childrenRight={childrenRight}
    />
  )
}

export function Familienberatung() {
  const childrenLeft = (
    <>
      <p>
        Das Leben in einer Familie ist immer wieder eine Achterbahnfahrt. Neben
        Erfüllung, Liebe und Glück, sehen sich die Mitglieder gleichsam
        Herausforderungen in Form von Alltagsstruktur, Bedürfnisbefriedigung,
        Elternschaft vs. Partnerschaft, Erziehung, Schule u.v.m. ausgesetzt, die
        einem bei Zeit auch über den Kopf wachsen können.
      </p>
      <p>
        Sind es auf den ersten Blick häufig Belastungen der Einzelnen, die
        Familien antreiben sich Hilfe zu holen, wirken jene sich doch immer auch
        auf das System aus.
      </p>
    </>
  )
  const childrenRight = (
    <>
      <p>
        Wagen Sie mit mir die Einnahme anderer Perspektiven, lernen Sie sich und
        Ihre Familie neu kennen, als Team wertzuschätzen, entwickeln Sie mit
        meiner Unterstützung einen ressourcenorientierten Blick auf das große
        Ganze und generieren Sie für Ihre Familie passende Lösungswege. Damit
        Sie sich endlich wieder auf das Wesentliche besinnen können.
      </p>
      <p>
        Oftmals zeigen schon kleinste Veränderungen{" "}
        <span className="font-semibold">GROßE</span> Wirkung!
      </p>
    </>
  )
  return (
    <LeistungsBeschreiber
      id="familienberatung"
      leadHeading="Familienberatung / -therapie"
      heading="Gemeinsam Herausforderungen meistern"
      childrenLeft={childrenLeft}
      childrenRight={childrenRight}
    />
  )
}
