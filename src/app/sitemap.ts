import { pages, site } from "@/config/site"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...Object.values(pages).map((page) => page.href)].map(
    (path) => ({ url: new URL(path, site.url).toString() }),
  )
}
