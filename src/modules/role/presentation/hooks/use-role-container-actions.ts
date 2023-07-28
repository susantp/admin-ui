import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { INoContentApiResponse } from "@/src/modules/global/domain/types/api-client"
import { IScreen } from "@/src/modules/global/domain/types/repository/global-repository"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import { currentScreenAtom } from "@/src/modules/global/presentation/state/global-states"
import {
  fetchRoles,
  removeRole,
} from "@/src/modules/role/domain/services/role-server-actions"
import { IRole } from "@/src/modules/role/domain/types/endpoints/role-endpoints"
import { IRolesMappedResponseData } from "@/src/modules/role/domain/types/repository"
import { rolesAtom } from "@/src/modules/role/presentation/state/role-state"
import { useAtom, useAtomValue } from "jotai"

interface IUseRoleContainerActions {
  roles: IRolesMappedResponseData | null
  loading: boolean
  openDialog: boolean
  toggleDialog: () => void
  handleDelete: (role: IRole) => void
  openModal: boolean
  toggleModal: () => void
  currentScreen: IScreen | null
  handleConfirmDelete: () => Promise<void>
  deletionRole: IRole | null
  dialogBoxLabels: IDialogBoxLabels
}

interface IDialogBoxLabels {
  title: string
  description: string
}

export default function useRoleContainerActions(): IUseRoleContainerActions {
  const [roles, setRoles] = useAtom(rolesAtom)
  const currentScreen = useAtomValue<IScreen | null>(currentScreenAtom)
  const [loading, setLoading] = useState<boolean>(true)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [deletionRole, setDeletionRole] = useState<IRole | null>(null)
  const [dialogBoxLabels, setDialogBoxLabels] = useState<IDialogBoxLabels>({
    description: "",
    title: "",
  })

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
  }, [currentScreen, setRoles, openDialog])

  const toggleDialog = (): void => setOpenDialog(!openDialog)
  const toggleModal = (): void => setOpenModal(!openModal)
  const handleDelete = (role: IRole): void => {
    setDeletionRole(role)
    toggleModal()
  }

  const cancelPromptWithMessage = (
    labels: IDialogBoxLabels,
    handleDialogBoxLabels: Dispatch<SetStateAction<IDialogBoxLabels>>,
    handleModal: () => void,
    handleDialog: () => void
  ): void => {
    handleDialogBoxLabels(labels)
    handleModal()
    handleDialog()
  }

  const handleConfirmDelete = async (): Promise<void> => {
    if (!deletionRole) return
    if (!currentScreen) return
    const labels: IDialogBoxLabels = {
      title: "",
      description: "",
    }
    const { members } = deletionRole

    if (members) {
      const helperTexts: IDialogBoxLabels = {
        ...labels,
        title: "Operation failed!!",
        description: `${deletionRole.name} with ${members} ${
          members > 1 ? `members` : `member`
        } assigned can't be deleted.`,
      }
      cancelPromptWithMessage(
        helperTexts,
        setDialogBoxLabels,
        toggleModal,
        toggleDialog
      )
      return
    }

    const response: INoContentApiResponse | null = await removeRole({
      xScreen: currentScreen,
      roleId: deletionRole.id,
    })
    if (!response) {
      const responseTexts: IDialogBoxLabels = {
        ...labels,
        title: "Failed",
        description: "Sorry unintentional error occurred.",
      }
      cancelPromptWithMessage(
        responseTexts,
        setDialogBoxLabels,
        toggleModal,
        toggleDialog
      )
      return
    }
    const responseTexts: IDialogBoxLabels = {
      ...labels,
      title: "Success",
      description: response.message,
    }
    cancelPromptWithMessage(
      responseTexts,
      setDialogBoxLabels,
      toggleModal,
      toggleDialog
    )
  }

  return {
    roles,
    loading,
    openDialog,
    handleDelete,
    toggleDialog,
    handleConfirmDelete,
    currentScreen,
    toggleModal,
    openModal,
    deletionRole,
    dialogBoxLabels,
  }
}
