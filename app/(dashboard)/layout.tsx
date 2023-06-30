import React from "react"

import { ModeToggle } from "@/components/mode-toggle"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6 items-center justify-around">
      <ModeToggle />
      {children}
    </div>
  )
}
