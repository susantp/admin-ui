"use client"

import React, { ReactElement } from "react"

import { useAuth } from "@/modules/auth/presentation/hooks/use-auth"

import { Button } from "@/components/ui/button"

export default function DefaultLogoutPage(): ReactElement {
  const { logoutUser } = useAuth()
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-y-2">
      <Button
        size="lg"
        variant="default"
        onClick={() => logoutUser({ revokeAll: false })}
      >
        Logout from this devices
      </Button>
      <Button
        size="lg"
        variant="destructive"
        onClick={() => logoutUser({ revokeAll: true })}
      >
        Logout from all devices
      </Button>
    </div>
  )
}
