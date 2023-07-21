"use client"

import React, { Suspense } from "react"
import { IScreen } from "@/src/modules/global/domain/types/repository/global-repository"
import Navbar from "@/src/modules/global/presentation/components/navbar"
import Sidebar from "@/src/modules/global/presentation/components/sidebar"
import {
  sessionUserAtom,
  userScreensAtom,
} from "@/src/modules/global/presentation/state/global-states"
import { useHydrateAtoms } from "jotai/utils"
import { User } from "next-auth"

interface IProtectedContainerProps {
  loggedInUserScreens: IScreen[]
  sessionUser: User
  children: React.ReactNode
}

function ProtectedContainer({
  children,
  sessionUser,
  loggedInUserScreens,
}: IProtectedContainerProps): React.ReactNode {
  useHydrateAtoms([
    [userScreensAtom, loggedInUserScreens],
    [sessionUserAtom, sessionUser],
  ])
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <aside className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <Sidebar />
      </aside>

      <main>
        <div className="flex flex-1 flex-col md:pl-64">
          <Navbar />
          {children}
        </div>
      </main>
    </Suspense>
  )
}

export default ProtectedContainer
