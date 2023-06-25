"use client"

import React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function UserLoginForm(): JSX.Element {
  const usernameRef: React.RefObject<HTMLInputElement> = React.useRef(null)
  const passwordRef: React.RefObject<HTMLInputElement> = React.useRef(null)

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    setIsLoading(true)

    const username: string = usernameRef.current?.value ?? ""
    const password: string = passwordRef.current?.value ?? ""

    signIn("credentials", {
      redirect: false,
      username,
      password,
      callbackUrl: searchParams.get("from") ?? "/",
    })
      .then((res) => {
        setIsLoading(false)
        if (res?.ok) {
          router.replace(res.url ?? "/")
        }
      })
      .catch((err) => {
        setIsLoading(false)
        console.log("SIGN IN ERROR:", err)
      })
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
        <Button disabled={isLoading}>Login</Button>
        <p className="text-sm text-center">{isLoading && "Loading..."}</p>
      </div>
    </form>
  )
}
