import {RefObject, useEffect, useRef, useState} from "react"
import {
  IUserProfileContainerAction
} from "@/src/modules/profile/domain/types/presentation/hook"
import {useSession} from "next-auth/react";
import {toast} from "react-toastify";
import {
  IPasswordUpdateBody,
  IUserDetailResponseCamelCase
} from "@/src/modules/profile/domain/types/endpoints";
import {
  userInformationFormFields
} from "@/src/modules/profile/domain/objects/page/profile";
import {
  IUserInformationBoxProps
} from "@/src/modules/profile/domain/types/presentation/component";
import {
  getUserDetailsAction,
  updateEmailAction,
  updatePasswordAction,
  updatePhoneAction
} from "../../domain/actions";


const useUserProfileContainerAction = (): IUserProfileContainerAction => {
  const {data, update} = useSession()
  const [loading, setLoading] = useState(false)
  const [passwordEditMode, setPasswordEditMode] = useState(false)
  const [userDetail, setUserDetail] = useState<IUserDetailResponseCamelCase | null>(null)
  const emailRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const oldPasswordRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const newPasswordRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const confirmPasswordRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const phoneRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const toasts = {
    passwordUpdateWarning: {
      option: {toastId: "PU-T"}
    },
    getUserDetail: {
      option: {toastId: "GUID-T"}
    }
  }

  useEffect(() => {
    getUserDetailsAction().then((userDetailResponse) => {
      if (userDetailResponse) {
        setUserDetail(userDetailResponse)
      }
    }).catch(() => null)
  }, []);

  const validatePasswordUpdate = (): void => {
    const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const oldPasswordValue: string | undefined = oldPasswordRef.current?.value
    const newPasswordValue: string | undefined = newPasswordRef.current?.value
    const confirmPasswordValue: string | undefined = confirmPasswordRef.current?.value
    if (!newPasswordValue || !confirmPasswordValue) toast.warning("Unintentional operation !!!", toasts.passwordUpdateWarning.option)
    if (newPasswordValue !== confirmPasswordValue) toast.warning("Passwords didn't matched !!!", toasts.passwordUpdateWarning.option)
    if (!passwordRegex.test(<string>newPasswordValue) && !passwordRegex.test(<string>oldPasswordValue)) toast.warning("Criteria didn't matched !!!", toasts.passwordUpdateWarning.option)
  }

  const handleEmailUpdate = (): void => {
    const emailValue: string | undefined = emailRef.current?.value
    if (!emailValue) return
    const body: BodyInit = JSON.stringify({email: emailValue})
    updateEmailAction({
      body
    }).then(() => {
      update({email: emailValue}).then((response) => console.log('session', response)).catch(() => null)
    }).catch(() => null)
  }

  const handlePhoneUpdate = (): void => {
    setLoading(true)
    const phoneValue: string | undefined = phoneRef.current?.value
    if (!phoneValue) return
    const body: BodyInit = JSON.stringify({phone: phoneValue})
    updatePhoneAction({
      body
    }).then(res => {
      if (res) {
        // const cloneUser: User = {...user}
        // cloneUser.email = data.email
        // setUser(cloneUser)
        console.log(res)
      }
      setLoading(false)
    }).catch(() => setLoading(false)).finally(() => setLoading(false))
  }

  const handlePasswordUpdate = (): void => {
    const newPasswordValue = newPasswordRef.current?.value
    if (data && newPasswordValue) {
      setLoading(true)
      validatePasswordUpdate()
      const bodyObject: IPasswordUpdateBody = {
        email: data.user.email,
        otp: "sample",
        new_password: newPasswordRef.current?.value
      }
      updatePasswordAction({body: JSON.stringify(bodyObject)})
        .then(() => {
          // const appUrl = getHelpers.getAppUrl()
          // // signOut({callbackUrl: `${appUrl}/login`}).then(() => null).catch(() => null)
          // toast.success("Password updated, Logging Out !!!", {toastId: passwordUpdateToast})
        })
        .catch(() => setLoading(false))
        .finally(() => setLoading(false))

      setPasswordEditMode(false)
    }
  }

  const handlePasswordUpdateMode = (): void => {
    setPasswordEditMode(!passwordEditMode)
  }

  const userInformationBoxProps: IUserInformationBoxProps = {
    passwordEditMode,
    user: data?.user,
    phoneRef,
    emailRef,
    confirmPasswordRef,
    newPasswordRef,
    oldPasswordRef,
    onEmailUpdate: handleEmailUpdate,
    onPhoneUpdate: handlePhoneUpdate,
    onPasswordEditMode: handlePasswordUpdateMode,
    onPasswordUpdate: handlePasswordUpdate,
    formFields: userInformationFormFields,
  }

  return {
    data,
    emailRef,
    newPasswordRef,
    phoneRef,
    oldPasswordRef,
    confirmPasswordRef,
    loading,
    passwordEditMode,
    handleEmailUpdate,
    handlePhoneUpdate,
    handlePasswordUpdate,
    handlePasswordUpdateMode,
    userInformationBoxProps,
    userDetail
  }
}
export default useUserProfileContainerAction
