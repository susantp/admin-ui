"use client"

import React, { ReactNode, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

import { useSetAtom } from "jotai"
import { useHydrateAtoms } from "jotai/utils"

import { UserScreen } from "@/modules/rbac/domain/types"
import {
  currentScreenAtom,
  userScreensAtom,
} from "@/modules/rbac/presentation/atoms/rbac-atoms"
import { UserProfile } from "@/modules/user-profile/domain/types"
import { profileAtom } from "@/modules/user-profile/presentation/atoms/profile-atom"

import { Button } from "@/components/ui/button"
import RBACProvider from "@/app/(protected)/rbac-provider"

interface RBACContainerProps {
  children: ReactNode
  profile: UserProfile
  screens: UserScreen[]
}

export default function StateProvider({
  children,
  profile,
  screens,
}: RBACContainerProps): ReactNode {
  useHydrateAtoms([
    [profileAtom, profile],
    [userScreensAtom, screens],
  ])

  const setCurrentScreen = useSetAtom(currentScreenAtom)

  const pathname = usePathname()
  const router = useRouter()

  const screen =
    screens.find((s) => pathname.startsWith(`/${s.slug}`)) ??
    screens.find((s) => s.slug === "/")

  useEffect(() => setCurrentScreen(screen), [screen, setCurrentScreen])

  if (screen?.permissions.length !== 0) {
    return (
      <RBACProvider permissions={screen?.permissions ?? []}>
        {children}
      </RBACProvider>
    )
  }

  return (
    <div className="grid place-items-center w-full h-screen">
      <div className="space-y-4 text-center">
        <h1>You do not have enough permissions.</h1>
        <Button onClick={(): void => router.back()}>Go Back</Button>
      </div>
    </div>
  )
}
