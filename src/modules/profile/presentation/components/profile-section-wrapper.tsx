import React, { ReactNode } from "react"
import { IProfileSectionWrapper } from "@/src/modules/profile/domain/types/presentation/component"

export default function ProfileSectionWrapper({
  children,
}: IProfileSectionWrapper): ReactNode {
  return (
    <div className="flex flex-col gap-14 md:gap-4  py-6" id="sectionWrapper">
      {children}
    </div>
  )
}
