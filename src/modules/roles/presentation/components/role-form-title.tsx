import React from "react"

interface IRoleFormTitleProps {
  title: string
  subtitle: string
}

export default function RoleFormTitle({
  title,
  subtitle,
}: IRoleFormTitleProps): React.ReactNode {
  return (
    <div id="form-title" className="bg-teal-700 py-6 px-4 sm:px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium text-white">{title}</h1>
      </div>
      <div className="mt-1">
        <p className="text-sm text-white">{subtitle}</p>
      </div>
    </div>
  )
}
