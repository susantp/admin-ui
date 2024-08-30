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
  // if (!profile) {
  //   return (
  //     <div className="min-w-[200px] rounded-md p-2.5 flex gap-4 items-center bg-primary-foreground text-primary">
  //       <Skeleton className="h-10 w-10 rounded-full" />
  //       <div className="space-y-2 flex-grow">
  //         <Skeleton className="h-2.5 w-[120px]" />
  //         <Skeleton className="h-2.5 w-[80px]" />
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="/favico.ico" />
          <AvatarFallback className="text-sm bg-background">
            <UserIcon className="w-5 h-5 text-primary" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1  font-normal ">
            <p className="text-sm leading-none">vendor</p>
            <p className="text-xs text-muted-foreground leading-none">
              vendor@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile">
          <DropdownMenuItem>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>My Account</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
