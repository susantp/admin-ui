"use client"

import React from "react"

import {Card} from "@/components/ui/card"
import {Sidebar} from "@/components/sidebar"
import Breadcrumb from "@/components/breadcrumb";
import {UserCardVersionTwo} from "@/components/user-card-version-two";
import {UserCard} from "@/components/user-card";

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
        <Card className="bg-accent rounded-md mb-2 p-1 flex items-center w-full">
          <div className="flex w-[50%] gap-x-4 p-4 justify-start"><Breadcrumb /></div>
          <div className="flex w-[50%] gap-x-4 p-4 justify-end"><UserCardVersionTwo /></div>
        </Card>
        {children}
      </main>
    </div>
  )
}
