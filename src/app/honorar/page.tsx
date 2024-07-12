import { H1 } from "@/components/Headings"
import { HonorarPage } from "@/components/HonoroarPage"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Honorar & Kosten",
}

export default function Page() {
  return (
    <>
      <H1 heading="Honorar und Kosten"></H1>
      <HonorarPage />
    </>
  )
}
