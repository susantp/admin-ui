import {useEffect, useState} from "react"
import {
  IScreen
} from "@/src/modules/global/domain/types/repository/global-repository"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import {
  currentScreenAtom
} from "@/src/modules/global/presentation/state/global-states"
import {
  fetchRoles
} from "@/src/modules/roles/domain/services/role-server-actions"
import {
  IRolesMappedResponseData
} from "@/src/modules/roles/domain/types/repository"
import {rolesAtom} from "@/src/modules/roles/presentation/state/role-state"
import {useAtom, useAtomValue} from "jotai"
import {IRole} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";

interface IUseRoleContainerActions {
  roles: IRolesMappedResponseData | null
  loading: boolean
  handleDelete: (role: IRole) => void
  openModal: boolean
  toggleModal: () => void
  currentScreen: IScreen | null
  handleConfirmDelete: () => void
  deletionRole: IRole | null
}

export default function useRoleContainerActions(): IUseRoleContainerActions {
  const [roles, setRoles] = useAtom(rolesAtom)
  const currentScreen = useAtomValue<IScreen | null>(currentScreenAtom)
  const [loading, setLoading] = useState<boolean>(true)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [deletionRole, setDeletionRole] = useState<IRole | null>(null)

  useEffect(() => {
    if (!currentScreen) return (): void => setRoles(null)

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
  }, [currentScreen])

  const toggleModal = (): void => setOpenModal(!openModal)
  const handleDelete = (role: IRole): void => {
    setDeletionRole(role)
    toggleModal()
  }
  const handleConfirmDelete = (): void => {
    // TODO get deletion role id and send api request to delete
    console.log(deletionRole)
  }
  return {
    roles,
    loading,
    handleDelete,
    handleConfirmDelete,
    currentScreen,
    toggleModal,
    openModal,
    deletionRole
  }
}
