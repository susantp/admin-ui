import {ReactElement, RefObject} from "react"

export interface IInputWithLabelIconAction {
  defaultValue: string | undefined
  placeholderIcon: ReactElement | null
  label: string
  placeholder: string
  type: string
  id: string
  disabled: boolean
  inputRef: RefObject<HTMLInputElement> | null
  action: (() => void) | undefined
}
