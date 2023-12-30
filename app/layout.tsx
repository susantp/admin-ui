import "@/styles/globals.css"
import 'react-toastify/dist/ReactToastify.min.css'
import React, {ReactNode} from "react"
import {Metadata} from "next"
import {NextFont} from "next/dist/compiled/@next/font"
import {Roboto} from "next/font/google"

import {Toaster} from "@/components/ui/toaster"
import Providers from "@/app/providers"
import {ToastContainer} from "react-toastify";

const roboto: NextFont = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Frontend Boilerplate NextJS",
  description: "Frontend boilerplate application using NextJS",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({children}: RootLayoutProps): ReactNode {
  return (
    <html lang="en">
    <body
      className={`${roboto.className} bg-background`}
      suppressHydrationWarning
    >
    <Providers>{children}</Providers>
    <Toaster/>
    <ToastContainer/>
    </body>
    </html>
  )
}
