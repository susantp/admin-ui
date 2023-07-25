import { useEffect, useState } from "react"
import { IScreen } from "@/src/modules/global/domain/types/repository/global-repository"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import { currentScreenAtom } from "@/src/modules/global/presentation/state/global-states"
import { fetchRoles } from "@/src/modules/roles/domain/services/role-server-actions"
import { IRolesMappedResponseData } from "@/src/modules/roles/domain/types/repository"
import { rolesAtom } from "@/src/modules/roles/presentation/state/role-state"
import { useAtom, useAtomValue } from "jotai"

interface IUseRoleContainerActions {
  roles: IRolesMappedResponseData | null
  loading: boolean
  open: boolean
  toggleDialog: () => void
  handleDelete: () => void
  currentScreen: IScreen | null
}

export default function useRoleContainerActions(): IUseRoleContainerActions {
  const [roles, setRoles] = useAtom(rolesAtom)
  const currentScreen = useAtomValue<IScreen | null>(currentScreenAtom)
  const [loading, setLoading] = useState<boolean>(true)
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    fetchRoles({
      xScreen: currentScreen,
    })
      .then((data) => {
        if (data) {
          const mappedData: IRolesMappedResponseData =
            getHelpers.mapRolesData(data)
          setRoles(mappedData)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
      .finally(() => setLoading(false))

    return (): void => setRoles(null)
  }, [currentScreen?.id])

  const toggleDialog = (): void => setOpen(!open)
  const handleDelete = (): void => setOpen(true)
  return {
    roles,
    loading,
    open,
    handleDelete,
    toggleDialog,
    currentScreen,
  }
}
