"use client"

import React from "react"
import {useAtomValue} from "jotai";
import {userScreensAtom} from "@/src/modules/global/domain/states/global-atoms";
import {IScreen} from "@/src/modules/global/domain/types/global-type";
import NavAnchor
  from "@/src/modules/dashboard/presentation/components/sidebar/nav-anchor";
import MobileNavigation
  from "@/src/modules/dashboard/presentation/components/sidebar/mobile-navigation";
import DesktopNavigation
  from "@/src/modules/dashboard/presentation/components/sidebar/desktop-navigation";

export default function SidebarDesktop(): JSX.Element | null {
  const screens: IScreen[] | null = useAtomValue(userScreensAtom)
  if (!screens?.length) throw Error("You are not assigned to any Screen.")
  return (
    <>
      <MobileNavigation>
        {screens.map((screen) => (
          <NavAnchor key={Math.random()} screen={screen}/>
        ))}
      </MobileNavigation>

      <DesktopNavigation>
        {screens.map(screen => (
          <NavAnchor key={Math.random()} screen={screen}/>
        ))}
      </DesktopNavigation>
    </>
  )
}
