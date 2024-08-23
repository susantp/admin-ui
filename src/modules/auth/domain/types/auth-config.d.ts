
export interface InterfacePasswordRecovery {
  label: string
  path: string
}


export interface InterfaceRegisterForm extends InterfaceAuthForm {
  terms: {
    label: string
    path: string
  }
  privacy: {
    label: string
    path: string
  }
  privacyTermsText: string
}
