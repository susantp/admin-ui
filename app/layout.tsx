import "@/styles/globals.css"

import React from "react"
import { Metadata } from "next"
import { NextFont } from "next/dist/compiled/@next/font"
import { Inter } from "next/font/google"

import { Toaster } from "@/components/ui/toaster"
import Providers from "@/app/providers"

const inter: NextFont = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontend Boilerplate NextJS",
  description: "Frontend boilerplate application using NextJS",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className="">
      <body
        className={`${inter.className} bg-background`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
