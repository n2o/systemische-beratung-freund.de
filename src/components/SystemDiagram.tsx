import { glyphs } from "@/components/ServiceGlyph"
import { serviceHref, services, type ServiceId } from "@/config/site"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Genogram of the visitor: "Sie" is the index person (double circle), every
// service is a node linked to its section. Hover/focus turns a relationship
// line double, the genogram mark for a close bond.
type Node = { x: number; y: number; label: "above" | "below" }
type Layout = {
  w: number
  h: number
  c: { x: number; y: number }
  sie: number
  node: number
  glyph: number
  font: number
  nodes: Record<ServiceId, Node>
}

const LAYOUTS: Record<"wide" | "compact", Layout> = {
  wide: {
    w: 640,
    h: 560,
    c: { x: 320, y: 280 },
    sie: 46,
    node: 44,
    glyph: 1.5,
    font: 19,
    nodes: {
      wiedereingliederung: { x: 110, y: 120, label: "below" },
      einzelberatung: { x: 320, y: 78, label: "above" },
      paarberatung: { x: 530, y: 120, label: "below" },
      familienberatung: { x: 530, y: 430, label: "below" },
      teamberatung: { x: 320, y: 482, label: "below" },
      "tiergestuetzte-arbeit": { x: 110, y: 430, label: "below" },
    },
  },
  compact: {
    w: 360,
    h: 400,
    c: { x: 180, y: 200 },
    sie: 33,
    node: 30,
    glyph: 1,
    font: 15,
    nodes: {
      wiedereingliederung: { x: 52, y: 128, label: "below" },
      einzelberatung: { x: 180, y: 62, label: "above" },
      paarberatung: { x: 308, y: 128, label: "below" },
      familienberatung: { x: 308, y: 272, label: "below" },
      teamberatung: { x: 180, y: 338, label: "below" },
      "tiergestuetzte-arbeit": { x: 52, y: 272, label: "below" },
    },
  },
}

export function SystemDiagram({
  layout,
  className,
}: {
  layout: keyof typeof LAYOUTS
  className?: string
}) {
  const { w, h, c, sie, node, glyph, font, nodes } = LAYOUTS[layout]
  const edge = ({ x, y }: Node) => {
    const len = Math.hypot(x - c.x, y - c.y)
    const at = (d: number) =>
      `${c.x + ((x - c.x) * d) / len} ${c.y + ((y - c.y) * d) / len}`
    return `M${at(sie + 14)}L${at(len - node - 2)}`
  }

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="group"
      aria-label="Ihr System: Leistungen im Überblick"
      className={cn("stroke-system", className)}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {services.map((s, i) => {
        const n = nodes[s.id]
        const d = edge(n)
        return (
          <Link
            key={s.id}
            href={serviceHref(s.id)}
            aria-label={`${s.node}: ${s.name}`}
            className="group outline-none"
          >
            <path
              d={d}
              pathLength={1}
              className="draw-in stroke-fir transition-[stroke-width] duration-200 group-hover:[stroke-width:7px] group-focus-visible:[stroke-width:7px]"
              style={{ animationDelay: `${i * 90}ms` }}
            />
            <path
              d={d}
              className="stroke-paper [stroke-width:4px] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            />
            <circle cx={n.x} cy={n.y} r={node} className="fill-paper" />
            <circle
              cx={n.x}
              cy={n.y}
              r={node}
              strokeDasharray="4 6"
              className="stroke-fir opacity-0 group-focus-visible:opacity-100"
            />
            <g
              transform={`translate(${n.x - 24 * glyph} ${n.y - 24 * glyph}) scale(${glyph})`}
              className="stroke-fir"
            >
              {glyphs[s.id]}
            </g>
            <text
              x={n.x}
              y={n.label === "above" ? n.y - node - 10 : n.y + node + font + 8}
              textAnchor="middle"
              fontSize={font}
              className="fill-fir stroke-none font-semibold decoration-(length:--stroke) underline-offset-4 group-hover:underline group-focus-visible:underline"
            >
              {s.node}
            </text>
          </Link>
        )
      })}

      <g aria-hidden="true">
        <circle cx={c.x} cy={c.y} r={sie + 8} className="stroke-fir" />
        <circle cx={c.x} cy={c.y} r={sie} className="fill-sun stroke-fir" />
        <text
          x={c.x}
          y={c.y + sie * 0.2}
          textAnchor="middle"
          fontSize={sie * 0.56}
          className="fill-fir stroke-none font-bold"
        >
          Sie
        </text>
      </g>
    </svg>
  )
}
