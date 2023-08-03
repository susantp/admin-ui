"use client"

import React from "react"
import Link from "next/link"
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
import { Skeleton } from "@/components/ui/skeleton"

export function UserCard(): React.ReactElement {
  const session = useSession()

  const user = session.data?.user
  const name = [user?.firstName, user?.lastName].join(" ")
  const initials = [user?.firstName.at(0), user?.lastName.at(0)].join("")

  if (!user) {
    return (
      <div className="min-w-[200px] rounded-md p-2.5 flex gap-4 items-center bg-card text-primary">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2 flex-grow">
          <Skeleton className="h-2.5 w-[120px]" />
          <Skeleton className="h-2.5 w-[80px]" />
        </div>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="min-w-[200px] rounded-md p-2.5 flex gap-4 items-center bg-card text-primary">
          <Avatar>
            <AvatarImage src="/favico.ico" />
            <AvatarFallback className="text-primary">{initials}</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <h3 className="text-sm font-semibold">{name}</h3>
            <p className="text-xs font-medium">{user?.email}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <Link href="/profile">
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>My Account</span>
          </DropdownMenuItem>
        </Link>
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
