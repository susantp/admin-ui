import React, {ReactNode} from "react"

interface InterfaceContainerProps {
  children: ReactNode
}

export default function PocContainer({
  children,
}: InterfaceContainerProps): ReactNode {
  return (
    <div className="p-4 sm:px-6 md:px-8 w-full" id="dashboard-container">
      {children}
    </div>
  )
}
