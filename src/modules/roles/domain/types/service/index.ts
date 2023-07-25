import { Dispatch, SetStateAction } from "react"
import { IServiceProps } from "@/src/modules/global/domain/types/repository/global-repository"
import {
  IPermission,
  IRole,
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import { FormikHelpers, FormikValues } from "formik"
import * as Yup from "yup"

export interface IRoleFormValues extends FormikValues {
  name: string
  permissions: string[]
}

export interface ICreateRoleServiceProps extends IServiceProps {
  body: BodyInit
}

export interface IUpdateRoleProps extends IServiceProps {
  roleId: string
  body: BodyInit
}

export interface IFetchRoleProps extends IServiceProps {
  roleId: string
}

export interface IGetGroupedData {
  permissions: IPermission[]
}

export interface IGetFormikHookParams<T extends object> {
  initialValues: T
  formSchema: Yup.ObjectSchema<T>
  handleSubmit: (values: T, actions: FormikHelpers<T>) => Promise<void>
}

export interface IHelperTexts {
  formTitle: string
  formSubtitle: string
  dialogBoxTitle: string
  dialogBoxDescription: string
}

export interface IGetHelperTextsParams {
  slug: string | null
}

export interface IHandleFormSubmitResponseParams {
  response: IRole | null
  open: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  setApiError: Dispatch<SetStateAction<{ message: string }>>
  actions: FormikHelpers<IRoleFormValues>
  errorMsg: string
}

export interface IGetPermissionIdsProps {
  permissions: IPermission[]
}
