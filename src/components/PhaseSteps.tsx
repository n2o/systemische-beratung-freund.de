import { cn } from "@/lib/utils"
import { infoCall, servicePrice } from "@/config/site"

const phases = [
  {
    title: "Kontakt aufnehmen",
    text: "Telefonisch, per SMS oder E-Mail – für einen Termin zum Informationsgespräch.",
  },
  {
    title: infoCall.name,
    text: `Kostenfrei ${infoCall.detail}. Wir lernen einander kennen: Was führt Sie zu mir, welche Ziele verfolgen Sie?`,
  },
  {
    title: "Entscheidung",
    text: "Sie entscheiden, ob Sie sich eine Zusammenarbeit vorstellen können. Ich prüfe, ob ich Ihren Auftrag annehmen kann.",
  },
  {
    title: "Sitzungen",
    text: `Einzeln meist ${servicePrice("einzelberatung").unit}, als Paar oder Familie ca. ${servicePrice("paarberatung").unit}. Dazwischen Impulse, Übungen und Experimente.`,
  },
]

// Phases as nodes on one line; the first node is the visitor's own step.
export function PhaseSteps() {
  return (
    <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
      {phases.map((p, i) => (
        <li
          key={p.title}
          className="group/phase relative pl-12 md:pt-14 md:pl-0"
        >
          <span
            aria-hidden="true"
            className="absolute top-1 left-[11px] h-[calc(100%+2.5rem)] w-(--stroke) bg-sage group-last/phase:hidden md:top-[11px] md:left-0 md:h-(--stroke) md:w-[calc(100%+2rem)]"
          />
          <span
            aria-hidden="true"
            className={cn(
              "absolute top-0 left-0 size-6 rounded-full hairline border-fir bg-paper",
              // Double circle: the genogram mark for the index person.
              i === 0 &&
                "ring-(length:--stroke) ring-fir ring-offset-2 ring-offset-paper",
            )}
          />
          <h3 className="text-lg">{p.title}</h3>
          <p className="mt-1 text-muted-foreground">{p.text}</p>
        </li>
      ))}
    </ol>
  )
}
