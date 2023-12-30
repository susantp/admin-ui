export interface IProfileSectionLabels {
  title: string
  subtitle: string
}
export interface IUserInformationFormFieldsProps {
  id: string
  label: string
  inputType: string
  placeholder: string
}
export interface IUserInformationFormFields {
  username: IUserInformationFormFieldsProps
  email: IUserInformationFormFieldsProps
  phone: IUserInformationFormFieldsProps
  password: IUserInformationFormFieldsProps
  newPassword: IUserInformationFormFieldsProps
  confirmPassword: IUserInformationFormFieldsProps
}
