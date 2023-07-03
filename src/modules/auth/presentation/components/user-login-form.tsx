"use client"

import React from "react"
import {useRouter, useSearchParams} from "next/navigation"
import {Loader2} from "lucide-react"
import {signIn} from "next-auth/react"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {toast} from "@/components/ui/use-toast"
import {authDictionaryImpl} from "@/auth/domain/config/auth-dictionary";

export default function UserLoginForm(): JSX.Element {
  const {
    credentialConfigOptions,
    loginForm: {emailField, passwordField, actionBtn}
  } = authDictionaryImpl
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

    const signInResult = await signIn(credentialConfigOptions.id, {
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
            {emailField.label}
          </Label>
          <Input
            id={emailField.id}
            type={emailField.type}
            ref={usernameRef}
            placeholder={emailField.placeHolder}
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="password">
            {passwordField.label}
          </Label>
          <Input
            id={passwordField.id}
            type={passwordField.type}
            ref={passwordRef}
            placeholder={passwordField.placeHolder}
          />
        </div>
        <Button disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
          {actionBtn.label}
        </Button>
      </div>
    </form>
  )
}
