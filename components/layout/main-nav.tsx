import React, { ReactElement } from "react"

import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/layout/mode-toggle"
import Notifications from "@/components/layout/notifications"
import SidebarMobile from "@/components/layout/sidebar-mobile"
import { UserNav } from "@/components/layout/user-nav"

export default function MainNav(): ReactElement {
  return (
    <nav className="flex place-items-center place-content-between py-3 px-5 bg-secondary rounded-md">
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="px-0 w-10 h-10 ring-0 md:hidden">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 md:hidden">
            <SidebarMobile />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex space-x-4 place-items-center">
        <Notifications />
        <ModeToggle />
        <UserNav />
      </div>
    </nav>
  )
}
