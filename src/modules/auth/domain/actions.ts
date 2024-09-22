"use server"

import { ApiResponse, IData, IMetaData, IRedirectPayload } from "@/core/data"
import { getApiClient } from "@/core/data/api-client"
import ErrorCodes from "@/core/data/errorCodes"
import { responseTamperedError } from "@/core/presentation/models/errors"
import { createUrl } from "@/core/utils/helpers"
import { signIn, signOut } from "@/modules/auth/config/auth"
import { endpoints } from "@/modules/auth/config/endpoints"
import { LoginFormValues } from "@/modules/auth/config/form-definitions"

const { socialLoginProvider } = endpoints

export const actionLogin = async (values: LoginFormValues): Promise<void> => {
  await signIn("credentials", {
    redirect: false,
    email: values.email,
    password: values.password,
  }).catch((error) => {
    throw Error(ErrorCodes.ERROR_AUTH)
  })
}

export const actionLogout = async (body: BodyInit): Promise<void> => {
  await signOut({
    redirectTo: "/login",
  })
}

export const actionGetLoginProviderLink = async (): Promise<
  ApiResponse<IData<IRedirectPayload>, IMetaData>
> => {
  const response = await getApiClient(
    createUrl(socialLoginProvider.github.redirectUrl)
  ).get<ApiResponse<IData<IRedirectPayload>, IMetaData>>()

  if (response.metaData.error.length > 0) {
    return response
  }

  if (!("redirectUrl" in response.data.payload)) {
    response.metaData = {
      ...response.metaData,
      ...responseTamperedError,
    }
    return response
  }

  return response
}
