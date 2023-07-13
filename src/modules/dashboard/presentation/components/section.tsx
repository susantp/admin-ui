import React from "react"

interface ISectionProps {
  children: JSX.Element
  label: string
  subLabel: string | null
  actionEl: JSX.Element | React.ReactNode
}

interface InterfaceMostViewedWrapperHeaderProps {
  label: string | null
  subLabel: string | null
}

function Header({
  label,
  subLabel,
}: InterfaceMostViewedWrapperHeaderProps): JSX.Element {
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

export default function Section({
  children,
  label,
  subLabel,
  actionEl,
}: ISectionProps): JSX.Element {
  return (
    <section id="info-section" className="py-10">
      <div className="flex flex-col lg:flex-row gap-y-5 justify-between border-b border-gray-200 pb-5">
        <Header label={label} subLabel={subLabel} />
        {actionEl}
      </div>
      {children}
    </section>
  )
}
