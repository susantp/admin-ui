import { ScreenFormValues } from "@/modules/screen-management/presentation/components/form-config"

export const useScreenActions = (): {
  submitScreen: (values: ScreenFormValues) => void
} => {
  const submitScreen = (values: ScreenFormValues): void => {
    console.log("Screen Values", values)
  }

  return { submitScreen }
}
