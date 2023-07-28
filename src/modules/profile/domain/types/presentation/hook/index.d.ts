import {RefObject} from "react"
import {Session} from "next-auth"

export interface IUserProfileContainerAction {
  data: Session | null
  handleEmailUpdate: () => void
  handlePhoneUpdate: () => void
  handlePasswordUpdateMode: () => void
  handlePasswordUpdate: () => void
  emailRef: RefObject<HTMLInputElement>
  oldPasswordRef: RefObject<HTMLInputElement>
  newPasswordRef: RefObject<HTMLInputElement>
  confirmPasswordRef: RefObject<HTMLInputElement>
  phoneRef: RefObject<HTMLInputElement>
  loading: boolean
  passwordEditMode: boolean
}
