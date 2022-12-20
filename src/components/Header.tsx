import { Container } from "@/components/Container"
import { Logo } from "@/components/Logo"
import { NavLink } from "@/components/NavLink"
import { Popover, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import Link from "next/link"
import { Fragment } from "react"

function MobileNavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block w-full rounded p-2 hover:bg-slate-100 hover:underline"
    >
      {children}
    </Link>
  )
}

function MobileNavIcon({ open }) {
  return (
    <div className="h-3.5 w-3.5 overflow-visible stroke-slate-700">
      <Bars3Icon
        className={clsx(
          "h-5 origin-center transition",
          open && "hidden scale-90 opacity-0"
        )}
      />
      <XMarkIcon
        className={clsx(
          "h-5 origin-center transition",
          !open && "hidden scale-90 opacity-0"
        )}
      />
    </div>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/leistungen">Leistungen</MobileNavLink>
            <MobileNavLink href="/team">Team</MobileNavLink>
            <MobileNavLink href="/anfahrt">Anfahrt</MobileNavLink>
            <MobileNavLink href="#kontakt">Kontakt</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-16 w-auto md:h-28" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/leistungen">Leistungen</NavLink>
              <NavLink href="/team">Team</NavLink>
              <NavLink href="/anfahrt">Anfahrt</NavLink>
              <NavLink href="#kontakt">Kontakt</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
