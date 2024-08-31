import {
  IForm,
  ILoginAction,
  ILoginFormFields,
  ILoginFormMeta,
  ILoginProviders,
} from "@/modules/auth/presentation/models/default/index"

const formFields: ILoginFormFields = {
  email: {
    label: "email",
    type: "text",
    id: "email",
    placeHolder: "Email",
  },
  password: {
    id: "password",
    type: "password",
    label: "Password",
    placeHolder: "Password",
  },
}
const loginAction: ILoginAction = {
  path: "/auth",
  button: {
    label: "Login",
  },
}
const loginProviders: ILoginProviders = {
  github: {
    label: "Github",
  },
}

const loginFormMeta: ILoginFormMeta = {
  helperLinkLabel: "Register",
  loginProviders,
}

const defaultUserLoginForm: IForm = {
  fields: formFields,
  action: loginAction,
  meta: loginFormMeta,
}

export default defaultUserLoginForm
