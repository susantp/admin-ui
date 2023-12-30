"use client"

import React, {ReactNode} from "react";
import useSidebarDesktopActions
  from "@/src/modules/global/presentation/hooks/use-sidebar-desktop-actions";
import NavAnchor
  from "@/src/modules/global/presentation/components/sidebar-components/nav-anchor";

export default function UserScreensBox(): ReactNode {
  const { getIcon, userScreens } = useSidebarDesktopActions()
  const activeColor: string = "bg-teal-800 text-white"
  const inactiveColor: string = "text-black-100 hover:bg-slate-300 "
  const iconColorCss: string = "text-black-300"
  return (
    <div className="flex flex-col gap-6" id="fields">
      <div className="flex flex-col gap-[4px]"
           id="intro">
        <p>You have access to following screens</p>
      </div>

      <div className="flex flex-col gap-[4px]"
           id="intro">

        <div className="mt-5 flex flex-1 flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {userScreens && userScreens.map((screen) => (
              <NavAnchor key={screen.id} screen={screen} handleGetIcon={getIcon} inactiveColorCss={inactiveColor} iconColorCss={iconColorCss} activeColorCss={activeColor} />
            ))}
          </nav>
        </div>


      </div>

    </div>
  )
}
