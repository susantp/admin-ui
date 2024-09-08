import React from "react"
import Image from "next/image"

import defaultLayout from "@/modules/auth/presentation/models/default/defaultLayout"

interface DefaultLayoutProps {
  children: React.ReactNode
}

export default function DefaultLayout({
  children,
}: DefaultLayoutProps): React.ReactNode {
  const {
    logo: { path, altText, height, width },
  } = defaultLayout
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
      </div>
      {children}
      <div />
    </div>
  )
}
