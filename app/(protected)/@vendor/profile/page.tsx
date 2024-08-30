import React from "react"
import { Metadata } from "next"

import DefaultUserProfile from "@/modules/user-profile/presentation/pages/default/DefaultUserProfile"

export const metadata: Metadata = {
  title: "UserData Profile",
}

export default function Page(): React.ReactElement {
  return <DefaultUserProfile />
}
