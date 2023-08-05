import React from "react"
import { Metadata } from "next"

import { RoleCreateEditForm } from "@/roles/presentation/components/role-create-edit-form"

export const metadata: Metadata = {
  title: "Edit Role",
  description: "Create a new role",
}

interface PageProps {
  params: { roleId: string }
}

export default function Page({ params }: PageProps): React.ReactElement {
  const { roleId } = params

  return <RoleCreateEditForm roleId={roleId} />
}
