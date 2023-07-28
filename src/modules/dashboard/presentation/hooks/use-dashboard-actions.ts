import { useEffect, useState } from "react"
import { fetchTopRoles } from "@/src/modules/dashboard/domain/services/dashboard-services"
import { IScreen } from "@/src/modules/global/domain/types/repository/global-repository"
import { currentScreenAtom } from "@/src/modules/global/presentation/state/global-states"
import { ITopRolesResponseData } from "@/src/modules/role/domain/types/endpoints/role-endpoints"
import { useAtomValue } from "jotai"

interface IDashboardActions {
  loading: boolean
  topRoles: ITopRolesResponseData[] | null
}

export default function useDashboardActions(): IDashboardActions {
  const currentScreen = useAtomValue<IScreen | null>(currentScreenAtom)
  const [loading, setLoading] = useState<boolean>(false)
  const [topRoles, setTopRoles] = useState<ITopRolesResponseData[] | null>(null)

  useEffect(() => {
    if (currentScreen) {
      setLoading(true)
      fetchTopRoles({ xScreen: currentScreen })
        .then((data) => {
          if (data) {
            setTopRoles(data)
          }
          setLoading(false)
        })
        .catch(() => setLoading(false))
        .finally(() => setLoading(false))
    }

    return (): void => {
      setTopRoles(null)
      setLoading(false)
    }
  }, [currentScreen])

  return { loading, topRoles }
}
