import React from "react"
import {
  IGroupedScreenWithPermissions
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import {Fingerprint} from "lucide-react"
import {FormikErrors} from "formik/dist/types";
import {IRoleFormValues} from "@/src/modules/roles/domain/types/crud";

interface IScreenPermissionBoxProps {
  screenWithPermission: IGroupedScreenWithPermissions
  values: string[]
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  handleSetFieldValues: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<IRoleFormValues>>;
}


export default function ScreenPermissionBox({
                                              screenWithPermission,
                                              values,
                                              handleSetFieldValues
                                            }: IScreenPermissionBoxProps): JSX.Element | null {
  const {screen, permissions} = screenWithPermission
  return (
    <div className="flex flex-col shadow-md">
      <div id="screen-title" className="flex p-2 bg-secondary">
        <p className="text-primary font-semibold">{screen}</p>
      </div>

      {permissions.map(permission => (
        <div
          key={permission.id}
          id="permissionDiv"
          className="flex gap-x-5 p-3 border-gray-200 border-2"
        >
          <Fingerprint/>
          <p id="permission-name" className="flex-1">
            {permission.code}
          </p>

          <input type="checkbox" id="p-1" value={permission.id}
                 key={permission.id}
                 name="permissions" className="flex-none"
                 checked={values.includes(permission.id)}
                 onChange={async (): Promise<void> => {
                   const index: number = values.indexOf(permission.id);
                   const newPermissions: string[] = [...values]
                   if (index === -1) {
                     newPermissions.push(permission.id)
                   } else {
                     newPermissions.splice(index, 1)
                   }
                   await handleSetFieldValues('permissions', newPermissions)
                 }}
          />
        </div>
      ))}
    </div>
  )
}
