"use client"

import React from "react"
import { userService } from "@/src/modules/user-management/domain/service/user-service"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function UserCreateForm(): JSX.Element {
  const usernameRef: React.RefObject<HTMLInputElement> = React.useRef(null)
  const emailRef: React.RefObject<HTMLInputElement> = React.useRef(null)

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  function onSubmit(event: React.SyntheticEvent): void {
    event.preventDefault()

    userService
      .createUser()
      .then((res) => {
        console.log("USER CREATED:", res)
        setIsLoading(false)
        toast({
          title: "User Created",
          description: "User Created",
          variant: "destructive",
        })
      })
      .catch((err) => {
        console.log("ERROR", err)
        setIsLoading(false)
        toast({
          title: "User Creation Failed",
          description: "Could not create user",
          variant: "destructive",
        })
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="username">
            Username
          </Label>
          <Input
            id="username"
            type="text"
            ref={usernameRef}
            placeholder="Username"
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            E-mail
          </Label>
          <Input id="email" type="email" ref={emailRef} placeholder="E-mail" />
        </div>
        <Button disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create
        </Button>
      </div>
    </form>
  )
}
