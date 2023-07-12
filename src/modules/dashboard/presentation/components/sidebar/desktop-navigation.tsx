import React from "react"

interface IDesktopNavigationProps {
  children: JSX.Element[] | JSX.Element
}

function DesktopNavigation({ children }: IDesktopNavigationProps): JSX.Element {
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex flex-grow flex-col overflow-y-auto bg-teal-700 pt-5">
        <div className="flex flex-shrink-0 items-center px-4">
          <h3 className="text-white font-bold text-2xl">SOA-POC</h3>
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">{children}</nav>
        </div>
      </div>
    </div>
  )
}

export default DesktopNavigation
