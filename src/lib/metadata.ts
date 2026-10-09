import { site } from "@/config/site"
import type { Metadata } from "next"

export const defaultTitle = `${site.headline} | ${site.shortName}`

export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string
  description: string
  path: string
}): Metadata {
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    // A page-level openGraph replaces the root one entirely, so the shared
    // fields and the file-convention image are repeated here.
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: site.name,
      title: title ? `${title} | ${site.shortName}` : defaultTitle,
      description,
      url: path,
      images: ["/opengraph-image"],
    },
    twitter: { card: "summary_large_image" },
  }
}
