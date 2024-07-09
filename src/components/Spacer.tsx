export type SpacerProps = {
  title: string
  className?: string
}

export function Spacer({ title, ...props }: SpacerProps) {
  return (
    <div {...props}>
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-base font-semibold leading-6 text-gray-400">
            {title}
          </span>
        </div>
      </div>
    </div>
  )
}
