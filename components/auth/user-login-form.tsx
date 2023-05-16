"use client"

import React, { useRef } from "react"
import { ApiClient, ApiResponse } from "@/src/api-client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function UserLoginForm(): JSX.Element {
  const usernameRef: React.RefObject<HTMLInputElement> = useRef(null)
  const passwordRef: React.RefObject<HTMLInputElement> = useRef(null)

  function onSubmit(event: React.SyntheticEvent): void {
    event.preventDefault()

    const username: string = usernameRef.current?.value ?? ""
    const password: string = passwordRef.current?.value ?? ""

    ApiClient.post<unknown>("/api/v1/user/login/", { username, password })
      .then((res: ApiResponse<unknown>) => console.log(res))
      .catch((err: unknown) => console.error(err))
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="username">
            Email
          </Label>
          <Input
            id="username"
            type="text"
            ref={usernameRef}
            placeholder="Username"
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="password">
            Email
          </Label>
          <Input
            id="password"
            type="password"
            ref={passwordRef}
            placeholder="Password"
          />
        </div>
        <Button>Login</Button>
      </div>
    </form>
  )
}
