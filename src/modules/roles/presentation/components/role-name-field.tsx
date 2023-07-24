import {Input} from "@/components/ui/input";
import React from "react";

interface IRoleNameFieldProps {
  nameValue: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function RoleNameField({
                                        nameValue,
                                        handleChange,
                                      }: IRoleNameFieldProps): JSX.Element {
  return <div id="role-name-field"
              className="divide-y divide-gray-200 px-4 sm:px-6">
    <div className="space-y-6 pb-5 pt-6">
      <div>
        <p
          className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </p>
        <div className="mt-2">
          <Input type="text" name="roleName" id="roleName" value={nameValue}
                 onChange={(e): void => handleChange(e)}/>
        </div>
      </div>
    </div>
  </div>
}
