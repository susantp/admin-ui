import { IForm } from "@/modules/auth/presentation/models/index"

const registerForm: IForm = {
  fields: {
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
  },
  action: {
    path: "/login",
    button: {
      label: "Login",
    },
  },
  meta: {
    title: "Welcome back",
    subtitle: "Enter your credentials to sign in to your account",
    helperLinkLabel: "Register",
  },
}

export default registerForm
