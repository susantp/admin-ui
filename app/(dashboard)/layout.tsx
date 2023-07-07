"use client"

import React from "react"

import { ModeToggle } from "@/components/mode-toggle"
import { Sidebar } from "@/components/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex flex-col items-center justify-around w-full">
        <ModeToggle />

        {children}
      </main>
    </div>
  )
}
