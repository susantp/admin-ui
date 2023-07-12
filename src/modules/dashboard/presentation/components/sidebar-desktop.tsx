"use client"

import React from "react"
import useSidebarDesktopActions from "@/src/modules/dashboard/domain/hooks/use-sidebar-desktop-actions"
import DesktopNavigation from "@/src/modules/dashboard/presentation/components/sidebar/desktop-navigation"
import MobileNavigation from "@/src/modules/dashboard/presentation/components/sidebar/mobile-navigation"
import NavAnchor from "@/src/modules/dashboard/presentation/components/sidebar/nav-anchor"

export default function SidebarDesktop(): JSX.Element | null {
  const { handleNavigation, getIcon, screens } = useSidebarDesktopActions()
  if (!screens?.length) throw Error("You are not assigned to any Screen.")

  return (
    <>
      <MobileNavigation>
        {screens.map((screen) => (
          <NavAnchor
            key={screen.id}
            screen={screen}
            handleGetIcon={getIcon}
            handleNavigation={handleNavigation}
          />
        ))}
      </MobileNavigation>

      <DesktopNavigation>
        {screens.map((screen) => (
          <NavAnchor
            key={screen.id}
            screen={screen}
            handleGetIcon={getIcon}
            handleNavigation={handleNavigation}
          />
        ))}
      </DesktopNavigation>
    </>
  )
}
