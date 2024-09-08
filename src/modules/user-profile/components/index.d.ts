import React from "react"

import { IUser } from "@/modules/user-profile/presentation/models/default"

export interface IUserInformationProps {
  user: IUser
  classes: string
}

export interface IResetPasswordProps {
  classes: string
}

export interface IFieldSectionProps {
  children: React.ReactNode[]
}
