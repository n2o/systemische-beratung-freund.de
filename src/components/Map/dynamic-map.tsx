import Leaflet from "leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect } from "react"
import * as ReactLeaflet from "react-leaflet"

import styles from "./map.module.css"

const { MapContainer } = ReactLeaflet

export default function Map({ children, className, width, height, ...rest }) {
  let mapClassName = styles.map

  if (className) {
    mapClassName = `${mapClassName} ${className}`
  }
  useEffect(() => {
    ;(async function init() {
      delete Leaflet.Icon.Default.prototype["_getIconUrl"]
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
        iconUrl: "leaflet/images/marker-icon.png",
        shadowUrl: "leaflet/images/marker-shadow.png",
      })
    })()
  }, [])

  return (
    <MapContainer className={mapClassName} {...rest} scrollWheelZoom={false}>
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  )
}
