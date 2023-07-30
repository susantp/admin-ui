import {ForwardedRef, ReactElement} from "react"

export interface IInputWithLabelIconAction {
    defaultValue: string | undefined
    placeholderIcon: ReactElement | null
    label: string
    inputRef: ForwardedRef<HTMLInputElement> | undefined
    placeholder: string | undefined
    type: string
    id: string
    disabled: boolean
    onKeyUpAction: (() => void) | undefined
    action: (() => void) | undefined
}
