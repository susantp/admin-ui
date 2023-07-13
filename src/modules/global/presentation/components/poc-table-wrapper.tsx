import React from "react"

interface IPocTableWrapperProps {
  children: JSX.Element[]
}

export default function PocTableWrapper({
  children,
}: IPocTableWrapperProps): JSX.Element {
  return (
    <div id="poc-table-wrapper" className="flex flex-col gap-4 py-6">
      {children}
    </div>
  )
}
