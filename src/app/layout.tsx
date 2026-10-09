import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { services, site } from "@/config/site"
import { defaultTitle } from "@/lib/metadata"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata, Viewport } from "next"
import { Atkinson_Hyperlegible_Next } from "next/font/google"
import "../styles/tailwind.css"

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  variable: "--font-atkinson",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: `%s | ${site.shortName}`,
    default: defaultTitle,
  },
  description: site.description,
  formatDetection: { telephone: false },
}

// Static pages show the current year (footer, Lasse's age): refresh daily.
export const revalidate = 86400

export const viewport: Viewport = { themeColor: "#0e3f29" }

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone.e164,
  email: site.email,
  image: `${site.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: site.address.city,
  founder: { "@type": "Person", name: site.owner },
  knowsAbout: services.map((s) => s.name),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={atkinson.variable}>
      <body className="flex flex-col">
        <a
          href="#inhalt"
          className="sr-only z-50 rounded-full bg-sun px-5 py-3 font-semibold text-fir focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
