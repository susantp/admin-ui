"use server"

import { redirect } from "next/navigation"

import {
  ApiResponse,
  ICredentialsLoginPayload,
  IData,
  IMetaData,
  IRedirectPayload,
} from "@/core/data"
import { getApiClient } from "@/core/data/api-client"
import { responseTamperedError } from "@/core/presentation/models/errors"
import { redirectPaths } from "@/core/presentation/models/redirectPaths"
import { createUrl } from "@/core/utils/helpers"
import { endpoints } from "@/modules/auth/config/endpoints"
import {
  actionDeleteAuthToken,
  actionSetAuthToken,
} from "@/modules/auth/domain/cookie-service"

const { userLogin, socialLoginProvider, userLogout, getCsrfCookie } = endpoints

export const actionAuthCheck = async () =>
  fetch("http://localhost:3000/api/auth/check")
    .then((res) => res.json())
    .then((data) => {
      console.log("from action", data)
      return data
    })
// return (await response.json()) as IUserPayload | IAppError | IRedirectPayload

export const actionLogin = async (
  credentials: BodyInit
): Promise<ApiResponse<IData<ICredentialsLoginPayload>, IMetaData>> => {
  await getApiClient(createUrl(getCsrfCookie)).get()
  const response = await getApiClient(createUrl(userLogin)).post<
    ApiResponse<IData<ICredentialsLoginPayload>, IMetaData>
  >(credentials)

  if (response.metaData.error.length > 0) {
    return response
  }

  if (!("token" in response.data.payload)) {
    response.metaData = {
      ...response.metaData,
      ...responseTamperedError,
    }
    return response
  }

  await actionDeleteAuthToken()
  await actionSetAuthToken(response.data.payload.token)
  return response
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
