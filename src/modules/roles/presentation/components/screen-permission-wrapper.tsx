import React from "react";

interface IScreenPermissionWrapperProps {
  children: React.ReactNode
}

export default function ScreenPermissionWrapper({
                                   children,
                                 }: IScreenPermissionWrapperProps): React.ReactNode {
  return (
    <div
      id="screen-permission-wrapper"
      className="flex flex-col w-full sm:px-6 gap-y-4"
    >
      <div
        id="wrapper-title"
        className="bg-primary text-white py-6 px-4 sm:px-6 items-center flex"
      >
        <h2 className="text-lg">Manage Permissions</h2>
      </div>

      {children}
    </div>
  )
}
