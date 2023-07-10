import React from "react";

interface InterfaceContainerProps {
  children: React.ReactNode
}

export default function PocContainer({children}: InterfaceContainerProps): JSX.Element {
  return (
    <div className="p-4 sm:px-6 md:px-8" id="dashboard-container">
      {children}
    </div>
  )
}
