import {RefObject} from "react"
import {Session} from "next-auth"
import {IUserInformationBoxProps} from "@/src/modules/profile/domain/types/presentation/component";
import {IUserDetailResponse} from "@/src/modules/profile/domain/types/endpoints";
import {UseFormHandleSubmit, UseFormRegister} from "react-hook-form/dist/types/form";
import {FieldErrors, SubmitHandler} from "react-hook-form";

export interface IUserProfileContainerAction {
  userDetailRegister: UseFormRegister<TFieldValues>,
  handleUserDetailSubmit: UseFormHandleSubmit<TFieldValues, TTransformedValues>,
  onUserDetailUpdate: SubmitHandler<IUserDetailResponse>
  userDetailFormError: FieldErrors<IUserDetailResponse>
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
  userInformationBoxProps: IUserInformationBoxProps
  userDetail: IUserDetailResponse | undefined
}

export interface IUseProfileContainerRefCollection {
  emailRef: RefObject<HTMLInputElement>
  oldPasswordRef: RefObject<HTMLInputElement>
  confirmPasswordRef: RefObject<HTMLInputElement>
  newPasswordRef: RefObject<HTMLInputElement>
  phoneRef: RefObject<HTMLInputElement>
}
