import Image from "next/image"
import logo from "../images/logo.webp"

export function Logo(props) {
  return (
    <span {...props}>
      <div className="flex flex-row items-center">
        <Image
          src={logo.src}
          width={50}
          height={50}
          alt="Logo"
          className="me-2 p-1 rounded-full"
        />
        <span className="align-middle">
          Praxis für Systemische Beratung
          <br />
          und -Therapie Lisa Freund
        </span>
      </div>
    </span>
  )
}
