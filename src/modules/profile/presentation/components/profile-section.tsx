import React, { ReactNode } from "react"
import { IProfileSectionProps } from "@/src/modules/profile/domain/types/presentation/component"

export default function ProfileSection({
  children,
  labels,
  id,
}: IProfileSectionProps): ReactNode {
  const { subtitle, title } = labels
  return (
    <div
      className="flex flex-col md:flex-row justify-between gap-4"
      id={`${id}Section`}
    >
      <div className="flex flex-col w-full md:w-4/12" id={`${id}Header`}>
        <p className="text-lg leading-6 font-medium text-gray-900">{title}</p>
        <p className="text-sm leading-5 font-normal text-gray-500">
          {subtitle}
        </p>
      </div>

      <div className="w-full md:w-8/12 bg-white p-6" id={`${id}Fields`}>
        {children}
      </div>
    </div>
  )
}
