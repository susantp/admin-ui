"use client"

import React from "react"
import { useSession } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserCard(): JSX.Element {
  const session = useSession()

  const user = session.data?.user
  const name = [user?.firstName, user?.lastName].join(" ")
  const initials = [user?.firstName.at(0), user?.lastName.at(0)].join("")

  return (
    <div className="bg-glass rounded-md p-2.5 flex gap-4 items-center">
      <Avatar>
        <AvatarImage src="/favico.ico" />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-sm">{name}</h3>
        <p className="text-xs">{user?.email}</p>
      </div>
    </div>
  )
}
