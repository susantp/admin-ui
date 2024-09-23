"use client"

import React, { ReactElement } from "react"

import { useAuth } from "@/modules/auth/presentation/hooks/use-auth"

import { Button } from "@/components/ui/button"

export default function DefaultLogoutPage(): ReactElement {
  const { logoutUser } = useAuth()
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-y-4">
      <h1 className="text-2xl">Are you sure you want to logout ?</h1>
      <Button size="lg" variant="destructive" onClick={logoutUser}>
        Logout
      </Button>
    </div>
  )
}
