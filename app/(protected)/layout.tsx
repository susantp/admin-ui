import "@/styles/globals.css"
import React from "react"
import {Metadata} from "next"
import globalServices from "@/src/modules/global/domain/services/global-service"
import {
  IScreen
} from "@/src/modules/global/domain/types/repository/global-repository"
import getClient from "@/src/modules/global/domain/utils/get-client"
import {Session} from "next-auth"

import ProtectedContainer from "@/app/(protected)/protected-container"
import {authEndpoints} from "@/auth/domain/config/auth-endpoints";

export const metadata: Metadata = {
  title: "Frontend Boilerplate NextJS",
  description: "Frontend boilerplate application using NextJS",
}

interface IRootLayout {
  children: React.ReactNode
}

async function RootLayout({
  children,
}: IRootLayout): Promise<JSX.Element | null> {
  const session: Session | null = await getClient.validateSession()

  return null
  const userScreens: IScreen[] | null =
    await globalServices.fetchUserScreens()
  if (!session || !userScreens) return null

  return (
    <ProtectedContainer
      sessionUser={session.user}
      loggedInUserScreens={userScreens}
    >
      {children}
    </ProtectedContainer>
  )
}

export default RootLayout
