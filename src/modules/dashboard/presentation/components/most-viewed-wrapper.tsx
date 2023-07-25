import React, { ReactNode } from "react"

interface IMostViewedWrapperProps {
  children: ReactNode
}
export default function MostViewedWrapper({
  children,
}: IMostViewedWrapperProps): ReactNode {
  return (
    <div
      id="most-viewed-wrapper"
      className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 sm:gap-6 lg:grid-cols-2"
    >
      {children}
    </div>
  )
}
