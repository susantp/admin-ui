import "@/styles/globals.css"
import React from "react"
import {Metadata} from "next"
import ProtectedContainer from "@/app/(protected)/protected-container";
import {ApiResponse} from "@/src/types";
import {
  InterfaceUserDetail
} from "@/src/modules/dashboard/domain/states/dashboard-atom";
import DashboardRepository, {
  InterfaceDashboardRepo
} from "@/src/modules/dashboard/domain/repositories/dashboard-repository";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/domain/config/auth-options";

export const metadata: Metadata = {
  title: "Frontend Boilerplate NextJS",
  description: "Frontend boilerplate application using NextJS",
}
const fetchUserDetails = async (access: string | undefined): Promise<ApiResponse<InterfaceUserDetail> | boolean> => {
  if (!access) return false

  const repo: InterfaceDashboardRepo = new DashboardRepository()
  const response: ApiResponse<InterfaceUserDetail> | null = await repo.getUserDetail(access)
  if (response === null || response.error) return false

  return response
}

interface IRootLayout {
  children: React.ReactNode
}

async function RootLayout({children}: IRootLayout): Promise<JSX.Element | null> {
  const session = await getServerSession(authOptions)
  const userDetail = await fetchUserDetails(session?.user.access)
  if (!userDetail) return null
  if (!session) return null
  const {user} = session
  return (
    <ProtectedContainer sessionUser={user} loggedInUserDetail={userDetail}>
      {children}
    </ProtectedContainer>
  )
}

export default RootLayout
