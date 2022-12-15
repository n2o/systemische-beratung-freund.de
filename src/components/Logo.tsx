import Image from "next/image"

export function Logo(props) {
  return (
    <Image src="/img/logo.svg" alt="Logo" width={30} height={40} {...props} />
  )
}
