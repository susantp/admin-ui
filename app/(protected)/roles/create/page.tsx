import React from "react"
import { Metadata } from "next"
import CreateEditRoleContainer from "@/src/modules/role/presentation/pages/create-edit-role-container"

export const metadata: Metadata = {
  title: "Create Role",
  description: "",
}

export default function Page(): React.ReactNode {
  return <CreateEditRoleContainer slug={null} />
}
