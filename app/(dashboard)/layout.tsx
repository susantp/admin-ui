import React, { ReactElement } from "react"

import { fetchUserScreensAction } from "@/src/modules/rbac/domain/rbac-actions"

import { Sidebar } from "@/components/sidebar"
import RBACContainer from "@/app/(dashboard)/rbac-container"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps): Promise<ReactElement> {
  const screens = await fetchUserScreensAction()

  return (
    <RBACContainer screens={screens}>
      <div className="min-h-screen flex max-h-screen overflow-hidden p-2 space-x-2">
        <Sidebar />
        <main className="flex flex-col flex-1 overflow-auto rounded-md">
          {children}
        </main>
      </div>
    </RBACContainer>
  )
}
