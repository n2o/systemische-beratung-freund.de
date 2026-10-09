import { Button } from "@/components/ui/button"
import { infoCall, mailto, site } from "@/config/site"
import { cn } from "@/lib/utils"
import { MailIcon, PhoneIcon } from "lucide-react"

export function ContactActions({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="sun" size="lg">
          <a href={site.phone.href}>
            <PhoneIcon aria-hidden="true" />
            {site.phone.display}
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={mailto}>
            <MailIcon aria-hidden="true" />
            E-Mail schreiben
          </a>
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Gern auch per{" "}
        <a href={site.phone.sms} className="link-fir">
          SMS
        </a>
        . Das {infoCall.name} ist {infoCall.price}.
      </p>
    </div>
  )
}

export function PracticeAddress({
  className,
  linkClassName,
  children,
}: {
  className?: string
  linkClassName?: string
  children?: React.ReactNode
}) {
  return (
    <address className={cn("not-italic", className)}>
      {children}
      <p className="font-semibold">{site.owner}</p>
      <p>{site.address.street}</p>
      <p>
        {site.address.zip} {site.address.city}
      </p>
      <p className="mt-3">
        <a href={site.phone.href} className={linkClassName}>
          {site.phone.display}
        </a>
      </p>
      <p>
        <a href={mailto} className={cn("break-all", linkClassName)}>
          {site.email}
        </a>
      </p>
    </address>
  )
}
