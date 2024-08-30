"use client"

import React, { ReactElement, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Sidebar(): ReactElement {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  return (
    <aside
      className={`hidden md:block ${
        isCollapsed || "w-80"
      } rounded-md bg-secondary text-secondary-foreground`}
    >
      <div className="h-full p-2 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex flex-1 space-x-2 place-items-center">
            <Image
              src="/images/yomari_192.png"
              alt="Next.js Logo"
              width={28}
              height={28}
              priority
              className="w-10 p-2 object-contain"
            />

            <h1 className="text-2xl font-medium" hidden={isCollapsed}>
              SOA POC
            </h1>
          </div>

          <ul className="space-y-2">
            <h6
              className="p-2 text-muted-foreground uppercase tracking-widest text-sm font-medium"
              hidden={isCollapsed}
            >
              Main Menu
            </h6>
            <li key="screenID">
              <Link
                href="javscript::void"
                className="flex p-2.5 gap-4 hover:bg-primary-foreground rounded-md place-items-center whitespace-nowrap text-primary"
              >
                icon
              </Link>
            </li>
          </ul>
        </div>

        <Button
          variant="ghost"
          className="w-10 h-10 px-0 text-center"
          onClick={(): void => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronsRightIcon /> : <ChevronsLeftIcon />}
        </Button>
      </div>
    </aside>
  )
}
