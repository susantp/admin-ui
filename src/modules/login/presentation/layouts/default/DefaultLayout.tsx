import React from "react"
import Image from "next/image"

import defaultLayout from "@/modules/login/presentation/models/default/defaultLayout"

interface DefaultLayoutProps {
  children: React.ReactNode
}

export default function DefaultLayout({
  children,
}: DefaultLayoutProps): React.ReactNode {
  const {
    logo: { path, altText, height, width },
    meta: { title },
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
        <h1 className="text-3xl font-medium text-center">{title}</h1>
      </div>
      {children}
      <div />
    </div>
  )
}
