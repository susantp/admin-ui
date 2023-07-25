import React from "react";

interface IPocColDivProps {
  children: React.ReactNode
  lgColCount: number
  defaultColCount: number
}

export default function PocColDiv({
                                    children,
                                    lgColCount,
                                    defaultColCount
                                  }: IPocColDivProps): React.ReactNode {
  return <div
    id="screens"
    className={`grid grid-cols-${defaultColCount} lg:grid-cols-${lgColCount} items-center justify-center gap-6`}
  >
    {children}
  </div>
}
