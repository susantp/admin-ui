import {
  IForm,
  ILoginAction,
  ILoginFormMeta,
  IRegisterFormFields,
} from "@/modules/auth/presentation/models/default/index"

const registerFormFields: IRegisterFormFields = {
  email: {
    label: "Username",
    type: "text",
    id: "username",
    placeHolder: "Username",
  },
  password: {
    id: "password",
    type: "password",
    label: "Password",
    placeHolder: "Password",
  },
  password_confirmation: {
    label: "Confirm Password",
    id: "password_confirmation",
    type: "password",
    placeHolder: "Confirm password",
  },
  username: {
    label: "Username",
    id: "username",
    type: "text",
    placeHolder: "Username",
  },
  phone: {
    label: "Phone",
    id: "phone",
    type: "number",
    placeHolder: "Phone",
  },
}
const loginAction: ILoginAction = {
  path: "/auth",
  button: {
    label: "Login",
  },
}
const loginFormMeta: ILoginFormMeta = {
  loginProviders: {},
  helperLinkLabel: "Register",
}

const defaultUserRegisterForm: IForm = {
  fields: registerFormFields,
  action: loginAction,
  meta: loginFormMeta,
}

export default defaultUserRegisterForm
