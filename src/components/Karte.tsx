import clsx from "clsx"

export function Karte({ className, heading, lead, body }) {
  return (
    <div
      className={clsx(
        "my-7 rounded-lg bg-white px-4 py-5 shadow-2xl sm:px-6 md:mx-6",
        className
      )}
    >
      <h2 className="pb-3 text-3xl">{heading}</h2>
      <p>{lead}</p>
      <p>{body}</p>
    </div>
  )
}
