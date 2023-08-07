import React, { ReactElement, ReactNode } from "react"

import { fetchUserScreensAction } from "@/modules/rbac/domain/rbac-actions"
import { fetchUserProfileAction } from "@/modules/user-profile/domain/profile-actions"
import MainNav from "@/components/layout/main-nav"
import { Sidebar } from "@/components/layout/sidebar"
import StateProvider from "@/app/(protected)/state-provider"

interface DashboardLayoutProps {
  children: ReactNode
  admin: ReactNode
}

export default async function DashboardLayout({
  children,
  admin,
}: DashboardLayoutProps): Promise<ReactElement> {
  const profile = await fetchUserProfileAction()
  const screens = await fetchUserScreensAction()

  const isAdmin = screens !== null

  return (
    <StateProvider screens={screens ?? []} profile={profile}>
      <div className="min-h-screen flex max-h-screen overflow-hidden p-2 space-x-2">
        {isAdmin && <Sidebar />}
        <div className="flex flex-col flex-1 space-y-2">
          <MainNav />
          <main className="flex flex-col flex-1 overflow-auto rounded-md">
            {isAdmin ? admin : children}
          </main>
        </div>
      </div>
    </StateProvider>
  )
}
