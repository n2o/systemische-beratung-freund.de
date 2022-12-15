import gruppenfoto from "@/images/gruppenfoto.webp"
import Image from "next/image"
import Link from "next/link"

function ColorfulBackground() {
  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".4"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#69C9CD" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <div className="lg:pt-15 pb-16 text-center">
      <ColorfulBackground />
      <div className="flex flex-col md:flex-row">
        <section>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 md:pt-10 lg:text-7xl">
            Physiotherapie Ershausen
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Wir sind für Sie da, um Schmerzen zu lindern und Ihre Beweglichkeit
            zu verbessern.
          </p>
          <Link
            href="/leistungen"
            className="mt-3 inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-3.5 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Unsere Leistungen
          </Link>
        </section>
        <section className="mx-5 mt-10 md:mt-0 md:ml-5 md:mr-0">
          <Image
            className="rounded-lg border shadow-2xl md:rounded-l-lg"
            src={gruppenfoto}
            width={800}
            height={100}
            alt="Ein Teamfoto der fünf Physiotherapeutinnen"
          />
        </section>
      </div>
    </div>
  )
}
