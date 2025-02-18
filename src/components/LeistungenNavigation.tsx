const links = [
  { name: "Wiedereingliederung", href: "/leistungen#wiedereingliederung" },
  { name: "Einzelberatung / -therapie", href: "/leistungen#einzelberatung" },
  { name: "Paarberatung / -therapie", href: "/leistungen#paarberatung" },
  {
    name: "Familienberatung / -therapie",
    href: "/leistungen#familienberatung",
  },
  { name: "Teamberatung", href: "/leistungen#teamberatung" },
  { name: "Tiergestützte Arbeit", href: "/leistungen#tiergestuetzte-arbeit" },
]

export function LeistungenNavigation() {
  return (
    <div className="grid gap-4 grid-cols-3 md:grid-cols-6">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="mx-auto text-center py-1 px-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-lg duration-200 outline outline-1 outline-gray-200 flex items-center justify-center w-full"
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}
