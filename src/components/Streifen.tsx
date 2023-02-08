import { Container } from "@/components/Container"
import { Karte } from "@/components/Karte"
import clsx from "clsx"

export function Streifen({
  className = "",
  heading = "",
  lead = "",
  children = null,
}) {
  return (
    <div className="px-4 py-5">
      <Container>
        <div className={clsx("my-12 md:flex", className)}>
          <Karte className="z-10 md:w-2/3" heading={heading} lead={lead}>
            {children}
          </Karte>
        </div>
      </Container>
    </div>
  )
}

export function Platzhalter() {
  return <div className="mt-7 h-24 w-full bg-slate-100"></div>
}
