"use client"

import React, { useRef } from "react"
import useAuth from "@/auth/presentation/hooks/use-auth"
import { AuthState } from "@/auth/presentation/state/auth-atom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function UserRegisterForm(): JSX.Element {
  const usernameRef: React.RefObject<HTMLInputElement> = useRef(null)
  const passwordRef: React.RefObject<HTMLInputElement> = useRef(null)
  const emailRef: React.RefObject<HTMLInputElement> = useRef(null)
  const phoneRef: React.RefObject<HTMLInputElement> = useRef(null)

  const {
    register,
    authState,
  }: {
    authState: AuthState
    register: (
      username: string,
      password: string,
      email: string,
      phone: string
    ) => Promise<void>
  } = useAuth()

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    const username: string = usernameRef.current?.value ?? ""
    const password: string = passwordRef.current?.value ?? ""
    const email: string = emailRef.current?.value ?? ""
    const phone: string = phoneRef.current?.value ?? ""

    register(username, password, email, phone).catch((err) => console.log(err))
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
          <Label className="sr-only" htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            ref={passwordRef}
            placeholder="Password"
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="password1">
            Confirm Password
          </Label>
          <Input
            id="password1"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            ref={emailRef}
            placeholder="Email Address"
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="phone">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            ref={phoneRef}
            placeholder="Phone Number"
          />
        </div>
        <Button>Register</Button>
        <p className="text-sm text-center">
          {authState.loading && "Loading..."}
          {authState.error}
          {authState.data && "Authenticated"}
        </p>
      </div>
    </form>
  )
}
