import React from "react";
import {Metadata} from "next"
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/domain/config/auth-options";
import DashboardContainer from "@/src/modules/dashboard/presentation/pages/dashboardContainer";
import DashboardRepository, {
  InterfaceDashboardRepo
} from "@/src/modules/dashboard/domain/repositories/dashboard-repository";
import {
  InterfaceUserDetail
} from "@/src/modules/dashboard/domain/states/dashboard-atom";
import {ApiResponse} from "@/src/types";

const fetchUserDetails = async (access: string | undefined): Promise<ApiResponse<InterfaceUserDetail> | boolean> => {
  if (!access) return false

  const repo: InterfaceDashboardRepo = new DashboardRepository()
  const response: ApiResponse<InterfaceUserDetail> | null = await repo.getUserDetail(access)
  if (response === null || response.error) return false

  return response
}
export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}
export default async function Page(): Promise<JSX.Element | null> {
  const session = await getServerSession(authOptions)
  const userDetail = await fetchUserDetails(session?.user.access)
  if (!userDetail) return null

  return <DashboardContainer />
}
