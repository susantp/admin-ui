import React from "react"
import { Metadata } from "next"
import CreateEditRoleContainer from "@/src/modules/role/presentation/pages/create-edit-role-container"

interface ISlugPageProps {
  params: { slug: string }
}
export const metadata: Metadata = {
  title: "Edit Role",
  description: "",
}
export default function Page({ params }: ISlugPageProps): React.ReactNode {
  const { slug } = params
  return <CreateEditRoleContainer slug={slug} />
}
