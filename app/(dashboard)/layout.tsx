"use client"

import React from "react"

import { Sidebar } from "@/components/sidebar"

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
        {children}
      </main>
    </div>
  )
}
