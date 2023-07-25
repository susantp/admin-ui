import {Dispatch, SetStateAction, useEffect, useState} from "react"
import {
  IScreen
} from "@/src/modules/global/domain/types/repository/global-repository"
import {
  currentScreenAtom
} from "@/src/modules/global/presentation/state/global-states"
import {
  createRole,
  fetchPermissions
} from "@/src/modules/roles/domain/services/role-server-actions"
import {
  IGroupedScreenWithPermissions,
  IPermission,
  IRole,
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import {
  permissionsAtom
} from "@/src/modules/roles/presentation/state/role-state"
import {useAtom, useAtomValue} from "jotai"
import {FormikHelpers, FormikProps, useFormik} from "formik";
import {
  roleFormFieldValue
} from "@/src/modules/roles/domain/objects/role-form-field-values";
import * as Yup from 'yup'
import {
  getGroupedData,
  getRoleFormikConfig,
  getRoleFormSchema
} from "@/src/modules/roles/domain/services/create-role-utils";
import {FormikConfig} from "formik/dist/types";
import {IRoleFormValues} from "../../domain/types/service";

interface IUseCreateRoleContainerActions {
  permissions: IPermission[] | null
  loading: boolean
  groupedData: IGroupedScreenWithPermissions[] | null
  roleCreateForm: FormikProps<IRoleFormValues>
  open: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  apiError: { message: string }
}

export default function useCreateRoleContainerActions(): IUseCreateRoleContainerActions {
  const [permissions, setPermissions] = useAtom(permissionsAtom)
  const currentScreen = useAtomValue<IScreen | null>(currentScreenAtom)
  const [loading, setLoading] = useState<boolean>(true)
  const [open, setIsOpen] = useState(false)
  const [apiError, setApiError] = useState({message: ''})

  useEffect(() => {
    fetchPermissions({xScreen: currentScreen})
      .then((data) => {
        if (data) {
          setPermissions(data)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
      .finally(() => setLoading(false))

    return (): void => setPermissions(null)
  }, [currentScreen?.id])

  const groupedData: IGroupedScreenWithPermissions[] | null = permissions && getGroupedData({permissions})

  const roleFormSchema: Yup.ObjectSchema<IRoleFormValues> = getRoleFormSchema()

  const handleFormSubmit = async (values: IRoleFormValues, actions: FormikHelpers<IRoleFormValues>): Promise<void> => {
    const response: IRole | null = await createRole({
      xScreen: currentScreen,
      body: JSON.stringify(values)
    })
    if (!response || !('permissions' in response)) {
      setApiError(prevState => ({
        ...prevState,
        message: "Operation not succeeded, try again."
      }))
      setIsOpen(!open)
    }
    setIsOpen(!open)
    actions.resetForm()
  }

  const roleFormikConfig: FormikConfig<IRoleFormValues> = getRoleFormikConfig<IRoleFormValues>({
    formSchema: roleFormSchema,
    initialValues: roleFormFieldValue,
    handleSubmit: handleFormSubmit
  })

  const roleCreateForm: FormikProps<IRoleFormValues> = useFormik<IRoleFormValues>(roleFormikConfig)


  return {
    permissions,
    loading,
    groupedData,
    roleCreateForm,
    open,
    setIsOpen,
    apiError
  }
}
