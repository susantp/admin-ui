import React from "react"

interface IRoleListWrapperProps {
  children: JSX.Element | JSX.Element[]
}
export function RoleListWrapper({
  children,
}: IRoleListWrapperProps): JSX.Element {
  return (
    <div className=" mt-5 flex h-full flex-col bg-white shadow-xl">
      <ul className="flex-1 divide-y divide-gray-200 overflow-y-auto">
        {children}
      </ul>
    </div>
  )
}
