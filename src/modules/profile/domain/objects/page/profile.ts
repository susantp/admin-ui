import {
  IProfileSectionLabels,
  IUserInformationFormFields,
  IUserInformationFormFieldsProps,
} from "@/src/modules/profile/domain/types/presentation"

export const sectionLabel: string = "Your Information"
export const sectionSubLabel: string = "get started with updating your details"
export const userInformationSectionLabels: IProfileSectionLabels = {
  title: "User Information",
  subtitle: "Basic Information about the user",
}
export const userDetailsSectionLabels: IProfileSectionLabels = {
  title: "User Details",
  subtitle: "Details information about the user",
}

export const screenAccessInformation: IProfileSectionLabels ={
  title: "Screen Access Information",
  subtitle:"Information about the screens accessed by the user"
}

const usernameFieldProps: IUserInformationFormFieldsProps = {
  id: "username",
  label: "Username",
  inputType: "text",
  placeholder: "abc123",
}
const emailFieldProps: IUserInformationFormFieldsProps = {
  id: "email",
  inputType: "email",
  label: "Email",
  placeholder: "abc@abc.com",
}

const passwordFieldProps: IUserInformationFormFieldsProps = {
  id: "password",
  inputType: "password",
  label: "Password",
  placeholder: "**********",
}
const newPasswordFieldProps: IUserInformationFormFieldsProps = {
  id: "newPassword",
  inputType: "password",
  label: "New Password",
  placeholder: "**********",
}
const confirmPasswordFieldProps: IUserInformationFormFieldsProps = {
  id: "confirm-password",
  inputType: "password",
  label: "Confirm Password",
  placeholder: "**********",
}

const phoneFieldProps: IUserInformationFormFieldsProps = {
  id: "phone",
  inputType: "number",
  label: "Phone Number",
  placeholder: "123456789",
}

export const userInformationFormFields: IUserInformationFormFields = {
  username: usernameFieldProps,
  email: emailFieldProps,
  password: passwordFieldProps,
  newPassword: newPasswordFieldProps,
  confirmPassword: confirmPasswordFieldProps,
  phone: phoneFieldProps,
}
