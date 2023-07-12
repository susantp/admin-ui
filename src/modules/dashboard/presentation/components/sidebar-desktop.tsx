"use client"

import React from "react"
import DesktopNavigation from "@/src/modules/dashboard/presentation/components/sidebar/desktop-navigation"
import MobileNavigation from "@/src/modules/dashboard/presentation/components/sidebar/mobile-navigation"
import NavAnchor from "@/src/modules/dashboard/presentation/components/sidebar/nav-anchor"
import { userScreensAtom } from "@/src/modules/global/domain/states/global-atoms"
import { IScreen } from "@/src/modules/global/domain/types/global-type"
import { useAtomValue } from "jotai"

export default function SidebarDesktop(): JSX.Element | null {
  const screens: IScreen[] | null = useAtomValue(userScreensAtom)
  if (!screens?.length) throw Error("You are not assigned to any Screen.")
  return (
    <>
      <MobileNavigation>
        {screens.map((screen) => (
          <NavAnchor key={Math.random()} screen={screen} />
        ))}
      </MobileNavigation>

      <DesktopNavigation>
        {screens.map((screen) => (
          <NavAnchor key={Math.random()} screen={screen} />
        ))}
      </DesktopNavigation>
    </>
  )
}
