import { Container } from "@/components/Container"
import { PracticeAddress } from "@/components/ContactActions"
import { LogoMark } from "@/components/Logo"
import { legalNav, nav, site } from "@/config/site"
import { keepTogether } from "@/lib/utils"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-24 bg-fir text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex gap-4">
          <LogoMark className="size-12 shrink-0" />
          <p className="max-w-xs font-semibold leading-snug">
            {keepTogether(site.name)}
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-base font-semibold text-paper">
            Kontakt
          </h2>
          <PracticeAddress linkClassName="underline" />
        </div>

        <nav aria-label="Fußzeile">
          <h2 className="mb-3 text-base font-semibold text-paper">
            Seiten
          </h2>
          <ul className="space-y-1">
            {[...nav, ...legalNav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline decoration-transparent hover:decoration-current"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="hairline-t border-paper/20 py-6 text-sm text-paper/80">
        © {new Date().getFullYear()} {keepTogether(site.name)}
      </Container>
    </footer>
  )
}
