"use client"

import React from "react"
import { Bell, LogOut, User } from "lucide-react"
import { useSession } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserCard(): JSX.Element {
  const session = useSession()

  const user = session.data?.user
  const name = [user?.firstName, user?.lastName].join(" ")
  const initials = [user?.firstName.at(0), user?.lastName.at(0)].join("")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="bg-glass rounded-md p-2.5 flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="/favico.ico" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <h3 className="text-sm">{name}</h3>
            <p className="text-xs">{user?.email}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>My Account</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell className="mr-2 h-4 w-4" />
          <span>Notifications</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
