import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/tailwind.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Praxis für Systemische Beratung und -Therapie Lisa Freund",
    default: "Praxis für Systemische Beratung und -Therapie Lisa Freund",
  },
  description:
    "Willkommen in der Praxis für Systemische Beratung und -Therapie Lisa Freund",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={`h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01'] ${inter.className}`}
    >
      <body className="flex h-full flex-col">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
