"use client"

import React from "react"
import Link from "next/link"

import { LogOutIcon, UserIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserMenu(): React.ReactElement {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="/favico.ico" />
          <AvatarFallback className="text-sm bg-primary">
            <UserIcon className="w-5 h-5 text-primary-foreground" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 text-secondary-foreground"
        align="end"
      >
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1  font-normal ">
            <p className="text-sm leading-none">vendor</p>
            <p className="text-xs text-muted-foreground leading-none">
              vendor@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/logout">
          <DropdownMenuItem className="cursor-pointer">
            <LogOutIcon className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
