export interface IForm {
  fields: ILoginFormFields|IRegisterFormFields
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

export interface IInputField {
  label: string
  id: string
  type: string
  placeHolder: string
}

interface ILoginFormMeta {
  title: string
  subtitle: string
  helperLinkLabel: string
}

interface ILoginAction {
  path: string
  button: {
    label: string
  }
}
