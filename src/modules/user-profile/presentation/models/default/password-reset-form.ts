import { IPasswordResetFormFields } from "@/modules/user-profile/presentation/models/default/index"

export const passwordResetFormFields: IPasswordResetFormFields = {
  currentPassword: {
    label: "Current Password",
    type: "text",
    id: "currentPassword",
    placeHolder: "enter your current account password",
  },
  newPassword: {
    label: "New Password",
    type: "text",
    id: "newPassword",
    placeHolder: "enter your new password",
  },
}
