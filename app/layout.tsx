import "@/styles/globals.css"

import React from "react"
import { Metadata } from "next"
import { NextFont } from "next/dist/compiled/@next/font"
import { Roboto } from "next/font/google"

import { cn } from "@/lib/utils"

import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const font: NextFont = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Frontend Boilerplate NextJS",
  description: "Frontend boilerplate application using NextJS",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} ${cn(
          "min-h-screen bg-background antialiased overflow-hidden"
        )}`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
