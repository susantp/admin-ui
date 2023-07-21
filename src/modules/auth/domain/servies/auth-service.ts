import {authEndpoints} from "@/auth/domain/config/auth-endpoints"
import {IDoLoginParams, ITokenParams} from "@/auth/domain/types/auth-config"
import {
  LoggedInUserResponse,
  UserDetailResponse,
  UserLoginResponse,
} from "@/auth/domain/types/auth-endpoints"
import {
  getRequest,
  postRequest,
} from "@/src/modules/global/domain/utils/api-client"
import {
  getClientForUserDetailAndLoggedInUser,
  publicClient,
} from "@/src/modules/global/domain/utils/authorize-method-client"
import getHelpers from "@/src/modules/global/domain/utils/helpers"

export const doLogin = async ({
  credentials,
}: IDoLoginParams): Promise<UserLoginResponse> => {
  const { userLogin } = authEndpoints
  const clientConfig: RequestInit = publicClient()
  const loginRequestPath: URL = getHelpers.composeRequestPath({
    requestPath: userLogin,
  })
  const bodyInit: BodyInit = JSON.stringify(credentials)
  return postRequest<UserLoginResponse>({
    requestPath: loginRequestPath,
    requestInit: clientConfig,
    body: bodyInit,
  })
}

export const getLoggedInUserDetails = async ({
  token,
}: ITokenParams): Promise<LoggedInUserResponse> => {
  const { loggedInUser } = authEndpoints
  const clientConfig: RequestInit = getClientForUserDetailAndLoggedInUser({
    token,
  })
  const loggedInUserRequestPath: URL = getHelpers.composeRequestPath({
    requestPath: loggedInUser,
  })
  return getRequest<LoggedInUserResponse>({
    requestPath: loggedInUserRequestPath,
    requestInit: clientConfig,
  })
}

export const getUserDetails = async ({
  token,
}: ITokenParams): Promise<UserDetailResponse> => {
  const { userDetail } = authEndpoints
  const clientConfig: RequestInit = getClientForUserDetailAndLoggedInUser({
    token,
  })
  const userDetailRequestPath: URL = getHelpers.composeRequestPath({
    requestPath: userDetail,
  })
  return getRequest<UserDetailResponse>({
    requestPath: userDetailRequestPath,
    requestInit: clientConfig,
  })
}
