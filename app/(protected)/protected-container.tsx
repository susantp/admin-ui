"use client"

import React, {Suspense} from "react";
import SidebarDesktop
  from "@/src/modules/dashboard/presentation/components/sidebar-desktop";
import Navbar from "@/src/modules/dashboard/presentation/components/navbar";
import {ApiResponse} from "@/src/types";
import {
  InterfaceUserDetail, sessionAtom, userDetailAtom
} from "@/src/modules/dashboard/domain/states/dashboard-atom";
import {useHydrateAtoms} from "jotai/utils";
import {User} from "next-auth";
import {session} from "next-auth/core/routes";
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";
import user = mockSession.user;

interface IProtectedContainerProps {
  loggedInUserDetail: ApiResponse<InterfaceUserDetail> | boolean
  sessionUser: User,
  children: React.ReactNode
}

function ProtectedContainer({
                              children,
                              sessionUser,
                              loggedInUserDetail
                            }: IProtectedContainerProps): JSX.Element {

  useHydrateAtoms([[userDetailAtom, loggedInUserDetail], [sessionAtom, sessionUser]])
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <aside
        className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <SidebarDesktop/>
      </aside>

      <main>
        <div className="flex flex-1 flex-col md:pl-64">
          <Navbar/>
          {children}
        </div>
      </main>
    </Suspense>
  )
}

export default ProtectedContainer
