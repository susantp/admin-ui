import "@/styles/globals.css"
import React from "react"
import { Metadata } from "next"
import { NextFont } from "next/dist/compiled/@next/font"
import { Inter } from "next/font/google"
import { cn } from "@/src/utils/helpers"

import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${cn(
          "min-h-screen bg-background antialiased"
        )}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>{children}</Providers>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
