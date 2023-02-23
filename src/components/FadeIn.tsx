import { Transition } from "@headlessui/react"
import { useInView } from "framer-motion"
import { Fragment } from "react"

export function FadeIn({ parentRef, children }) {
  return (
    <Transition
      as={Fragment}
      show={useInView(parentRef, { once: true })}
      enter="transform transition duration-[600ms]"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {children}
    </Transition>
  )
}
