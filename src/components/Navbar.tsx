import { ContactActions } from "@/components/ContactActions"
import { Container } from "@/components/Container"
import { Logo } from "@/components/Logo"
import { NavLink } from "@/components/NavLink"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { nav, site } from "@/config/site"
import { MenuIcon, PhoneIcon } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 hairline-b bg-paper">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.shortName}, zur Startseite`}>
          <Logo />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-7 font-semibold text-fir">
            {nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="sun" className="max-sm:size-11 max-sm:px-0">
            <a href={site.phone.href}>
              <PhoneIcon aria-hidden="true" />
              <span className="sr-only">Anrufen: </span>
              <span className="max-sm:sr-only">{site.phone.display}</span>
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon aria-hidden="true" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="gap-0 bg-paper p-6 pt-20">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Seiten der Praxis und Kontaktwege
              </SheetDescription>
              <nav aria-label="Mobile Navigation">
                <ul className="hairline-t text-xl font-semibold text-fir">
                  {nav.map((item) => (
                    <li key={item.href} className="hairline-b">
                      <SheetClose asChild>
                        <NavLink href={item.href} className="block py-4">
                          {item.label}
                        </NavLink>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <ContactActions className="mt-8" />
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
