import { PatternedHeader } from "@/components/Header"
import { LeistungsUebersicht } from "@/components/Leistungen"
import { Kurzprofil } from "@/components/Profil"
import Welcome from "@/components/Welcome"

export default function Page() {
  return (
    <div>
      <PatternedHeader />
      <Welcome />
      <Kurzprofil />
      <LeistungsUebersicht />
    </div>
  )
}
