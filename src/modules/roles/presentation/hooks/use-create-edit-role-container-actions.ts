import {Dispatch, SetStateAction, useEffect, useState} from "react"
import {
  IScreen
} from "@/src/modules/global/domain/types/repository/global-repository"
import {
  currentScreenAtom
} from "@/src/modules/global/presentation/state/global-states"
import {
  createRole,
  fetchPermissions,
  fetchRole,
  updateRole
} from "@/src/modules/roles/domain/services/role-server-actions"
import {
  IGroupedScreenWithPermissions,
  IPermission,
  IRole,
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import {useAtomValue} from "jotai"
import {FormikHelpers, FormikProps, useFormik} from "formik";
import {
  roleFormFieldValue
} from "@/src/modules/roles/domain/objects/role-form-field-values";
import * as Yup from 'yup'
import {
  getGroupedData,
  getHelperTexts,
  getPermissionIds,
  getRoleFormikConfig,
  getRoleFormSchema,
  handleFormSubmitResponse
} from "@/src/modules/roles/domain/services/create-edit-role-utils";
import {FormikConfig} from "formik/dist/types";
import {IHelperTexts, IRoleFormValues} from "../../domain/types/service";

interface IUseCreateRoleContainerActions {
  permissions: IPermission[] | null
  loading: boolean
  groupedData: IGroupedScreenWithPermissions[] | null
  roleCreateForm: FormikProps<IRoleFormValues>
  open: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  apiError: { message: string }
  helperTexts: IHelperTexts
}

interface IUseCreateRoleContainerActionsProps {
  slug: string | null
}


export default function useCreateEditRoleContainerActions({slug}: IUseCreateRoleContainerActionsProps): IUseCreateRoleContainerActions {
  const [permissions, setPermissions] = useState<IPermission[] | null>(null)
  const currentScreen = useAtomValue<IScreen | null>(currentScreenAtom)
  const [loading, setLoading] = useState<boolean>(true)
  const [open, setIsOpen] = useState(false)
  const [apiError, setApiError] = useState({message: ''})
  const [initialValues, setInitialValues] = useState<IRoleFormValues>(roleFormFieldValue)

  useEffect(() => {
    if (currentScreen) {
      setLoading(true)
      fetchPermissions({xScreen: currentScreen})
        .then((data) => {
          if (data) {
            setPermissions(data)
          }
          setLoading(false)
        })
        .catch(() => setLoading(false))
        .finally(() => setLoading(false))
    }

    if (slug && currentScreen) {
      fetchRole({
        xScreen: currentScreen,
        roleId: slug
      })
        .then(data => {
          if (data) {
            const permissionsValues: string[] = getPermissionIds({permissions: data.permissions})
            const {name} = data
            setInitialValues({name, permissions: permissionsValues})
          }
        })
        .catch(() => setLoading(false))
        .finally(() => setLoading(false))
    }
    return (): void => {
      setPermissions(null)
      setInitialValues(roleFormFieldValue)
    }
  }, [currentScreen?.id])


  const helperTexts: IHelperTexts = getHelperTexts({slug})

  const groupedData: IGroupedScreenWithPermissions[] | null = permissions && getGroupedData({permissions})

  const roleFormSchema: Yup.ObjectSchema<IRoleFormValues> = getRoleFormSchema()

  const handleFormSubmit = async (values: IRoleFormValues, actions: FormikHelpers<IRoleFormValues>): Promise<void> => {
    // TODO if not current screen set instead of throwing error give toast message
    if (!currentScreen) throw new Error("Screen not set yet.")
    const response: IRole | null = slug
      ? await updateRole({
        xScreen: currentScreen,
        body: JSON.stringify(values),
        roleId: slug
      })
      : await createRole({
        xScreen: currentScreen,
        body: JSON.stringify(values)
      })

    handleFormSubmitResponse({
      actions,
      response,
      setIsOpen,
      open,
      errorMsg: "Operation not succeeded, try again.",
      setApiError
    })

  }

  const roleFormikConfig: FormikConfig<IRoleFormValues> = getRoleFormikConfig<IRoleFormValues>({
    formSchema: roleFormSchema,
    initialValues,
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
    apiError,
    helperTexts
  }
}
