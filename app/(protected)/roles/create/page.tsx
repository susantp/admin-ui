import React from "react"
import { Metadata } from "next"

import { RoleCreateEditForm } from "@/roles/presentation/components/role-create-edit-form"

export const metadata: Metadata = {
  title: "Add Role",
  description: "Create a new role",
}

export default function Page(): React.ReactElement {
  return <RoleCreateEditForm />
}
