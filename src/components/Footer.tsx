import { Container } from "@/components/Container"
import { Logo } from "@/components/Logo"
import { NavLink } from "@/components/NavLink"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-12 bg-slate-50">
      <Container>
        <div className="py-16">
          <div className="w-full mx-auto flex justify-center">
            <Link href="/">
              <Logo className="" />
            </Link>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/impressum">Impressum</NavLink>
              <NavLink href="/datenschutz">Datenschutz</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6"></div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            &copy; {new Date().getFullYear()} Praxis für Systemische Beratung
            und -Therapie Lisa Freund.
          </p>
        </div>
      </Container>
    </footer>
  )
}
