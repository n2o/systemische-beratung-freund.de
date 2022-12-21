import { phone } from "@/common"
import { Container } from "@/components/container"
import { Karte } from "@/components/karte"
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const sprechzeiten = [
  { tag: "Mo", zeit: "8 - 14 Uhr" },
  { tag: "Di", zeit: "8 - 18 Uhr" },
  { tag: "Mi", zeit: "8 - 14 Uhr" },
  { tag: "Do", zeit: "8 - 17 Uhr" },
  { tag: "Fr", zeit: "8 - 13 Uhr" },
]

const days = ["Montags", "Dienstags", "Mittwochs", "Donnerstags", "Freitags"]
const times = ["8-14 Uhr", "8-18 Uhr", "8-14 Uhr", "8-17 Uhr", "8-13 Uhr"]

export function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4  sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {days.map((day, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    {times.map((time, index) => (
                      <td
                        key={index}
                        className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                      >
                        {time}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Sprechzeiten({ ...props }) {
  return (
    <section {...props}>
      <h3>Sprechzeiten</h3>
      <ul className="list-disc pl-7">
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
            <Sprechzeiten className="mx-3" />
            <div className="grid grid-cols-1 pt-5 sm:grid-cols-2 md:grid-cols-3">
              <div className={classes}>
                <Link href={"tel:" + phone} className="link mx-auto">
                  <PhoneIcon className="mx-auto h-6" />
                  {phone}
                </Link>
              </div>
              <div className={classes}>
                <Link
                  href="mailto:gebhardtundschrader@outlook.de"
                  className="link mx-auto"
                >
                  <EnvelopeIcon className="mx-auto h-6" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: "gebhardtundschrader&hairsp;@outlook.de",
                    }}
                  ></span>
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
          </div>
        </Karte>
      </Container>
    </div>
  )
}
