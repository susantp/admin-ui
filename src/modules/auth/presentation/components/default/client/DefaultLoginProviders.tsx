"use client"

import React, { ReactElement } from "react"

import { GithubIcon, Loader2 } from "lucide-react"

import { useAuth } from "@/modules/auth/presentation/hooks/use-auth"

import { Button } from "@/components/ui/button"

export default function DefaultLoginProviders(): ReactElement {
  const { isLoading, getLoginProviderLink } = useAuth()

  return (
    <Button onClick={getLoginProviderLink}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      <GithubIcon size="24" />
      <p className="px-3">Login with Github</p>
    </Button>
  )
}
