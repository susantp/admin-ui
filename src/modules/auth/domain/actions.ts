"use server"

import { isRedirectError } from "next/dist/client/components/redirect"
import { redirect } from "next/navigation"

import { AuthError } from "next-auth"

import { ApiResponse, IData, IMetaData, IRedirectPayload } from "@/core/data"
import { getApiClient } from "@/core/data/api-client"
import { responseTamperedError } from "@/core/presentation/models/errors"
import { redirectPaths } from "@/core/presentation/models/redirectPaths"
import { createUrl } from "@/core/utils/helpers"
import { signIn } from "@/modules/auth/config/auth"
import { endpoints } from "@/modules/auth/config/endpoints"
import { LoginFormValues } from "@/modules/auth/config/form-definitions"
import { actionDeleteAuthToken } from "@/modules/auth/domain/cookie-service"

const { socialLoginProvider, userLogout } = endpoints

export const actionAuthCheck = async () =>
  fetch("http://localhost:3000/api/auth/check")
    .then((res) => res.json())
    .then((data) => {
      console.log("from action", data)
      return data
    })
// return (await response.json()) as IUserPayload | IAppError | IRedirectPayload

export const actionLogin = async (values: LoginFormValues): Promise<void> => {
  await signIn("credentials", {
    redirect: false,
    email: values.email,
    password: values.password,
  }).catch((error) => {
    if (error instanceof AuthError) {
      throw new Error(error.cause?.err?.message)
    }
    if (isRedirectError(error)) {
      throw new Error(error.message)
    }

    throw new Error("Unexpected error")
  })
}

export const actionLogout = async (
  body: BodyInit
): Promise<ApiResponse<IData<[]>, IMetaData> | null> => {
  const response = await getApiClient(createUrl(userLogout)).post<
    ApiResponse<IData<[]>, IMetaData>
  >(body)
  if (response.metaData.error.length > 0) {
    await actionDeleteAuthToken()
    return redirect(redirectPaths.login)
  }
  return response
}

export const actionGetLoginProviderLink = async (): Promise<
  ApiResponse<IData<IRedirectPayload>, IMetaData>
> => {
  await actionAuthCheck()

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
