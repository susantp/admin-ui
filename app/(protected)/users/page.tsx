import React from "react"
import { Metadata } from "next"
import UserContainer from "@/src/modules/users/presentation/pages/user-container"

export const metadata: Metadata = {
  title: "User Management",
  description: "",
}
export default function Page(): React.ReactNode {
  return <UserContainer />
}
