"use client"

import React, { ReactElement } from "react"
import Image from "next/image"
import Link from "next/link"

import { LayoutDashboardIcon } from "lucide-react"

function BrandDiv(): ReactElement {
  return (
    <div className="flex space-x-2 justify-center md:justify-start">
      <Image
        src="/images/yomari_192.png"
        alt="Next.js Logo"
        width={28}
        height={28}
        priority
        className="w-10 p-2 object-contain"
      />

      <h1 className="text-2xl font-medium hidden place-content-center md:block lg:block">
        SOA POC
      </h1>
    </div>
  )
}

function MenuItem(): ReactElement {
  return (
    <li
      key="screenID"
      className="w-full flex justify-center md:justify-start bg-primary-background rounded-md hover:bg-primary-foreground"
    >
      <Link
        href="javscript::void"
        className="flex p-2.5 gap-4 whitespace-nowrap text-primary"
      >
        <LayoutDashboardIcon />
        <span className="hidden md:block lg:block">menu name</span>
      </Link>
    </li>
  )
}

export function Sidebar(): ReactElement {
  return (
    <aside className="w-16 md:w-64 rounded-md bg-secondary text-secondary-foreground">
      <div className="space-y-6">
        <BrandDiv />
        <ul className="flex flex-col">
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </ul>
      </div>
    </aside>
  )
}
