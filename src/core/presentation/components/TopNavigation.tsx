import React, { ReactElement } from "react"

import BreadcrumbComponent from "@/core/presentation/components/BreadcrumbComponent"
import { ModeToggle } from "@/core/presentation/components/ModeToggle"
import { UserMenu } from "@/core/presentation/components/UserMenu"

import Notifications from "@/components/layout/notifications"

export default function TopNavigation(): ReactElement {
  return (
    <nav className="flex place-items-center place-content-between py-3 px-5 bg-primary text-primary-foreground rounded-md">
      <div className="flex place-items-center space-x-4">
        <div className="flex place-items-center space-x-1">
          <BreadcrumbComponent />
        </div>
      </div>
      <div className="flex space-x-4 place-items-center">
        <Notifications />
        <ModeToggle />
        <UserMenu />
      </div>
    </nav>
  )
}
