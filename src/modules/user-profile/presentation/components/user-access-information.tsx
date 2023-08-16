import React from "react"
import Link from "next/link"

import { useAtomValue, useSetAtom } from "jotai"

import {
  currentScreenAtom,
  userScreensAtom,
} from "@/modules/rbac/presentation/atoms/rbac-atoms"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { navigationItems } from "@/components/layout/navigation-items"

export default function UserAccessInformation(): React.ReactElement {
  const screens = useAtomValue(userScreensAtom)
  const setCurrentScreen = useSetAtom(currentScreenAtom)

  return (
    <Card>
      <CardHeader>
        <CardDescription>You have access to following screens</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {screens.map((screen) => {
            if (screen.permissions.length === 0) return null

            const item =
              navigationItems.find((nav) => nav.name === screen.name) ??
              navigationItems[0]

            return (
              <li key={item.name}>
                <Link
                  href={item.slug}
                  onClick={(): void => setCurrentScreen(screen)}
                  className="flex gap-4 whitespace-nowrap py-2.5 px-4 rounded-md hover:bg-primary-foreground"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}
