"use client"

import React, {ReactNode} from "react"
import {SessionProvider} from "next-auth/react"
import {ToastContainer} from "react-toastify";

interface ProviderProps {
  children: ReactNode
}

export default function Providers({ children }: ProviderProps): ReactNode {
  return <SessionProvider>{children}</SessionProvider>
}
