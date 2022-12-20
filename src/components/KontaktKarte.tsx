import { email, phone } from "@/common"
import { Container } from "@/components/Container"
import { Karte } from "@/components/Karte"
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export function KontaktKarte() {
  const heading = "Kontakt"
  const lead = "Haben Sie weitere Fragen? Dann kontaktieren Sie uns gerne!"

  const classes = "w-100 text-center pb-5 md:pb-0"

  return (
    <div className="bg-accent px-4 py-5" id="kontakt">
      <Container>
        <Karte heading={heading} lead={lead}>
          <div className="grid grid-cols-2 pt-5 md:grid-cols-3">
            <div className={classes}>
              <Link href={"tel:" + phone} className="link mx-auto">
                <PhoneIcon className="mx-auto h-6" />
                {phone}
              </Link>
            </div>
            <div className={classes}>
              <Link href={"mailto:" + email} className="link mx-auto">
                <EnvelopeIcon className="mx-auto h-6" />
                <span dangerouslySetInnerHTML={{ __html: email}}></span>
              </Link>
            </div>
            <div className={classes}>
              <Link
                href="https://goo.gl/maps/2m7HQbsNsRS4hLUK8"
                className="link mx-auto"
              >
                <MapIcon className="mx-auto h-6" />
                <p>
                  Kreisstr. 46a
                  <br />
                  37308 Schimberg
                </p>
              </Link>
            </div>
          </div>
        </Karte>
      </Container>
    </div>
  )
}
