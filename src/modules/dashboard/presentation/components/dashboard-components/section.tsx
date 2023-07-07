import React from "react";

interface InterfaceMostViewedWrapperProps {
  children: JSX.Element,
  label: string
}

interface InterfaceMostViewedWrapperHeaderProps {
  label: string | null
}

function Header({label}: InterfaceMostViewedWrapperHeaderProps): JSX.Element {
  return <div id="section-header-wrapper"
    className="border-b border-gray-200 pb-5">
    <h2 className="text-lg font-medium leading-6 text-gray-900 ">
      {label}
    </h2>
  </div>
}

export default function Section({
                                            children,
                                            label
                                          }: InterfaceMostViewedWrapperProps): JSX.Element {

  return <section id="info-section" className="py-10">
    <Header label={label}/>
    {children}
  </section>
}
