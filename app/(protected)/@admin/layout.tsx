import React, { ReactElement } from "react"

import { Sidebar } from "@/components/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): ReactElement {
  return (
    <>
      <Sidebar />
      <main className="flex flex-col flex-1 overflow-auto rounded-md">
        {children}
      </main>
    </>
  )
}
