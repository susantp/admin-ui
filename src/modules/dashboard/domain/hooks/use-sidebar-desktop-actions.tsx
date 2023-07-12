import React, { useState } from "react"
import {
  currentScreenAtom,
  userScreensAtom,
} from "@/src/modules/global/domain/states/global-atoms"
import { IconSet } from "@/src/modules/global/domain/types/helpers"
import { IScreen } from "@/src/modules/global/domain/types/repository/global-repository"
import { useAtomValue, useSetAtom } from "jotai"
import {
  Award,
  HomeIcon,
  Layers,
  LayoutDashboardIcon,
  Users,
} from "lucide-react"

interface ISidebarDesktopActions {
  screens: IScreen[] | null
  handleNavigation: (screen: IScreen) => void
  getIcon: (
    keyName: keyof IconSet,
    additionalClass?: string
  ) => JSX.Element | null
}

const useSidebarDesktopActions = (): ISidebarDesktopActions => {
  const [iconSet] = useState<IconSet>({
    home: { icon: <HomeIcon /> },
    users: { icon: <Users /> },
    dashboard: { icon: <LayoutDashboardIcon /> },
    screens: { icon: <Layers /> },
    roles: { icon: <Award /> },
  })
  const screens: IScreen[] | null = useAtomValue(userScreensAtom)
  const setCurrentScreen = useSetAtom(currentScreenAtom)

  const getIcon = (
    keyName: keyof IconSet,
    additionalClass?: string
  ): JSX.Element | null => {
    const iconElement: JSX.Element = iconSet[keyName]?.icon
    if (iconElement) {
      return React.cloneElement(iconElement, {
        className: additionalClass,
      })
    }
    return null
  }
  const handleNavigation = (screen: IScreen): void => setCurrentScreen(screen)
  return {
    screens,
    handleNavigation,
    getIcon,
  }
}
export default useSidebarDesktopActions
