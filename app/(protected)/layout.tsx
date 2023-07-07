import "@/styles/globals.css"
import React, {Suspense} from "react"
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
    <Suspense fallback={<h1>Loading...</h1>}>
      <aside className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <SidebarDesktop/>
      </aside>

      <main>
        <section className="flex flex-1 flex-col md:pl-64">
          <Navbar/>
          {children}
        </section>
      </main>
    </Suspense>
  )
}
