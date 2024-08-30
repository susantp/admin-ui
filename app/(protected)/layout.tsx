import React, { ReactElement, ReactNode } from "react"

import { Sidebar } from "@/core/presentation/components/Sidebar"
import TopNavigation from "@/core/presentation/components/TopNavigation"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function MainLayout({
  children,
}: DashboardLayoutProps): ReactElement {
  return (
    <div className="min-h-screen flex max-h-screen overflow-hidden p-2 space-x-2">
      <Sidebar />
      <div className="flex flex-col flex-1 space-y-2">
        <TopNavigation />
        <main className="flex flex-col flex-1 overflow-auto rounded-md">
          {children}
        </main>
      </div>
    </div>
  )
}
