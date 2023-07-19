import { useEffect, useState } from "react"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import {
  IFetchRolesData,
  IFetchRolesOriginalData,
} from "@/src/modules/roles/domain/services/role-service"
import { rolesAtom } from "@/src/modules/roles/presentation/state/role-state"
import { useAtom } from "jotai"

import { mapApiResponseToIFetchRolesData } from "@/app/api/roles/route"

interface IUseRoleContainerAction {
  roles: IFetchRolesData | null
  loading: boolean
}

export default function useRoleContainerAction(): IUseRoleContainerAction {
  const [roles, setRoles] = useAtom(rolesAtom)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getRoles = async (): Promise<IFetchRolesData> => {
      const appUrl: string = getHelpers.getAppUrl()
      setLoading(true)
      const response: Response = await fetch(`${appUrl}/api/roles`)
      const data: IFetchRolesOriginalData =
        (await response.json()) as IFetchRolesOriginalData
      return mapApiResponseToIFetchRolesData(data)
    }
    getRoles()
      .then((data): void => {
        setRoles(data)
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        console.log(e)
      })
      .finally(() => setLoading(false))
  }, [])

  return { roles, loading }
}
