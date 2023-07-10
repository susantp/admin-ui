import React from "react"

interface InterfacePocTableWrapperProps {
  children: JSX.Element[]
}

export default function PocTableWrapper({
  children,
}: InterfacePocTableWrapperProps): JSX.Element {
  return <div id={`poc-table-wrapper`} className="flex flex-col gap-4 py-6">{children}</div>
}
