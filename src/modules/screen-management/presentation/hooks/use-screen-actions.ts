import { useRouter } from "next/navigation"

import { useAtomValue } from "jotai"

import { currentScreenAtom } from "@/modules/rbac/presentation/atoms/rbac-atoms"
import {
  createScreenAction,
  deleteScreenAction,
  fetchAllScreensAction,
  updateScreenAction,
} from "@/modules/screen-management/domain/screen-actions"
import { Screen } from "@/modules/screen-management/domain/types"
import { ScreenFormValues } from "@/modules/screen-management/presentation/components/form-config"

import { toast } from "@/components/ui/use-toast"
import { DataResponse } from "@/components/data-table/data-response"

export const useScreenActions = (): {
  fetchScreens: () => Promise<DataResponse<Screen> | null>
  createScreen: (values: ScreenFormValues) => void
  updateScreen: (values: ScreenFormValues, screenId: string) => void
  deleteScreen: (screenId: string) => void
} => {
  const screen = useAtomValue(currentScreenAtom)
  const router = useRouter()

  const fetchScreens = (): Promise<DataResponse<Screen> | null> => {
    if (!screen) return Promise.resolve(null)

    return fetchAllScreensAction(screen.id)
  }

  const createScreen = (values: ScreenFormValues): void => {
    if (!screen) return

    createScreenAction(screen.id, values)
      .then(() => {
        toast({ title: "Success", description: "Screen created successfully" })
        router.refresh()
      })
      .catch((err: Error) =>
        toast({
          title: "Could not create screen.",
          description: err.message,
          variant: "destructive",
        })
      )
  }

  const updateScreen = (values: ScreenFormValues, screenId: string): void => {
    if (!screen) return

    updateScreenAction(screen.id, screenId, values)
      .then(() => {
        toast({ title: "Success", description: "Screen updated successfully" })
        router.refresh()
      })
      .catch((err: Error) =>
        toast({
          title: "Could not update screen.",
          description: err.message,
          variant: "destructive",
        })
      )
  }

  const deleteScreen = (screenId: string): void => {
    if (!screen) return

    deleteScreenAction(screen.id, screenId)
      .then(() => {
        toast({ title: "Success", description: "Screen deleted successfully" })
        router.refresh()
      })
      .catch((err: Error) =>
        toast({
          title: "Could not delete screen.",
          description: err.message,
          variant: "destructive",
        })
      )
  }

  return { fetchScreens, createScreen, updateScreen, deleteScreen }
}
