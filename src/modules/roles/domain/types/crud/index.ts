import {
  IServiceProps
} from "@/src/modules/global/domain/types/repository/global-repository";

export interface IRoleFormValues{
  roleName: string
  permissionValues: string[]
}
export interface ICreateRoleServiceProps extends IServiceProps {
  body: string
}
