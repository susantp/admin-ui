import React from "react"

interface InterfaceMostViewedWrapperProps {
  children: JSX.Element[]
}
export default function MostViewedWrapper({
  children,
}: InterfaceMostViewedWrapperProps): JSX.Element {
  return (
    <div
      id="most-viewed-wrapper"
      className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 sm:gap-6 lg:grid-cols-2"
    >
      {children}
    </div>
  )
}
