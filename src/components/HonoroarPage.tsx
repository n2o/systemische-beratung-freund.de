import {
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"
import clsx from "clsx"
import { Container } from "./Container"

const actions = [
  // {
  //   title: "Informationsgespräch",
  //   body: <>Per Telefon: kostenfrei bis 60 Minuten</>,
  //   icon: PhoneIcon,
  //   iconForeground: "text-teal-700",
  //   iconBackground: "bg-teal-50",
  // },
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
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Paarberatung/-therapie",
    body: (
      <p>
        Systemische Paarberatung/-therapie: 100 € / 90 Minuten
        <br />
        (empfohlen werden Sitzungen alle 1-2 Wochen)
      </p>
    ),
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Familienberatung/-therapie",
    body: (
      <p>
        Systemische Familientherapie: 100 € / 90 Minuten
        <br />
        (empfohlen werden Sitzungen alle 2-4 Wochen)
      </p>
    ),
    icon: UserGroupIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
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
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
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
          <div>
            <span
              className={clsx(
                action.iconBackground,
                action.iconForeground,
                "inline-flex rounded-lg p-3",
              )}
            >
              <action.icon aria-hidden="true" className="h-6 w-6" />
            </span>
          </div>
          <div className="mt-2">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              <span aria-hidden="true" className="absolute inset-0" />
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
        Psychotherapie via Internet ist im deutschsprachigem Raum nicht
        zulässig. Eine Systemische Beratung ist derweil möglich.
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

export function HonorarPage() {
  return (
    <div>
      <Container className="w-1/2 mt-3 mb-5 text-center">
        Finden Sie hier Informationen zu den Kosten und den Rahmenbedingungen
        meiner Beratung und Therapie. Ein Informationsgespräch per Telefon ist
        kostenfrei bis 60 Minuten.
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
          <OnlineSitzungen />
          <AbsagenVerschiebungen />
          <Verschwiegenheit />
          <Kommunikation />
        </div>
      </Container>
    </div>
  )
}
