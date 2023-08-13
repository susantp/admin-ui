import { useAtomValue } from "jotai"

import { currentScreenAtom } from "@/modules/rbac/presentation/atoms/rbac-atoms"
import { fetchAllScreensAction } from "@/modules/screen-management/domain/screen-actions"
import { Screen } from "@/modules/screen-management/domain/types"
import { ScreenFormValues } from "@/modules/screen-management/presentation/components/form-config"

import { DataResponse } from "@/components/data-table/data-response"

export const useScreenActions = (): {
  fetchScreens: () => Promise<DataResponse<Screen> | null>
  submitScreen: (values: ScreenFormValues) => void
} => {
  const screen = useAtomValue(currentScreenAtom)

  const fetchScreens = (): Promise<DataResponse<Screen> | null> => {
    if (!screen) return Promise.resolve(null)

    return fetchAllScreensAction(screen.id)
  }

  const submitScreen = (values: ScreenFormValues): void => {
    console.log("Screen Values", values)
  }

  return { fetchScreens, submitScreen }
}
