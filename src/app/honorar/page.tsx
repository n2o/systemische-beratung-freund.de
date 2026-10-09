import { HonorarPage } from "@/components/HonorarPage"
import { PageHeader } from "@/components/Headings"
import { site, pages } from "@/config/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: pages.honorar.label,
  description: `Honorar und Rahmenbedingungen der systemischen Beratung und Therapie in ${site.address.city}: Preise, Zahlung, Absagen, Online-Sitzungen und Verschwiegenheit.`,
  path: pages.honorar.href,
})

export default function Page() {
  return (
    <>
      <PageHeader title={pages.honorar.label}>
        Finden Sie hier Informationen zu den Kosten und den Rahmenbedingungen
        meiner Beratung und Therapie.
      </PageHeader>
      <HonorarPage />
    </>
  )
}
