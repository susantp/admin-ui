import { AuthConfig } from "@/modules/auth/domain/types/auth-config"

export const authConfig: AuthConfig = {
  credentialId: "credentials",
  pageTitle: "SOA POC",
  logo: {
    path: "/images/lis.png",
    altText: "Next.js Logo",
    width: 196,
    height: 32,
  },
  passwordRecovery: {
    label: "Forgot your password?",
    path: "/register",
  },
  loginForm: {
    helperLinkLabel: "Don't have an account? Register",
    path: "/login",
    formTitle: "Welcome back",
    formSubtitle: "Enter your credentials to sign in to your account",
    emailField: {
      label: "Username",
      type: "text",
      id: "username",
      placeHolder: "Username",
    },
    passwordField: {
      id: "password",
      type: "password",
      label: "Password",
      placeHolder: "Password",
    },
    actionBtn: {
      label: "Login",
    },
  },
  registerForm: {
    helperLinkLabel: "Already have an account? Log In",
    path: "/register",
    actionBtn: {
      label: "Register",
    },
    formTitle: "Create a account",
    formSubtitle: "Enter your details below to create your account",
    terms: {
      label: "Terms of Service",
      path: "/privacy",
    },
    privacy: {
      label: "Privacy Policy",
      path: "/privacy",
    },
    privacyTermsText: "By clicking continue, you agree to our",
  },
}
