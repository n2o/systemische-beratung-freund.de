import {
  BehandlungsraumEins,
  BehandlungsraumZwei,
  Empfang,
  Ruheraum,
  SportraumEins,
  SportraumZwei,
} from "@/images/praxis"
import Image from "next/image"

const files = [
  {
    title: "Behandlungsraum",
    source: BehandlungsraumEins,
  },
  {
    title: "Behandlungsraum 2",
    source: BehandlungsraumZwei,
  },
  {
    title: "Empfang",
    source: Empfang,
  },
  {
    title: "Ruheraum",
    source: Ruheraum,
  },
  {
    title: "Sportraum",
    source: SportraumEins,
  },
  {
    title: "Sportraum 2",
    source: SportraumZwei,
  },
]

export function Gallery() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      {files.map((file) => (
        <li key={file.source.src} className="relative">
          <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <Image
              src={file.source}
              alt={file.title}
              className="object-cover transition duration-100 group-hover:opacity-95"
            />
          </div>
          <p className="mt-2 block truncate text-center text-sm font-medium text-gray-900">
            {file.title}
          </p>
        </li>
      ))}
    </ul>
  )
}

export function PraxisBilder() {
  return (
    <section>
      <h3>Praxis</h3>
      <Gallery />
    </section>
  )
}
