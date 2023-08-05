import React, { ReactElement } from "react"

import { BellIcon, HomeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/layout/mode-toggle"
import { UserNav } from "@/components/layout/user-nav"

export default function MainNav(): ReactElement {
  return (
    <nav className="flex place-items-center place-content-between py-2.5 px-5">
      <div>
        <HomeIcon />
      </div>
      <div className="flex space-x-4 place-items-center">
        <Button variant="ghost" className="px-0 w-10 h-10 ring-0">
          <BellIcon />
        </Button>
        <ModeToggle />
        <UserNav />
      </div>
    </nav>
  )
}
