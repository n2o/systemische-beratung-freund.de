import { SprinkleBackground } from "@/components/Hero"

export function Heading({ heading, children = null }) {
  return (
    <div className="isolate bg-white">
      <SprinkleBackground />
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-12 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-gray-900">{heading}</h1>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-600">
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}
