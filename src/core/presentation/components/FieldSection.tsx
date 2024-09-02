import React, { ReactElement } from "react"

import { IFieldSectionProps } from "@/modules/user-profile/components"

export default function FieldSection({
  children,
}: IFieldSectionProps): ReactElement {
  return <div className="flex flex-col gap-y-2 w-1/2">{children}</div>
}
