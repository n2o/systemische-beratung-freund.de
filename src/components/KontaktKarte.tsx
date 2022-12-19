import { address, email, fax, phone } from "@/common"
import { Container } from "@/components/Container"
import { Karte } from "@/components/Karte"
import {
  EnvelopeIcon,
  PhoneIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"

export function KontaktKarte() {
  const heading = "Kontakt"
  const lead = "Haben Sie weitere Fragen? Dann kontaktieren Sie uns gerne!"

  const classes = "w-100 text-center pb-3 md:pb-0"

  return (
    <div className="bg-accent px-4 py-5">
      <Container>
        <Karte heading={heading} lead={lead}>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className={classes}>
              <Link href={"tel:" + phone} className="link mx-auto">
                <PhoneIcon className="mx-auto h-6" />
                {phone}
              </Link>
            </div>
            <div className={classes}>
              <Link href={"mailto:" + email} className="link mx-auto">
                <EnvelopeIcon className="mx-auto h-6" />
                {email}
              </Link>
            </div>
            <div className={classes}>
              <Link href={"tel:" + fax} className="link mx-auto">
                <PrinterIcon className="mx-auto h-6" />
                {fax}
              </Link>
            </div>
          </div>
          <div
            className="pt-5"
            dangerouslySetInnerHTML={{ __html: address }}
          ></div>
        </Karte>
      </Container>
    </div>
  )
}
