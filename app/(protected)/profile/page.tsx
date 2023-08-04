import React from "react"
import { Metadata } from "next"

import UserProfilePage from "@/src/modules/user-profile/presentation/pages/user-profile-page"

export const metadata: Metadata = {
  title: "User Profile",
}

export default function Page(): React.ReactElement {
  return <UserProfilePage />
}
