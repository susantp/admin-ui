import "@/styles/globals.css"
import React from "react"
import { Metadata } from "next"
import { authOptions } from "@/auth/domain/config/auth-options"
import globalDatasource from "@/src/modules/global/data/datasources/global-datasource"
import { IScreen } from "@/src/modules/global/domain/types/repository/global-repository"
import { getServerSession } from "next-auth"

import ProtectedContainer from "@/app/(protected)/protected-container"

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
  const session = await getServerSession(authOptions)
  if (!session) return null
  const {
    user: { access },
  } = session
  const userScreens: IScreen[] | null = await globalDatasource({
    accessToken: access,
  }).fetchUserScreens()
  if (!userScreens) return null
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
