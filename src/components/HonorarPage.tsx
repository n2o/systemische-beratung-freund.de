import { keepTogether } from "@/lib/utils"
import { Container } from "@/components/Container"
import { ServiceIcon } from "@/components/ServiceGlyph"
import { infoCall, services } from "@/config/site"
import { PhoneIcon } from "lucide-react"

const modalitaeten = [
  {
    title: "Zahlungsmodalitäten",
    paragraphs: [
      "Einzelne Sitzungen sind entweder unmittelbar nach dem Termin in bar oder per Banküberweisung innerhalb von 14 Tagen zu begleichen.",
      "Werden vorab mehr als drei Sitzungen vereinbart, erfolgt eine Rechnungsstellung zum Monatsende. Diese kann ebenfalls sowohl in bar, als auch per Banküberweisung innerhalb von 14 Tagen beglichen werden.",
    ],
  },
  {
    title: "Kostenübernahme",
    paragraphs: [
      "Eine Abrechnung der Kosten über die Krankenkasse ist zurzeit nicht möglich.",
      "Generell handelt es sich bei Paar- und Familientherapien um keine Kassenleistungen. Folglich werden diese von keiner gesetzlichen Krankenkasse übernommen.",
    ],
  },
  {
    title: "Sitzungsbegebenheiten",
    paragraphs: [
      "Die Sitzungen finden entweder in meinen Praxisräumen, in Ihrem Zuhause oder in Bewegung an einem neutralen Ort statt.",
    ],
  },
  {
    title: "Online-Sitzungen",
    paragraphs: [
      "Psychotherapie via Internet ist im deutschsprachigen Raum seit 2021 unter bestimmten Voraussetzungen möglich.",
    ],
  },
  {
    title: "Absagen und Verschiebungen",
    paragraphs: [
      "Eine Terminabsage muss bis spätestens 48 Stunden im Voraus erfolgen. Erfolgt die Stornierung einer Sitzung nicht oder nach Ablauf der zeitlichen Frist, wird der Termin zum vollen Sitzungssatz in Rechnung gestellt.",
    ],
  },
  {
    title: "Verschwiegenheit & Datenschutz",
    paragraphs: [
      "Im Setting von Beratung und Therapie sind Verschwiegenheit und Diskretion unabdingbar. Hiermit sichere ich meinen Klienten zu, dass ich die Inhalte unserer Gespräche zu keiner Zeit ohne ihr Einverständnis an Dritte weitergebe. Auch dann nicht, wenn es sich bei diesen um Angehörige oder Personen anderer Gesundheitsberufe handelt, die evtl. an der Behandlung der Klienten beteiligt sind.",
    ],
  },
  {
    title: "Kommunikation",
    paragraphs: [
      "Bitte haben Sie dafür Verständnis, dass jegliche Kommunikation außerhalb der Sitzungen aufgrund der geltenden Datenschutzbestimmungen lediglich telefonisch, per SMS oder E-Mail erfolgt. Nach Möglichkeit sollten Sie auf das Versenden persönlicher Dokumente verzichten. Lassen Sie mir diese gern in der nächsten Sitzung zukommen.",
    ],
  },
]

const rows = [
  {
    id: "info",
    icon: <PhoneIcon aria-hidden="true" className="size-6" />,
    name: infoCall.name,
    amount: infoCall.price,
    unit: infoCall.detail,
    rhythm: "–",
  },
  ...services.flatMap((s) =>
    s.price
      ? [
          {
            id: s.id,
            icon: <ServiceIcon id={s.id} className="size-8" />,
            name: keepTogether(s.name),
            amount: s.price.amount,
            unit: s.price.unit,
            rhythm: s.price.rhythm ?? "–",
          },
        ]
      : [],
  ),
]

export function HonorarPage() {
  return (
    <>
      <section aria-labelledby="honorare" className="pb-16 md:pb-20">
        <Container>
          <h2 id="honorare" className="sr-only">
            Honorare
          </h2>
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Honorare</caption>
            <thead>
              <tr className="hairline-b text-sm text-muted-foreground">
                <th scope="col" className="py-3 pr-6 font-semibold">
                  Leistung
                </th>
                <th scope="col" className="py-3 pr-6 font-semibold">
                  Honorar
                </th>
                <th
                  scope="col"
                  className="py-3 pr-6 font-semibold max-md:hidden"
                >
                  Dauer
                </th>
                <th scope="col" className="py-3 font-semibold max-md:hidden">
                  Empfohlener Rhythmus
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="hairline-b">
                  <th scope="row" className="py-5 pr-6 font-semibold text-fir">
                    <span className="flex items-center gap-4">
                      <span className="flex size-8 shrink-0 items-center justify-center">
                        {r.icon}
                      </span>
                      <span>
                        {r.name}
                        <span className="block font-normal text-muted-foreground md:hidden">
                          {[r.unit, r.rhythm]
                            .filter((v) => v !== "–")
                            .join(", ")}
                        </span>
                      </span>
                    </span>
                  </th>
                  <td className="py-5 pr-6 align-top whitespace-nowrap tabular-nums md:align-middle">
                    {r.amount}
                  </td>
                  <td className="py-5 pr-6 max-md:hidden">{r.unit}</td>
                  <td className="py-5 max-md:hidden">{r.rhythm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>

      <section aria-labelledby="modalitaeten" className="pb-20 md:pb-28">
        <Container>
          <h2 id="modalitaeten" className="sr-only">
            Modalitäten
          </h2>
          <div className="grid gap-x-16 lg:grid-cols-2">
            {modalitaeten.map((m) => (
              <div key={m.title} className="hairline-t py-8">
                <h3 className="text-2xl">{m.title}</h3>
                <div className="mt-3 max-w-prose space-y-3">
                  {m.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
