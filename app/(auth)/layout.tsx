import React from "react"
import Image from "next/image"
import { authConfig } from "@/auth/domain/config/auth-config"

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
        <h2 className="text-3xl font-semibold text-center">{pageTitle}</h2>
      </div>
      {children}
      <div />
    </div>
  )
}
