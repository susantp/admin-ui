"use client"

import React from "react"
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from "recoil"

interface ProviderProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProviderProps): JSX.Element {
  return (
    <SessionProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  )
}
