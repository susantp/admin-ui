import React, { ReactNode } from "react"

interface IRoleListWrapperProps {
  children: ReactNode
}

export function PocRoleListWrapper({
  children,
}: IRoleListWrapperProps): JSX.Element {
  return (
    <div className="flex h-full flex-col bg-white shadow-xl">
      <div className="flex-1 divide-y divide-gray-200 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
