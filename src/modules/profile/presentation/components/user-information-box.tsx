import React, {ReactNode} from "react"
import {
  IUserInformationBoxProps
} from "@/src/modules/profile/domain/types/presentation/component"
import {Lock, Mail, Phone} from "lucide-react"

import InputWithLabelIconAction
  from "@/components/ui/input-with-label-icon-action"

export default function UserInformationBox({
                                             formFields,
                                             user,
                                             onEmailUpdate,
                                             onPhoneUpdate,
                                             emailRef,
                                             newPasswordRef,
                                             oldPasswordRef,
                                             phoneRef,
                                             confirmPasswordRef,
                                             passwordEditMode,
                                             onPasswordEditMode,
                                             onPasswordUpdate
                                           }: IUserInformationBoxProps): ReactNode {
  const {
    phone,
    password,
    email,
    username,
    newPassword,
    confirmPassword
  } = formFields
  return (
    <div className="flex flex-col gap-6" id="fields">
      <div className="flex flex-col gap-[4px]" id={`${username.id}-field`}>
        <InputWithLabelIconAction
          id={username.id}
          action={undefined}
          inputRef={null}
          defaultValue={user?.username ?? ""}
          disabled
          label={username.label}
          type={username.inputType}
          placeholder={username.placeholder}
          placeholderIcon={null}
        />
      </div>

      <div className="flex flex-col gap-[4px]" id={`${email.id}-field`}>
        <InputWithLabelIconAction
          id={email.id}
          inputRef={emailRef}
          action={onEmailUpdate}
          defaultValue={user?.email ?? ""}
          disabled={false}
          label={email.label}
          type={email.inputType}
          placeholder={email.placeholder}
          placeholderIcon={<Mail/>}
        />
      </div>

      <div className="flex flex-col gap-[4px]" id={`${phone.id}-field`}>
        <InputWithLabelIconAction
          id={phone.id}
          action={onPhoneUpdate}
          inputRef={phoneRef}
          defaultValue={user?.phone ?? ""}
          disabled={false}
          label={phone.label}
          type={phone.inputType}
          placeholder={phone.placeholder}
          placeholderIcon={<Phone/>}
        />
      </div>

      <div className="flex flex-col gap-[4px]" id={`${password.id}-field`}>
        <InputWithLabelIconAction
          id={password.id}
          inputRef={oldPasswordRef}
          action={!passwordEditMode ? onPasswordEditMode : undefined}
          defaultValue=""
          disabled
          label={passwordEditMode ? "Old Password" : password.label}
          type={password.inputType}
          placeholder={password.placeholder}
          placeholderIcon={<Lock/>}
        />
      </div>

      {passwordEditMode &&
        <>
          <div className="flex flex-col gap-[4px]" id={`${password.id}-field`}>
            <InputWithLabelIconAction
              id={newPassword.id}
              inputRef={newPasswordRef}
              action={undefined}
              defaultValue=""
              disabled={false}
              label={newPassword.label}
              type={newPassword.inputType}
              placeholder={newPassword.placeholder}
              placeholderIcon={<Lock/>}
            />
          </div>

          <div className="flex flex-col gap-[4px]" id={`${password.id}-field`}>
            <InputWithLabelIconAction
              id={confirmPassword.id}
              inputRef={confirmPasswordRef}
              action={onPasswordUpdate}
              defaultValue=""
              disabled={false}
              label={confirmPassword.label}
              type={confirmPassword.inputType}
              placeholder={confirmPassword.placeholder}
              placeholderIcon={<Lock/>}
            />
          </div>

          <div className="flex flex-col gap-[4px] text-gray-500">
            <p>Be at least 8 characters long.</p>
            <p>Contain at least one uppercase letter.</p>
            <p>Contain at least one lowercase letter.</p>
            <p>Contain at least one numeric digit.</p>
            <p>Contain at least one special character (e.g. @, #, $, %, ^, &,
              *).</p>
          </div>
        </>
      }


    </div>
  )
}
