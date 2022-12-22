import { phone } from "@/common"
import { Container } from "@/components/container"
import { Karte } from "@/components/karte"
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import Link from "next/link"

export const sprechzeiten = [
  { tag: "Mo", zeit: "8 - 14 Uhr" },
  { tag: "Di", zeit: "8 - 18 Uhr" },
  { tag: "Mi", zeit: "8 - 14 Uhr" },
  { tag: "Do", zeit: "8 - 17 Uhr" },
  { tag: "Fr", zeit: "8 - 13 Uhr" },
]

export function AdresseLink({ className = "", ...props }) {
  return (
    <Link
      href="https://goo.gl/maps/2m7HQbsNsRS4hLUK8"
      className={clsx("link mx-auto", className)}
      {...props}
    >
      <MapIcon className="mx-auto h-6" />
      <p>
        Kreisstr. 46a
        <br />
        37308 Schimberg OT Ershausen
      </p>
    </Link>
  )
}

export function MailLink({ className = "", ...props }) {
  return (
    <Link
      href="mailto:gebhardtundschrader@outlook.de"
      className={clsx("link mx-auto", className)}
      {...props}
    >
      <EnvelopeIcon className="mx-auto h-6" />
      <span
        dangerouslySetInnerHTML={{
          __html: "gebhardtundschrader&hairsp;@&hairsp;outlook.de",
        }}
      ></span>
    </Link>
  )
}

export function TelefonLink() {
  return (
    <Link href={"tel:" + phone} className="link mx-auto">
      <PhoneIcon className="mx-auto h-6" />
      {phone}
    </Link>
  )
}

export function Sprechzeiten({ className = "", listStyle = null, ...props }) {
  return (
    <section className={className} {...props}>
      <h3>Sprechzeiten</h3>
      <ul className={clsx({ "pl-7": !listStyle, "list-disc": !listStyle })}>
        {sprechzeiten.map(({ tag, zeit }, index) => (
          <li key={index} className="whitespace-nowrap">
            {tag}: {zeit}
          </li>
        ))}
      </ul>
    </section>
  )
}

export function KontaktKarte() {
  const heading = "Kontakt"
  const lead = "Haben Sie weitere Fragen? Dann kontaktieren Sie uns gerne!"

  const classes = "w-100 text-center pb-5 md:pb-0"

  return (
    <div className="bg-accent px-4 py-5" id="kontakt">
      <Container>
        <Karte heading={heading} lead={lead}>
          <div className="flex flex-col sm:flex-row">
            <Sprechzeiten
              className="mx-auto text-center text-primary"
              listStyle="list-none"
            />
            <div className="grid grid-cols-1 pt-5 sm:grid-cols-2 md:grid-cols-3">
              <div className={classes}>
                <TelefonLink />
              </div>
              <div className={classes}>
                <MailLink />
              </div>
              <div className={classes}>
                <AdresseLink />
              </div>
            </div>
          </div>
        </Karte>
      </Container>
    </div>
  )
}
