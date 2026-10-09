import { site } from "@/config/site"
import { ImageResponse } from "next/og"

export const alt = site.name
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0e3f29",
          color: "#f5f7f6",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 120,
            borderRadius: 60,
            background: "#f2b33d",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            {site.headline}
          </div>
          <div style={{ fontSize: 36 }}>
            {`${site.owner} · ${site.phone.display}`}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
