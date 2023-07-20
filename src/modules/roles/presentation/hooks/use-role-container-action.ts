import { useEffect, useState } from "react"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import {
  IFetchRolesData,
  IFetchRolesOriginalData,
} from "@/src/modules/roles/domain/types/repository"
import { rolesAtom } from "@/src/modules/roles/presentation/state/role-state"
import { useAtom } from "jotai"

interface IUseRoleContainerAction {
  roles: IFetchRolesData | null
  loading: boolean
  open: boolean
  toggleDialog: () => void
  handleDelete: () => void
}

export default function useRoleContainerAction(): IUseRoleContainerAction {
  const [roles, setRoles] = useAtom(rolesAtom)
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const controller: AbortController = new AbortController()
    const { signal } = controller
    const getRoles = async (): Promise<IFetchRolesData> => {
      const appUrl: string = getHelpers.getAppUrl()
      setLoading(true)
      const response: Response = await fetch(`${appUrl}/api/roles`, { signal })
      const data: IFetchRolesOriginalData =
        (await response.json()) as IFetchRolesOriginalData
      return getHelpers.mapApiResponseToIFetchRolesData(data)
    }
    getRoles()
      .then((data): void => {
        setRoles(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [])

  const toggleDialog = (): void => setOpen(!open)
  const handleDelete = (): void => setOpen(true)
  return { roles, loading, open, handleDelete, toggleDialog }
}
