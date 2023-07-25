import React, {ReactNode} from "react"

interface InterfaceMostViewedWrapperHeaderProps {
  label: string | null
  subLabel: string | null
}

export function PocSectionHeader({
  label,
  subLabel,
}: InterfaceMostViewedWrapperHeaderProps): ReactNode {
  return (
    <div id="section-header-wrapper">
      <h2 className="text-lg font-medium leading-6 text-gray-900 ">{label}</h2>
      {subLabel && (
        <p className="mt-2 text-sm text-gray-700">
          A list of all the users in the system including their name, title,
          email and role.
        </p>
      )}
    </div>
  )
}
