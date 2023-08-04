"use client"

import React from "react"
import Link from "next/link"

import { Bell, LogOut, User, UserIcon } from "lucide-react"
import { signOut } from "next-auth/react"

import { useProfile } from "@/modules/user-profile/presentation/hooks/use-profile"
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
  const { profile } = useProfile()

  if (!profile) {
    return (
      <div className="min-w-[200px] rounded-md p-2.5 flex gap-4 items-center bg-primary-foreground text-primary">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2 flex-grow">
          <Skeleton className="h-2.5 w-[120px]" />
          <Skeleton className="h-2.5 w-[80px]" />
        </div>
      </div>
    )
  }

  let name = ""
  let initials = ""

  if (profile.firstName) {
    name += profile.firstName
    initials += profile.firstName.at(0)
  }

  if (profile.lastName) {
    name += ` ${profile.lastName}`
    initials += profile.lastName.at(0)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="min-w-[200px] rounded-md p-2.5 flex gap-4 items-center bg-primary-foreground text-primary">
          <Avatar>
            <AvatarImage src="/favico.ico" />
            <AvatarFallback className="text-primary">
              {initials !== "" ? initials : <UserIcon className="w-5 h-5" />}
            </AvatarFallback>
          </Avatar>
          <div className="text-left">
            <h3 className="text-sm font-semibold">{name}</h3>
            <p className="text-xs font-medium">{profile?.email}</p>
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
        <DropdownMenuItem onClick={(): Promise<undefined> => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
