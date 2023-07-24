import {
  IServiceProps
} from "@/src/modules/global/domain/types/repository/global-repository";
import {FormikValues} from "formik";

export interface IRoleFormValues extends FormikValues {
  name: string
  permissions: string[]
}

export interface ICreateRoleServiceProps extends IServiceProps {
  body: string
}
