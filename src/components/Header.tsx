export function HeaderOld() {
  return (
    <div className="h-96 w-full bg-[url('/img/sandbank.webp')] bg-cover bg-fixed bg-center">
      <div className="flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-40 py-12">
        <div className="text-center">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center bg-primary-light opacity-80 p-4 rounded-lg">
              <span className="text-xl font-semibold text-primary-dark md:text-2xl lg:text-3xl">
                &quot;Vielleicht stehen wir uns manchmal selbst im Weg, damit
                wir über unsere Bedürfnisse stolpern&quot;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Header() {
  return (
    <div className="h-96 w-full">
      <div className="flex h-full w-full items-center justify-center bg-slate-100 py-12">
        <div className="text-center">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center p-4 rounded-lg">
              <span className="text-xl font-semibold text-primary-dark md:text-2xl lg:text-3xl">
                &quot;Vielleicht stehen wir uns manchmal selbst im Weg, damit
                wir über unsere Bedürfnisse stolpern&quot;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PatternedHeader() {
  return (
    <header className="bg-slate-100 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+DQogIDxkZWZzPg0KICAgIDxwYXRoIGlkPSJwZXRhbCIgZD0iTTAgMCBRIDI1IC0yNSA1MCAwIFEgMjUgMjUgMCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgLz4NCiAgPC9kZWZzPg0KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiPg0KICAgIDx1c2UgaHJlZj0iI3BldGFsIiAvPg0KICAgIDx1c2UgaHJlZj0iI3BldGFsIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSkiIC8+DQogICAgPHVzZSBocmVmPSIjcGV0YWwiIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgLz4NCiAgICA8dXNlIGhyZWY9IiNwZXRhbCIgdHJhbnNmb3JtPSJyb3RhdGUoMTM1KSIgLz4NCiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjAuNzUiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIC8+DQogIDwvZz4NCjwvc3ZnPg==')] bg-repeat p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-4">
          &quot;Vielleicht stehen wir uns manchmal selbst im Weg, damit wir über
          unsere Bedürfnisse stolpern&quot;
        </h1>
        <p className="text-primary">
          Systemische Beratung für nachhaltige Lösungen.
        </p>
      </div>
    </header>
  )
}
