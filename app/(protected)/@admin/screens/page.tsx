import React, { ReactElement } from "react"
import { Metadata } from "next"

import ScreenManagementPage from "@/modules/screen-management/presentation/pages/screen-management-page"

export const metadata: Metadata = {
  title: "Role Management",
  description: "Add or edit user access roles",
}

export default function Page(): ReactElement {
  return <ScreenManagementPage />
}
