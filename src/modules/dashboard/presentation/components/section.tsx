import React, {ReactNode} from "react"
import { PocSectionHeader } from "@/src/modules/dashboard/presentation/components/poc-section-header"

interface ISectionProps {
  children: React.ReactNode | null
  subLabel: string | null
  label: string | null
  actionEl: React.ReactNode
}

export default function Section({
  children,
  label,
  subLabel,
  actionEl,
}: ISectionProps): ReactNode {
  return (
    <section id="info-section" className="py-5">
      {(label || subLabel) && (
        <div className="flex flex-col lg:flex-row gap-y-5 justify-between border-b border-gray-200 pb-5">
          <PocSectionHeader label={label} subLabel={subLabel} />
          {actionEl}
        </div>
      )}
      {children}
    </section>
  )
}
