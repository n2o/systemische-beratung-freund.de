// Single source of truth for practice facts. Change contact data, prices
// and services here only.

const phoneE164 = "+4917662597217"
const city = "Remscheid"

export const site = {
  name: "Praxis für Systemische Beratung und -Therapie Lisa Freund",
  shortName: "Lisa Freund",
  tagline: "Systemische Beratung & Therapie",
  headline: `Systemische Beratung und Therapie in ${city}`,
  description:
    "Systemische Beratung und Therapie in Remscheid für Einzelpersonen, Paare, Familien und Teams. Kostenfreies telefonisches Informationsgespräch.",
  url: "https://systemische-beratung-freund.de",
  owner: "Lisa Freund",
  address: {
    street: "Westhauser Straße 39",
    zip: "42857",
    city,
    region: "Nordrhein-Westfalen",
    country: "DE",
  },
  phone: {
    display: "0176 62597217",
    e164: phoneE164,
    href: `tel:${phoneE164}`,
    sms: `sms:${phoneE164}`,
  },
  email: "info@systemische-beratung-freund.de",
  lasseBirthYear: 2018,
} as const

export const mailto = `mailto:${site.email}`

export const pages = {
  leistungen: { href: "/leistungen", label: "Leistungen" },
  ablauf: { href: "/therapie-und-ablauf", label: "Therapie und Ablauf" },
  honorar: { href: "/honorar", label: "Honorar und Modalitäten" },
  kontakt: { href: "/kontakt", label: "Kontakt" },
  impressum: { href: "/impressum", label: "Impressum" },
  datenschutz: { href: "/datenschutz", label: "Datenschutz" },
} as const

export const nav = [
  pages.leistungen,
  pages.ablauf,
  pages.honorar,
  pages.kontakt,
]
export const legalNav = [pages.impressum, pages.datenschutz]

export type ServiceId =
  | "wiedereingliederung"
  | "einzelberatung"
  | "paarberatung"
  | "familienberatung"
  | "teamberatung"
  | "tiergestuetzte-arbeit"

export type Service = {
  id: ServiceId
  name: string
  heading: string
  /** Short label for the system diagram node. */
  node: string
  /** Price line for the Honorar page; omitted when not billed separately. */
  price?: { amount: string; unit: string; rhythm?: string }
}

export const services: Service[] = [
  {
    id: "wiedereingliederung",
    heading: "Wiedereingliederung nach stationärem Aufenthalt",
    name: "Wiedereingliederung",
    node: "Neu anfangen",
  },
  {
    id: "einzelberatung",
    heading: "Individuelle Themen und Herausforderungen",
    name: "Einzelberatung / -therapie",
    node: "Einzeln",
    price: { amount: "80 €", unit: "60 Minuten", rhythm: "alle 1–2 Wochen" },
  },
  {
    id: "paarberatung",
    heading: "Konflikte innerhalb einer Beziehung",
    name: "Paarberatung / -therapie",
    node: "Als Paar",
    price: { amount: "120 €", unit: "90 Minuten", rhythm: "alle 1–2 Wochen" },
  },
  {
    id: "familienberatung",
    heading: "Gemeinsam Herausforderungen meistern",
    name: "Familienberatung / -therapie",
    node: "Als Familie",
    price: { amount: "120 €", unit: "90 Minuten", rhythm: "alle 2–4 Wochen" },
  },
  {
    id: "teamberatung",
    heading: "Zusammenarbeit verbessern",
    name: "Teamberatung",
    node: "Im Team",
    price: {
      amount: "200 €",
      unit: "90 Minuten",
      rhythm: "individuelle Taktung",
    },
  },
  {
    id: "tiergestuetzte-arbeit",
    heading: "Tierische Unterstützung",
    name: "Tiergestützte Arbeit",
    node: "Mit Lasse",
    price: { amount: "+ 20 €", unit: "pro Sitzung" },
  },
]

export const serviceHref = (id: ServiceId) => `${pages.leistungen.href}#${id}`

export const servicePrice = (id: ServiceId) =>
  services.find((s) => s.id === id)!.price!

export const infoCall = {
  name: "Informationsgespräch",
  price: "kostenfrei",
  detail: "per Telefon, bis 60 Minuten",
}
