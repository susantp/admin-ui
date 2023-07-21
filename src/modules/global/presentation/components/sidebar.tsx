import React from "react"
import DesktopNavigation from "@/src/modules/global/presentation/components/sidebar-components/desktop-navigation"
import MobileNavigation from "@/src/modules/global/presentation/components/sidebar-components/mobile-navigation"
import NavAnchor from "@/src/modules/global/presentation/components/sidebar-components/nav-anchor"
import useSidebarDesktopActions from "@/src/modules/global/presentation/hooks/use-sidebar-desktop-actions"

function Sidebar(): JSX.Element | null {
  const { getIcon, userScreens } = useSidebarDesktopActions()

  if (!userScreens?.length) throw Error("You are not assigned to any Screen.")

  return (
    <>
      <MobileNavigation>
        {userScreens.map((screen) => (
          <NavAnchor key={screen.id} screen={screen} handleGetIcon={getIcon} />
        ))}
      </MobileNavigation>

      <DesktopNavigation>
        {userScreens.map((screen) => (
          <NavAnchor key={screen.id} screen={screen} handleGetIcon={getIcon} />
        ))}
      </DesktopNavigation>
    </>
  )
}
export default Sidebar
