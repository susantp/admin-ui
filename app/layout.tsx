import "@/styles/globals.css"
import React from "react"
import {Metadata} from "next"
import {NextFont} from "next/dist/compiled/@next/font"
import {Inter} from "next/font/google"
import ErrorBoundary from "@/components/ErrorBoundary";

const inter: NextFont = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Frontend Boilerplate NextJS",
  description: "Frontend boilerplate application using NextJS",
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
    </body>
    </html>
  )
}
