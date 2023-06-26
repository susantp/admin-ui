"use client"

import React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function UserRegisterForm(): JSX.Element {
  const usernameRef: React.RefObject<HTMLInputElement> = React.useRef(null)
  const passwordRef: React.RefObject<HTMLInputElement> = React.useRef(null)
  const emailRef: React.RefObject<HTMLInputElement> = React.useRef(null)
  const phoneRef: React.RefObject<HTMLInputElement> = React.useRef(null)

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    // const username: string = usernameRef.current?.value ?? ""
    // const password: string = passwordRef.current?.value ?? ""
    // const email: string = emailRef.current?.value ?? ""
    // const phone: string = phoneRef.current?.value ?? ""
    //
    // signIn("credentials", {
    //   redirect: false,
    //   username,
    //   password,
    //   email,
    //   phone,
    //   callbackUrl: searchParams.get("from") ?? "/",
    // })
    //   .then((res) => {
    //     setIsLoading(false)
    //     if (res?.ok) {
    //       router.replace(res.url ?? "/")
    //     }
    //   })
    //   .catch((err) => {
    //     setIsLoading(false)
    //     console.log("SIGN UP ERROR:", err)
    //   })
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
        <Button>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Register
        </Button>
      </div>
    </form>
  )
}
