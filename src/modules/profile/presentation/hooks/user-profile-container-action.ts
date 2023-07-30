import {useEffect, useState} from "react"
import {IUserProfileContainerAction} from "@/src/modules/profile/domain/types/presentation/hook"
import {signOut, useSession} from "next-auth/react";
import {toast} from "react-toastify";
import {IPasswordUpdateBody, IUserDetailResponse} from "@/src/modules/profile/domain/types/endpoints";
import {userInformationFormFields} from "@/src/modules/profile/domain/objects/page/profile";
import {IUserInformationBoxProps} from "@/src/modules/profile/domain/types/presentation/component";
import {
    getUserDetailsAction,
    postUserDetailsAction,
    updateEmailAction,
    updatePasswordAction,
    updatePhoneAction
} from "@/src/modules/profile/domain/actions";
import {SubmitHandler, useForm} from "react-hook-form"
import useProfileContainerRefCollection
    from "@/src/modules/profile/presentation/hooks/use-profile-container-ref-collection";
import getHelpers from "@/src/modules/global/domain/utils/helpers";

const useUserProfileContainerAction = (): IUserProfileContainerAction => {
    const {data} = useSession()
    const [loading, setLoading] = useState(false)
    const [passwordEditMode, setPasswordEditMode] = useState(false)
    const [userDetail, setUserDetail] = useState<IUserDetailResponse | undefined>(undefined)
    const {
        emailRef,
        oldPasswordRef,
        newPasswordRef,
        confirmPasswordRef,
        phoneRef
    } = useProfileContainerRefCollection()
    const {
        register: userDetailRegister,
        handleSubmit: handleUserDetailSubmit,
        formState: {errors: userDetailFormError}
    } = useForm<IUserDetailResponse>()
    const toasts = {
        emailUpdate: {
            options: {toastId: "EU-T"}
        },
        phoneUpdate: {
            options: {toastId: "PHU-T"}
        },
        passwordUpdate: {
            option: {toastId: "PU-T"}
        },
        userDetail: {
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
        if (!newPasswordValue || !confirmPasswordValue) toast.warning("Unintentional operation !!!", toasts.passwordUpdate.option)
        if (newPasswordValue !== confirmPasswordValue) toast.warning("Passwords didn't matched !!!", toasts.passwordUpdate.option)
        if (!passwordRegex.test(<string>newPasswordValue) && !passwordRegex.test(<string>oldPasswordValue)) toast.warning("Criteria didn't matched !!!", toasts.passwordUpdate.option)
    }

    const handleEmailUpdate = (): void => {
        const emailValue: string | undefined = emailRef.current?.value
        if (!emailValue) return
        const body: BodyInit = JSON.stringify({email: emailValue})
        updateEmailAction({
            body
        }).then(() => {
            toast.success("Email updated, Logging Out in 5 seconds !!!", toasts.passwordUpdate.option)
            setTimeout(() => {
                const appUrl = getHelpers.getAppUrl()
                signOut({callbackUrl: `${appUrl}/login`}).then(() => null).catch(() => null)
            }, 5000)
        }).catch(() => null)
    }

    const handlePhoneUpdate = (): void => {
        setLoading(true)
        const phoneValue: string | undefined = phoneRef.current?.value
        if (!phoneValue) return
        const body: BodyInit = JSON.stringify({phone: phoneValue})
        updatePhoneAction({
            body
        }).then(() => {
            toast.success("Phone updated, change will reflect next login.", toasts.userDetail.option)
            setLoading(false)
        }).catch(() => setLoading(false)).finally(() => setLoading(false))
    }

    const handlePasswordUpdate = (): void => {
        const newPasswordValue = newPasswordRef.current?.value
        const oldPasswordValue = oldPasswordRef.current?.value
        if (newPasswordValue && oldPasswordValue) {
            setLoading(true)
            validatePasswordUpdate()
            const bodyObject: IPasswordUpdateBody = {
                old_password: oldPasswordRef.current.value,
                new_password: newPasswordRef.current.value
            }
            updatePasswordAction({body: JSON.stringify(bodyObject)})
                .then(() => {
                    setPasswordEditMode(false)
                    toast.success("Password updated, Logging Out in 5 seconds !!!", toasts.passwordUpdate.option)
                    setTimeout(() => {
                        const appUrl = getHelpers.getAppUrl()
                        signOut({callbackUrl: `${appUrl}/login`}).then(() => null).catch(() => null)
                    }, 5000)

                })
                .catch((reason) => {
                    console.log(reason)
                })
                .finally(() => setLoading(false))
        }
    }

    const handlePasswordUpdateMode = (): void => {
        setPasswordEditMode(!passwordEditMode)
    }

    const onUserDetailUpdate: SubmitHandler<IUserDetailResponse> = (formData) => {
        const body: BodyInit = JSON.stringify(formData)
        postUserDetailsAction({body}).then(userDetailData => {
            if (userDetailData) {
                toast.success("User updated successfully.", toasts.userDetail.option)
            }
        }).catch(() => null)
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
        userDetailRegister,
        handleUserDetailSubmit,
        userDetailFormError,
        data,
        emailRef,
        newPasswordRef,
        phoneRef,
        oldPasswordRef,
        confirmPasswordRef,
        loading,
        passwordEditMode,
        onUserDetailUpdate,
        handleEmailUpdate,
        handlePhoneUpdate,
        handlePasswordUpdate,
        handlePasswordUpdateMode,
        userInformationBoxProps,
        userDetail
    }
}
export default useUserProfileContainerAction
