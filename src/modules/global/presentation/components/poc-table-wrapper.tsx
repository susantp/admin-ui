import React, {ReactNode} from "react"

interface IPocTableWrapperProps {
  children: ReactNode
}

export default function PocTableWrapper({
  children,
}: IPocTableWrapperProps): ReactNode {
  return (
    <div id="poc-table-wrapper" className="flex flex-col gap-4 py-6">
      {children}
    </div>
  )
}
