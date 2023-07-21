import React from "react"
import { Metadata } from "next"
import CreateRoleContainer from "@/src/modules/roles/presentation/pages/create-role-container"

export const metadata: Metadata = {
  title: "Create Page",
  description: "",
}

export default function Page(): React.ReactNode {
  return <CreateRoleContainer />
}
