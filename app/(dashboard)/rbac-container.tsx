"use client"

import React, { ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"
import { UserScreen } from "@/src/modules/rbac/domain/types"
import { userScreensAtom } from "@/src/modules/rbac/presentation/atoms/rbac-atoms"
import { useHydrateAtoms } from "jotai/utils"

import { Button } from "@/components/ui/button"
import RBACProvider from "@/app/(dashboard)/rbac-provider"

interface RBACContainerProps {
  children: ReactNode
  screens: UserScreen[]
}

export default function RBACContainer({
  children,
  screens,
}: RBACContainerProps): ReactNode {
  useHydrateAtoms([[userScreensAtom, screens]])

  const pathname = usePathname()
  const router = useRouter()

  const screen = screens.find((s) => pathname.startsWith(`/${s.slug}`))

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
