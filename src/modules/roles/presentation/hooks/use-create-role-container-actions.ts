import { useEffect, useState } from "react"
import { IScreen } from "@/src/modules/global/domain/types/repository/global-repository"
import { currentScreenAtom } from "@/src/modules/global/presentation/state/global-states"
import { fetPermissions } from "@/src/modules/roles/domain/services/role-service"
import {
  IGroupedScreenWithPermissions,
  IPermission,
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import { permissionsAtom } from "@/src/modules/roles/presentation/state/role-state"
import { useAtom, useAtomValue } from "jotai"

interface IUseCreateRoleContainerActions {
  permissions: IPermission[] | null
  loading: boolean
  groupedData: IGroupedScreenWithPermissions[] | undefined
}

export default function useCreateRoleContainerActions(): IUseCreateRoleContainerActions {
  const [permissions, setPermissions] = useAtom(permissionsAtom)
  const currentScreen = useAtomValue<IScreen | null>(currentScreenAtom)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetPermissions({ xScreen: currentScreen })
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
        const { screen, id, code } = obj
        const existingEntry: IGroupedScreenWithPermissions | undefined =
          acc.find((entry) => entry.screen === screen)

        if (existingEntry) {
          existingEntry.permissions.push({ id, code })
        } else {
          acc.push({ screen, permissions: [{ id, code }] })
        }

        return acc
      },
      []
    )

  return { permissions, loading, groupedData }
}
