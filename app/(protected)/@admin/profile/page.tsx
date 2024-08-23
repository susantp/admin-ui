import React from "react"
import { Metadata } from "next"

import UserProfilePage from "@/modules/user-profile/presentation/pages/user-profile-page"

export const metadata: Metadata = {
  title: "UserData Profile",
}

export default function Page(): React.ReactElement {
  return <UserProfilePage />
}
