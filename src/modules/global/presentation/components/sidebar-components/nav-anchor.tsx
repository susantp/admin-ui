import React, {ReactNode} from "react"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {IconSet} from "@/src/modules/global/domain/types/helpers"
import {
  IScreen
} from "@/src/modules/global/domain/types/repository/global-repository"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import {useSetAtom} from "jotai";
import {currentScreenAtom} from "@/src/modules/global/presentation/state/global-states";

interface INavigationAnchorProps {
  screen: IScreen
  handleGetIcon: (keyName: keyof IconSet, additionalClass?: string) => ReactNode
  activeColorCss: string
  inactiveColorCss: string
  iconColorCss: string
}

export default function NavAnchor({
                                    screen,
                                    handleGetIcon,
                                    activeColorCss,
                                    inactiveColorCss,
                                    iconColorCss
                                  }: INavigationAnchorProps): ReactNode {
    const pathname = usePathname()
    const setCurrentScreen = useSetAtom(currentScreenAtom)
  return (
    <Link
      onClick={():void => setCurrentScreen(screen)}
      href={`/${screen.slug}`}
      className={getHelpers.joinClasses(
        pathname.includes(screen.slug)
          ? `${activeColorCss}`
          : `${inactiveColorCss}`,
        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
      )}
    >
      {handleGetIcon(screen.slug, `mr-4 h-6 w-6 flex-shrink-0 ${iconColorCss}`)}
      {screen.name}
    </Link>
  )
}
