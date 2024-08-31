import React, { ReactElement, ReactNode } from "react"

import { Sidebar } from "@/core/presentation/components/Sidebar"
import TopNavigation from "@/core/presentation/components/TopNavigation"

interface ParentProps {
  children: ReactNode
}

function MainContent({ children }: ParentProps): ReactElement {
  return (
    <main className="flex flex-col flex-1 overflow-auto rounded-md">
      {children}
    </main>
  )
}

export default function MainLayout({ children }: ParentProps): ReactElement {
  return (
    <div className="min-h-screen flex max-h-screen overflow-hidden p-2 space-x-2">
      <aside className="w-16 md:w-64 rounded-md bg-primary text-primary-foreground px-1 md:px-4">
        <Sidebar />
      </aside>
      <div className="flex flex-col flex-1 space-y-2">
        <TopNavigation />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  )
}
