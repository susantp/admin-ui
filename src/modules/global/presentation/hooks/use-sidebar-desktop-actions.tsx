import React, {useEffect, useState} from "react"
import {usePathname} from "next/navigation"
import {
  currentScreenAtom,
  userScreensAtom,
} from "@/src/modules/global/presentation/state/global-states"
import {IconSet} from "@/src/modules/global/domain/types/helpers"
import {
  IScreen
} from "@/src/modules/global/domain/types/repository/global-repository"
import {
  ClipboardDocumentIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"
import {useAtomValue, useSetAtom} from "jotai"

interface ISidebarDesktopActions {
  userScreens: IScreen[] | null
  getIcon: (
    keyName: keyof IconSet,
    additionalClass?: string
  ) => JSX.Element | null
}

const useSidebarDesktopActions = (): ISidebarDesktopActions => {
  const userScreens: IScreen[] | null = useAtomValue(userScreensAtom)
  const pathName = usePathname()
  const setCurrentScreen = useSetAtom(currentScreenAtom)

  useEffect(() => {
    const setCurrentUserScreenToState = (): void => {
      const currentScreen: IScreen | undefined = userScreens?.find((screen) =>
        pathName.includes(screen.slug)
      )
      if (currentScreen) {
        setCurrentScreen(currentScreen)
      }
    }
    setCurrentUserScreenToState()
  }, [])

  const [iconSet] = useState<IconSet>({
    home: { icon: <HomeIcon /> },
    users: { icon: <UsersIcon /> },
    dashboard: { icon: <HomeIcon /> },
    screens: { icon: <ClipboardDocumentIcon /> },
    roles: { icon: <FolderIcon /> },
  })

  const getIcon = (
    keyName: keyof IconSet,
    additionalClass?: string
  ): JSX.Element | null => {
    const iconElement: JSX.Element = iconSet[keyName].icon
    return React.cloneElement(iconElement, {
      className: additionalClass,
    })
  }
  return {
    userScreens,
    getIcon,
  }
}
export default useSidebarDesktopActions
