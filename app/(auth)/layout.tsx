import React from "react"
import Image from "next/image"

import { authConfig } from "@/modules/auth/domain/auth-config"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({
  children,
}: AuthLayoutProps): React.ReactNode {
  const {
    pageTitle,
    logo: { path, altText, width, height },
  } = authConfig
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-evenly">
      <div className="space-y-6">
        <Image
          src={path}
          alt={altText}
          width={width}
          height={height}
          priority
        />
        <h1 className="text-3xl font-medium text-center">{pageTitle}</h1>
      </div>
      {children}
      <div />
    </div>
  )
}
