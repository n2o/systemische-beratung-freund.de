import { Container } from "@/components/Container"

export function H2Heading({
  heading = "",
  leadHeading = "",
  children = undefined,
}) {
  return (
    <div className="mx-auto max-w-4xl lg:text-center">
      <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
        {leadHeading}
      </h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {heading}
      </p>
      <div className="mt-6 text-lg leading-8 text-gray-600">{children}</div>
    </div>
  )
}

export function H2HeadingLeft({ heading = "", leadHeading = "" }) {
  return (
    <div className="max-w-prose text-base lg:max-w-none">
      <h2 className="font-semibold leading-6 text-primary">{leadHeading}</h2>
      <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
        {heading}
      </p>
    </div>
  )
}

export function H1Heading({ heading = "", children = null, ...props }) {
  return (
    <Container className="mx-auto max-w-2xl md:text-center" {...props}>
      <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
        {heading}
      </h1>
      <div className="mt-4 text-lg tracking-tight text-slate-700">
        {children}
      </div>
    </Container>
  )
}
