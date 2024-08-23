import { IForm } from "@/modules/auth/presentation/models/index"

const loginForm: IForm = {
  fields: {
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
    }
  },
  action: {
    path: "/login",
    button: {
      label: "Login",
    }
  },
  meta:{
    title: "Welcome back",
    subtitle: "Enter your credentials to sign in to your account",
    helperLinkLabel: "Register",
  }
}

export default loginForm
