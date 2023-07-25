import React from "react"
import CreateEditRoleContainer
  from "@/src/modules/roles/presentation/pages/create-edit-role-container"
import {Metadata} from "next";

interface ISlugPageProps {
  params: { slug: string }
}
export const metadata: Metadata = {
  title: "Edit Role",
  description: "",
}
export default function Page({params}: ISlugPageProps): React.ReactNode {
  const {slug} = params
  return <CreateEditRoleContainer slug={slug}/>
}
