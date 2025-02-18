import { Container } from "@/components/Container"

export function H2({ heading = "", leadHeading = "", children }) {
  return (
    <div className="mx-auto max-w-4xl lg:text-center">
      <h2 className="text-lg font-semibold leading-8 tracking-tight">
        {leadHeading}
      </h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {heading}
      </p>
      <div className="mt-6 text-lg leading-8 text-gray-600">{children}</div>
    </div>
  )
}

export function H2Left({ heading = "", leadHeading = "" }) {
  return (
    <section className="max-w-prose text-base lg:max-w-none">
      <h2 className="font-semibold leading-6">{leadHeading}</h2>
      <p className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-900 sm:text-3xl">
        {heading}
      </p>
    </section>
  )
}

export function H1({
  heading = "",
  children,
  ...props
}: {
  heading: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mx-auto max-w-2xl md:text-center" {...props}>
      <h1 className="font-display text-3xl tracking-tight sm:text-4xl">
        {heading}
      </h1>
      {children && (
        <div className="mt-4 text-lg tracking-tight text-primary-dark">
          {children}
        </div>
      )}
    </Container>
  )
}
