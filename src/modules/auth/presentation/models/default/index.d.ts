import { IInputField } from "@/core/presentation/models"

export interface IForm {
  fields: ILoginFormFields | IRegisterFormFields
  action: ILoginAction
  meta: ILoginFormMeta
}

export interface ILoginFormFields {
  email: IInputField
  password: IInputField
}

export interface IRegisterFormFields {
  username: IInputField
  email: IInputField
  password: IInputField
  password_confirmation: IInputField
  phone: IInputField
}

interface ILoginFormMeta {
  loginProviders: object
  helperLinkLabel: string
}

interface ILoginProviders {
  github: {
    label: string
  }
}

interface ILoginProvider {
  label: string
}

interface ILayoutFormMeta {
  title: string
  subtitle: string
}

interface ILoginAction {
  path: string
  button: {
    label: string
  }
}

export interface ILogo {
  path: string
  altText: string
  width: number
  height: number
}

export interface ILayout {
  logo: ILogo
  meta: ILayoutFormMeta
}

export interface ILogoutParams {
  revokeAll: boolean
}
