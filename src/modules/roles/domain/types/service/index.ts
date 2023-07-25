import {
  IServiceProps
} from "@/src/modules/global/domain/types/repository/global-repository";
import {FormikHelpers, FormikValues} from "formik";
import {
  IPermission
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";
import * as Yup from "yup";

export interface IRoleFormValues extends FormikValues {
  name: string
  permissions: string[]
}

export interface ICreateRoleServiceProps extends IServiceProps {
  body: string
}

export interface IGetGroupedData {
  permissions: IPermission[]
}

export interface IGetFormikHook <T extends object>{
  initialValues: T
  formSchema: Yup.ObjectSchema<T>
  handleSubmit: (values: T, actions: FormikHelpers<T>) => Promise<void>
}
