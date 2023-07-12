"use client"

import React from "react"

import { Sidebar } from "@/components/sidebar"
import { UserCard } from "@/components/user-card"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen flex max-h-screen overflow-hidden">
      <Sidebar />
      <main className="flex flex-col flex-1 space-y-6 p-2">
        <div className="flex justify-end">
          <UserCard />
        </div>
        <div className="overflow-auto">{children}</div>
      </main>
    </div>
  )
}
