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
