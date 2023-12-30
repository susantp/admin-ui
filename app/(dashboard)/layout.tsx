"use client"

import React from "react"

import { Card } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { UserCard } from "@/components/user-card"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): React.ReactElement {
  return (
    <div className="min-h-screen flex max-h-screen overflow-hidden p-2 space-x-2">
      <Sidebar />
      <main className="flex flex-col flex-1 overflow-auto rounded-md">
        <Card className="bg-accent rounded-md mb-2 p-1 flex justify-between items-center">
          <div className="space-y-1 px-4">
            <h1 className="text-xl font-medium">Role Management</h1>
          </div>
          <UserCard />
        </Card>
        {children}
      </main>
    </div>
  )
}
