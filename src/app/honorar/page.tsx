import { H1 } from "@/components/Headings"
import { HonorarPage } from "@/components/HonoroarPage"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Honorar & Modalitäten",
}

export default function Page() {
  return (
    <>
      <H1 heading="Honorar und Modalitäten"></H1>
      <HonorarPage />
    </>
  )
}
