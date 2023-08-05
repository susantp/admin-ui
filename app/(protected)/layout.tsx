import React, { ReactElement, ReactNode } from "react"

import { fetchUserScreensAction } from "@/modules/rbac/domain/rbac-actions"
import { fetchUserProfileAction } from "@/modules/user-profile/domain/profile-actions"
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

  return (
    <StateProvider screens={screens ?? []} profile={profile}>
      <div className="min-h-screen flex max-h-screen overflow-hidden p-2 space-x-2">
        {screens ? (
          admin
        ) : (
          <main className="flex flex-col flex-1 overflow-auto rounded-md">
            {children}
          </main>
        )}
      </div>
    </StateProvider>
  )
}
