import { cn } from "@/lib/utils"
import type { ServiceId } from "@/config/site"

// Genogram-style glyphs on a 48×48 grid: circles are people, the bracket is a
// partnership, the diamond is Lasse. Stroke comes from the parent.
export const glyphs: Record<ServiceId, React.ReactNode> = {
  wiedereingliederung: (
    <>
      <circle cx="31" cy="24" r="9" />
      <path d="M5 24h14M15 19.5l4.5 4.5-4.5 4.5" />
    </>
  ),
  einzelberatung: <circle cx="24" cy="24" r="10" />,
  paarberatung: (
    <>
      <circle cx="13" cy="17" r="7" />
      <circle cx="35" cy="17" r="7" />
      <path d="M13 24v10h22V24" />
    </>
  ),
  familienberatung: (
    <>
      <circle cx="13" cy="11" r="6" />
      <circle cx="35" cy="11" r="6" />
      <path d="M13 17v7h22v-7M24 24v7" />
      <circle cx="24" cy="37" r="6" />
    </>
  ),
  teamberatung: (
    <>
      <circle cx="12" cy="12" r="5" />
      <circle cx="36" cy="12" r="5" />
      <circle cx="12" cy="36" r="5" />
      <circle cx="36" cy="36" r="5" />
      <path d="M17 12h14M36 17v14M31 36H17M12 31V17" />
    </>
  ),
  "tiergestuetzte-arbeit": (
    <>
      <circle cx="15" cy="19" r="8" />
      <path d="M21 25l6 6" />
      <path d="M34 25l7 7-7 7-7-7z" />
    </>
  ),
}

export function ServiceIcon({
  id,
  className,
}: {
  id: ServiceId
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("stroke-system", className)}
    >
      {glyphs[id]}
    </svg>
  )
}
