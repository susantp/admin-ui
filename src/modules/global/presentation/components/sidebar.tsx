import React, {ReactNode} from "react"
import DesktopNavigation
  from "@/src/modules/global/presentation/components/sidebar-components/desktop-navigation"
import MobileNavigation
  from "@/src/modules/global/presentation/components/sidebar-components/mobile-navigation"
import NavAnchor
  from "@/src/modules/global/presentation/components/sidebar-components/nav-anchor"
import useSidebarDesktopActions
  from "@/src/modules/global/presentation/hooks/use-sidebar-desktop-actions"

function Sidebar(): ReactNode {
  const {getIcon, userScreens} = useSidebarDesktopActions()

  if (!userScreens?.length) throw Error("You are not assigned to any Screen.")
  const activeColor: string = "bg-teal-800 text-white"
  const inactiveColor: string = "text-teal-100 hover:bg-teal-600"
  const iconColorCss: string = "text-teal-300"

  return (
    <>
      <MobileNavigation>
        {userScreens.map((screen) => (
          <NavAnchor key={screen.id} screen={screen} handleGetIcon={getIcon}
                     iconColorCss={iconColorCss}
                     inactiveColorCss={inactiveColor} activeColorCss={activeColor}/>
        ))}
      </MobileNavigation>

      <DesktopNavigation>
        {userScreens.map((screen) => (
          <NavAnchor key={screen.id} screen={screen} activeColorCss={activeColor}
                     iconColorCss={iconColorCss}
                     inactiveColorCss={inactiveColor} handleGetIcon={getIcon}/>
        ))}
      </DesktopNavigation>
    </>
  )
}

export default Sidebar
