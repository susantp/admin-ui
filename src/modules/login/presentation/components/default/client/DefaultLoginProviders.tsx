"use client"

import React, { ReactElement } from "react"

import { GithubIcon } from "lucide-react"

import { useAuth } from "@/modules/login/presentation/hooks/use-auth"

import { Button } from "@/components/ui/button"

export default function DefaultLoginProviders(): ReactElement {
  const { getLoginProviderLink } = useAuth()

  return (
    <Button onClick={getLoginProviderLink}>
      <GithubIcon size="24" />
      <p className="px-3">Login with Github</p>
    </Button>
  )
}
