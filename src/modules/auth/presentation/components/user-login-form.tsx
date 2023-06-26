"use client"

import React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function UserLoginForm(): JSX.Element {
  const usernameRef: React.RefObject<HTMLInputElement> = React.useRef(null)
  const passwordRef: React.RefObject<HTMLInputElement> = React.useRef(null)

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    setIsLoading(true)

    const username: string = usernameRef.current?.value ?? ""
    const password: string = passwordRef.current?.value ?? ""

    const signInResult = await signIn("credentials", {
      redirect: false,
      username,
      password,
      callbackUrl: searchParams.get("from") ?? "/",
    })

    setIsLoading(false)

    if (!signInResult?.error) {
      router.replace(signInResult?.url ?? "/")
    } else {
      toast({
        title: "Sign in failed.",
        description: signInResult.error,
        variant: "destructive",
      })
    }
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
        <Button disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Login
        </Button>
      </div>
    </form>
  )
}
