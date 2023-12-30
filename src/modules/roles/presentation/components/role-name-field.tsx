import React, { ReactNode } from "react"
import ErrorDiv from "@/src/modules/roles/presentation/components/error-div"

import { Input } from "@/components/ui/input"

interface IRoleNameFieldProps {
  nameValue: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  validationErrors: string | undefined
}

export default function RoleNameField({
  nameValue,
  handleChange,
  validationErrors,
}: IRoleNameFieldProps): ReactNode {
  return (
    <div id="role-name-field" className="divide-y divide-gray-200 px-4 sm:px-6">
      <div className="space-y-6 pb-5 pt-6">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          Name{" "}
          {validationErrors && <ErrorDiv errorMessage={validationErrors} />}
          <div className="mt-2">
            <Input
              type="text"
              name="name"
              id="roleName"
              value={nameValue}
              onChange={(e): void => handleChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
