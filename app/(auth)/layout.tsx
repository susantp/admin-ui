import React from "react"
import Image from "next/image"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-evenly">
      <div className="space-y-6">
        <Image
          src="/images/lis.png"
          alt="Next.js Logo"
          width={196}
          height={32}
          priority
        />
        <h2 className="text-3xl font-semibold text-center">SOA POC</h2>
      </div>
      {children}
      <div />
    </div>
  )
}
