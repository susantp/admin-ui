import {AuthDictionary} from "@/auth/domain/interface/auth-dictionary";

export const authDictionaryImpl: AuthDictionary = {
  pageTitle: "SOA POC",
  logo: {
    path: "/images/lis.png",
    altText: "Next.js Logo",
    width: 196,
    height: 32
  },
  credentialConfigOptions: {
    id: "cred_1",
    name: "Credentials",
    type: "credentials",
  },
  passwordRecovery: {
    label: "Forgot your password?",
    path: "/register"
  },
  loginForm: {
    helperLinkLabel: "Don't have an account? Register",
    path: "/login",
    formTitle: "Welcome back",
    formSubtitle: "Enter your credentials to sign in to your account",
    emailField: {
      label: "Email",
      type: "email",
      id: "email",
      placeHolder: "Email"
    },
    passwordField: {
      id: "password",
      type: "password",
      label: "Password",
      placeHolder: "Password"
    },
    actionBtn: {
      label: "Login"
    }
  },
  registerForm: {
    helperLinkLabel: "Already have an account? Log In",
    path: "/register",
    actionBtn: {
      label: "Register"
    },
    formTitle: "Create a account",
    formSubtitle: "Enter your details below to create your account",
    terms: {
      label: "Terms of Service",
      path: "/privacy"
    },
    privacy: {
      label: "Privacy Policy",
      path: "/privacy"
    },
    privacyTermsText: "By clicking continue, you agree to our"
  }
}
