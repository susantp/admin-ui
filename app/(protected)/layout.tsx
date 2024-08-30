import React, { ReactElement, ReactNode } from "react"

import MainNav from "@/components/layout/main-nav"
import { Sidebar } from "@/components/layout/sidebar"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): ReactElement {
  return (
    <div className="min-h-screen flex max-h-screen overflow-hidden p-2 space-x-2">
      <Sidebar />
      <div className="flex flex-col flex-1 space-y-2">
        <MainNav />
        <main className="flex flex-col flex-1 overflow-auto rounded-md">
          {children}
        </main>
      </div>
    </div>
  )
}
