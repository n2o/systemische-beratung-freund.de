import { Head, Html, Main, NextScript } from "next/document"

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <meta
          name="description"
          content="Wir sind ein Team von erfahrenen Physiotherapeutinnen, die sich auf die Behandlung von Schmerzen und Bewegungsproblemen jeglicher Art spezialisiert haben."
        />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
