import "@/styles/globals.css"
import React from "react"
import {Metadata} from "next"
import Navbar from "@/src/modules/dashboard/presentation/components/navbar"
import SidebarDesktop
  from "@/src/modules/dashboard/presentation/components/sidebar-desktop"

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
    <>
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <SidebarDesktop/>
      </div>

      <div className="flex flex-1 flex-col md:pl-64">
        <Navbar/>
        {children}
      </div>
    </>
  )
}
