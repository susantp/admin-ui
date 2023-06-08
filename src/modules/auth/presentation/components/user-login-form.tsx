"use client"

import React, { useRef } from "react"
import useAuth from "@/auth/presentation/hooks/use-auth"
import { AuthState } from "@/auth/presentation/state/auth-atom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function UserLoginForm(): JSX.Element {
  const usernameRef: React.RefObject<HTMLInputElement> = useRef(null)
  const passwordRef: React.RefObject<HTMLInputElement> = useRef(null)

  const {
    login,
    authState,
  }: {
    authState: AuthState
    login: (username: string, password: string) => Promise<void>
  } = useAuth()

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    const username: string = usernameRef.current?.value ?? ""
    const password: string = passwordRef.current?.value ?? ""

    login(username, password).catch((err) => console.log(err))
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
        <p className="text-sm text-center">
          {authState.loading && "Loading..."}
          {authState.error}
          {authState.data && "Authenticated"}
        </p>
      </div>
    </form>
  )
}
