import { Container } from "@/components/Container"
import { H1 } from "@/components/Headings"
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt",
}

const phoneNumber = "0176 62579217"
function Number() {
  return (
    <a href={`tel:${phoneNumber}`} className="underline">
      {phoneNumber}
    </a>
  )
}

export default function Page() {
  return (
    <>
      <H1 heading="Kontakt" />
      <Container>
        <div>
          <p className="mt-2 text-lg leading-8 text-gray-600 md:w-3/4 mx-auto">
            Ich freue mich auf Ihre Kontaktaufnahme. Bitte nutzen Sie eine der
            folgenden Möglichkeiten, um mit mir in Verbindung zu treten. Ich
            werde mich so schnell wie möglich bei Ihnen melden.
          </p>
          <div className="mx-auto mt-12 md:max-w-4xl grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="flex gap-x-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary-dark">
                  <PhoneIcon aria-hidden="true" className="h-6 w-6 " />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-primary-dark">
                    Per Telefon: <br />
                    <Number />
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    Ich freue mich auf Ihren Anruf.
                  </p>
                  <p className="mt-4">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-sm font-semibold leading-6 text-primary"
                    >
                      Jetzt anrufen <span aria-hidden="true">&rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-x-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary-dark">
                  <EnvelopeIcon aria-hidden="true" className="h-6 w-6 " />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-primary-dark">
                    Per E-Mail:
                    <br />
                    <a
                      href="mailto:info@systemische-beratung-freund.de"
                      className="underline"
                    >
                      info@systemische-beratung-freund.de
                    </a>
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    Schreiben Sie mir eine E-Mail. Ich werde mich so schnell wie
                    möglich bei Ihnen melden.
                  </p>
                  <p className="mt-4">
                    <a
                      href="mailto:info@systemische-beratung-freund.de"
                      className="text-sm font-semibold leading-6 text-primary"
                    >
                      E-Mail schreiben <span aria-hidden="true">&rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
