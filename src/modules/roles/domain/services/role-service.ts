import {InterfaceApiClient} from "@/src/modules/global/domain/types/api-client";
import getClient from "@/src/modules/global/domain/utils/get-client";
import {IRoleService} from "@/src/modules/roles/domain/types/repository";
import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";
import {
  roleEndpoints
} from "@/src/modules/roles/domain/objects/role-endpoints";


const roleService: IRoleService = {
  fetchRoles: async (): Promise<IRoleList[] | null> => {
    const client: InterfaceApiClient | null = await getClient.authentic({
      requestPath: roleEndpoints.fetchRoles,
      xScreen: null,
    })
    const responseRoles: IRoleList[] | null | undefined = await client?.getRequest<IRoleList[] | null>()
    if (!client || !responseRoles) return null
    return responseRoles
  }
}
export default roleService
