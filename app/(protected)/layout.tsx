import React, { ReactElement } from "react"

import { fetchUserScreensAction } from "@/modules/rbac/domain/rbac-actions"
import { fetchUserProfileAction } from "@/modules/user-profile/domain/profile-actions"
import { Sidebar } from "@/components/sidebar"
import RBACContainer from "@/app/(protected)/rbac-container"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps): Promise<ReactElement> {
  const profile = await fetchUserProfileAction()
  const screens = await fetchUserScreensAction()

  return (
    <RBACContainer screens={screens} profile={profile}>
      <div className="min-h-screen flex max-h-screen overflow-hidden p-2 space-x-2">
        <Sidebar />
        <main className="flex flex-col flex-1 overflow-auto rounded-md">
          {children}
        </main>
      </div>
    </RBACContainer>
  )
}
