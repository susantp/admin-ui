"use server"

import profileDataSource from "@/src/modules/profile/data/datasources"
import {
  IUpdateEmailResponse, IUpdatePasswordResponse, IUpdatePhoneResponse
} from "@/src/modules/profile/domain/types/endpoints/response"
import {
  IUpdateEmailProps, IUpdatePasswordProps, IUpdatePhoneProps
} from "@/src/modules/profile/domain/types/server-actions/props"

export const updateEmailAction = async ({
                                          body
                                        }: IUpdateEmailProps): Promise<IUpdateEmailResponse | null> =>
  profileDataSource.updateEmailData({body})

export const updatePhoneAction = async ({body}:IUpdatePhoneProps): Promise<IUpdatePhoneResponse | null> => profileDataSource.updatePhoneData({body})

export const updatePasswordAction = async({body}: IUpdatePasswordProps ): Promise<IUpdatePasswordResponse|null> => profileDataSource.updatePasswordData({body})
