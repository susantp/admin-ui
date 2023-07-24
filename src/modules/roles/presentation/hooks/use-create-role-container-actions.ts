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
} from "@/src/modules/roles/domain/services/role-service"
import {
  IGroupedScreenWithPermissions,
  IPermission,
  IRole,
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import {
  permissionsAtom
} from "@/src/modules/roles/presentation/state/role-state"
import {useAtom, useAtomValue} from "jotai"
import {IRoleFormValues} from "@/src/modules/roles/domain/types/crud";
import {FormikHelpers, FormikProps, useFormik} from "formik";
import {
  roleFormFieldValue
} from "@/src/modules/roles/domain/objects/role-form-field-values";
import * as Yup from 'yup'

interface IUseCreateRoleContainerActions {
  permissions: IPermission[] | null
  loading: boolean
  groupedData: IGroupedScreenWithPermissions[] | undefined
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

  const groupedData: IGroupedScreenWithPermissions[] | undefined =
    permissions?.reduce(
      (acc: IGroupedScreenWithPermissions[], obj: IPermission) => {
        const {screen, id, code} = obj
        const existingEntry: IGroupedScreenWithPermissions | undefined =
          acc.find((entry) => entry.screen === screen)

        if (existingEntry) {
          existingEntry.permissions.push({id, code})
        } else {
          acc.push({screen, permissions: [{id, code}]})
        }

        return acc
      },
      []
    )

  const displayErrorMessage: Yup.ObjectSchema<IRoleFormValues> = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    permissions: Yup.array().of(Yup.string().required('Required')).min(0).required('Required'),
  })

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

  const roleCreateForm: FormikProps<IRoleFormValues> = useFormik<IRoleFormValues>({
    enableReinitialize: true,
    initialValues: roleFormFieldValue,
    validationSchema: displayErrorMessage,
    onSubmit: handleFormSubmit
  })

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
