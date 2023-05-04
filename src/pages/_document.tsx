import React from "react"
import { Head, Html, Main, NextScript } from "next/document"

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
