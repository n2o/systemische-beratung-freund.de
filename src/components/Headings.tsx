import { Container } from "@/components/Container"

export function PageHeader({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <Container className="pt-16 pb-12 md:pt-24 md:pb-16">
      <h1 className="max-w-3xl text-display">{title}</h1>
      {children && (
        <div className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {children}
        </div>
      )}
    </Container>
  )
}
