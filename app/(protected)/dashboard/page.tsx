import React from "react"
import { Metadata } from "next"
import DashboardContainer from "@/src/modules/dashboard/presentation/pages/dashboard-container"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}
export default function Page(): JSX.Element {
  return <DashboardContainer />
}
