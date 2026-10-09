export { cn } from "cn"

// Keep elided compounds together in display text ("Paarberatung / -therapie").
export const keepTogether = (text: string) =>
  text.replace(/ (\/|und) -/g, " $1\u00a0\u2011")
