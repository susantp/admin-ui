import "@/styles/globals.css"
import React from "react"
import {Metadata} from "next"
import {NextFont} from "next/dist/compiled/@next/font"
import {Inter} from "next/font/google"

import Dashboard from "@/src/modules/auth/presentation/pages/dashboard";
import SidebarDesktop
  from "@/src/modules/screens/presentation/components/sidebar-desktop";
import Navbar from "@/src/modules/screens/presentation/components/navbar";

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
    <body className={inter.className} suppressHydrationWarning>


    {/*<div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <SidebarDesktop/>
    </div>*/}

    <div className="flex flex-col mx-auto">
      <Navbar/>
      <main>{children}</main>
    </div>

    {/*<Dashboard />*/}

    </body>
    </html>
  )
}
