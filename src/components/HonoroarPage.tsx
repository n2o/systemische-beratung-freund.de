"use client"
import { LeistungIcon } from "@/components/LeistungIcon"
import { faDog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  PhoneIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"
import clsx from "clsx"
import { Container } from "./Container"

type Action = {
  title: string
  body: React.ReactNode
  icon?: React.ElementType
  iconComponent?: React.ReactNode
}

const actions: Action[] = [
  {
    title: "Informationsgespräch",
    body: <>Per Telefon: kostenfrei bis 60 Minuten</>,
    icon: PhoneIcon,
  },
  {
    title: "Einzelsetting",
    body: (
      <p>
        Systemische Therapie im Einzelsetting: 80 € / 60 Minuten
        <br />
        (empfohlen werden Sitzungen alle 1-2 Wochen)
      </p>
    ),
    icon: CheckBadgeIcon,
  },
  {
    title: "Paarberatung/-therapie",
    body: (
      <p>
        Systemische Paarberatung/-therapie: 120 € / 90 Minuten
        <br />
        (empfohlen werden Sitzungen alle 1-2 Wochen)
      </p>
    ),
    icon: UsersIcon,
  },
  {
    title: "Familienberatung/-therapie",
    body: (
      <p>
        Systemische Familientherapie: 120 € / 90 Minuten
        <br />
        (empfohlen werden Sitzungen alle 2-4 Wochen)
      </p>
    ),
    icon: UserGroupIcon,
  },
  {
    title: "Teamberatung",
    body: (
      <p>
        Teamberatung: 200 € / 90 Minuten
        <br />
        (empfohlen wird eine individuelle Taktung)
      </p>
    ),
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Tiergestützte Arbeit",
    body: <>Pro Sitzung werden 20 € zusätzlich berechnet.</>,
    iconComponent: <FontAwesomeIcon icon={faDog} className="h-6 w-6" />,
  },
]

function Kosten() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={clsx(
            actionIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
            actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
            actionIdx === actions.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "group relative bg-white p-6",
          )}
        >
          <div className="mt-2">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              <span aria-hidden="true" className="absolute inset-0" />
              <LeistungIcon
                className="mb-1"
                Icon={action.icon}
                IconComponent={action.iconComponent}
              />
              {action.title}
            </h3>
            <div className="mt-2 text-sm text-gray-900">{action.body}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function Zahlungsmodalitaeten() {
  return (
    <div>
      <h2 className="text-lg font-semibold leading-8 tracking-tight">
        Zahlungsmodalitäten
      </h2>
      <p className="mt-2">
        Einzelne Sitzungen sind entweder unmittelbar nach dem Termin in bar oder
        per Banküberweisung innerhalb von 14 Tagen zu begleichen.
      </p>
      <p>
        Werden vorab mehr als drei Sitzungen vereinbart, erfolgt eine
        Rechnungsstellung zum Monatsende. Diese kann ebenfalls sowohl in bar,
        als auch per Banküberweisung innerhalb von 14 Tagen beglichen werden.
      </p>
    </div>
  )
}

function Kostenuebernahme() {
  return (
    <div>
      <h2 className="text-lg font-semibold leading-8 tracking-tight">
        Kostenübernahme
      </h2>
      <p className="mt-2">
        Eine Abrechnung der Kosten über die Krankenkasse ist zurzeit nicht
        möglich.
      </p>
      <p>
        Generell handelt es sich bei Paar- und Familientherapien um keine
        Kassenleistungen. Folglich werden diese von keiner gesetzlichen
        Krankenkasse übernommen.
      </p>
    </div>
  )
}

function OnlineSitzungen() {
  return (
    <div>
      <h2 className="text-lg font-semibold leading-8 tracking-tight">
        Online-Sitzungen
      </h2>
      <p className="mt-2">
        Psychotherapie via Internet ist im deutschsprachigem Raum seit 2021
        unter bestimmten Voraussetzungen möglich.
      </p>
    </div>
  )
}

function AbsagenVerschiebungen() {
  return (
    <div>
      <h2 className="text-lg font-semibold leading-8 tracking-tight">
        Absagen und Verschiebungen
      </h2>
      <p className="mt-2">
        Eine Terminabsage muss bis spätestens 48 Stunden im Voraus erfolgen.
        Erfolgt die Stornierung einer Sitzung nicht oder nach Ablauf der
        zeitlichen Frist, wird der Termin zum vollen Sitzungssatz in Rechnung
        gestellt.
      </p>
    </div>
  )
}

function Verschwiegenheit() {
  return (
    <div>
      <h2 className="text-lg font-semibold leading-8 tracking-tight">
        Verschwiegenheit & Datenschutz
      </h2>
      <p className="mt-2">
        Im Setting von Beratung und Therapie sind Verschwiegenheit und
        Diskretion unabdingbar. Hiermit sichere ich meinen Klienten zu, dass ich
        die Inhalte unserer Gespräche zu keiner Zeit ohne ihr Einverständnis an
        Dritte weitergebe. Auch dann nicht, wenn es sich bei diesen um
        Angehörige oder Personen anderer Gesundheitsberufe handelt, die evtl. an
        der Behandlung der Klienten beteiligt sind.
      </p>
    </div>
  )
}

function Kommunikation() {
  return (
    <div>
      <h2 className="text-lg font-semibold leading-8 tracking-tight">
        Kommunikation
      </h2>
      <p className="mt-2">
        Bitte haben Sie dafür Verständnis, dass jegliche Kommunikation außerhalb
        der Sitzungen aufgrund der geltenden Datenschutzbestimmungen lediglich
        telefonisch, per SMS oder E-Mail erfolgt. Nach Möglichkeit sollten Sie
        auf das Versenden persönlicher Dokumente verzichten. Lassen Sie mir
        diese gern in der nächsten Sitzung zukommen.
      </p>
    </div>
  )
}

function Sitzungsbegebenheiten() {
  return (
    <div>
      <h2 className="text-lg font-semibold leading-8 tracking-tight">
        Sitzungsbegebenheiten
      </h2>
      <p className="mt-2">
        Die Sitzungen finden entweder in meinen Praxisräumen, in Ihrem Zuhause
        oder in Bewegung an einem neutralen Ort statt.
      </p>
    </div>
  )
}

export function HonorarPage() {
  return (
    <div>
      <Container className="w-1/2 mt-3 mb-5 text-center">
        Finden Sie hier Informationen zu den Kosten und den Rahmenbedingungen
        meiner Beratung und Therapie.
      </Container>
      <div className="bg-slate-100">
        <div className="mx-auto px-3 py-5 lg:w-3/4">
          <Kosten />
        </div>
      </div>
      <Container>
        <div className="mt-10 flex flex-col space-y-3">
          <Zahlungsmodalitaeten />
          <Kostenuebernahme />
          <Sitzungsbegebenheiten />
          <OnlineSitzungen />
          <AbsagenVerschiebungen />
          <Verschwiegenheit />
          <Kommunikation />
        </div>
      </Container>
    </div>
  )
}
