import {ReactNode, RefObject} from "react"
import {IUserInformationFormFields} from "@/src/modules/profile/domain/types/presentation"
import {User} from "next-auth"

export interface IProfileSectionProps {
    labels: {
        title: string
        subtitle: string
    }
    children: ReactNode
    id: string
}

export interface IProfileSectionWrapper {
    children: ReactNode
}

export interface IUserInformationBoxProps {
    formFields: IUserInformationFormFields
    user: User | undefined
    onEmailUpdate: () => void
    onPhoneUpdate: () => void
    onPasswordEditMode: () => void
    onPasswordUpdate: () => void
    passwordEditMode: boolean
    emailRef: RefObject<HTMLInputElement>
    oldPasswordRef: RefObject<HTMLInputElement>
    newPasswordRef: RefObject<HTMLInputElement>
    confirmPasswordRef: RefObject<HTMLInputElement>
    phoneRef: RefObject<HTMLInputElement>
}
