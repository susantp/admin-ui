import { IInputField } from "@/core/presentation/models"

export interface IUserPayload {
  user: IUser
}

export interface IUser {
  id: string
  name: string
  email: string
  authType: string
}

export interface IPasswordResetFormFields {
  currentPassword: IInputField
  newPassword: IInputField
}
