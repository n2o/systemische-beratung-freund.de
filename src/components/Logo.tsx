import { site } from "@/config/site"
import { cn } from "@/lib/utils"

const PETALS = [
  "M50 45C40 34.36 40 17.64 50 7C60 17.64 60 34.36 50 45Z",
  "M45.24 48.45C32.57 54.85 17.5 49.96 11.01 37.33C23.68 30.93 38.75 35.83 45.24 48.45Z",
  "M54.76 48.45C61.25 35.83 76.32 30.93 88.99 37.33C82.5 49.96 67.43 54.85 54.76 48.45Z",
  "M46.17 53.21C44.98 66.61 33.52 76.23 20.12 75.07C21.31 61.67 32.77 52.06 46.17 53.21Z",
  "M53.83 53.21C67.23 52.06 78.69 61.67 79.88 75.07C66.48 76.23 55.02 66.61 53.83 53.21Z",
  "M50 50V95",
]
const DOTS = [
  [27.5, 11.03],
  [72.5, 11.03],
  [5, 50],
  [95, 50],
  [27.5, 88.97],
  [72.5, 88.97],
]

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <g strokeWidth={4.5}>
        {PETALS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {DOTS.map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={3.6}
          fill="currentColor"
          stroke="none"
        />
      ))}
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3 text-fir", className)}>
      <LogoMark className="size-10 shrink-0" />
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-semibold tracking-tight">
          {site.shortName}
        </span>
        <span className="text-xs text-muted-foreground sm:text-sm">
          {site.tagline}
        </span>
      </span>
    </span>
  )
}
