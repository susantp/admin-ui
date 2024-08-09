import { getApiClient } from "@/core/utils/api-client"
import { getAuthenticatedApiClient } from "@/core/utils/authentic-client"
import { createUrl } from "@/core/utils/helpers"
import { profileEndpoints } from "@/modules/user-profile/data/profile-endpoints"
import {
  LoggedInUserResponse,
  PasswordUpdateRequest,
  UserDetailRequest,
  UserDetailResponse,
} from "@/modules/user-profile/data/types"
import { UserProfile } from "@/modules/user-profile/domain/types"

export const fetchUserProfileService = async (): Promise<UserProfile> => {
  const loggedInUserResponse = await getApiClient(
    createUrl(profileEndpoints.getLoggedInUser)
  ).get()
  const userDetailsResponse = await getApiClient(
    createUrl(profileEndpoints.userDetail)
  ).get()

  const loggedInUser = loggedInUserResponse.data as LoggedInUserResponse
  const userDetails = userDetailsResponse.data as UserDetailResponse

  return {
    id: loggedInUser.id,
    username: loggedInUser.username,
    isAdmin: loggedInUser.is_superuser,
    firstName: userDetails.first_name,
    lastName: userDetails.last_name,
    email: loggedInUser.email,
    phone: loggedInUser.phone,
    address: userDetails.address1,
    designation: userDetails.designation,
  }
}

export const updateUserDetailService = async (
  details: UserDetailRequest,
  action?: "CREATE" | "UPDATE"
): Promise<Partial<UserProfile>> => {
  const apiClient = await getAuthenticatedApiClient()
  const url = createUrl(profileEndpoints.userDetail)

  let response

  if (action === "CREATE") {
    response = await apiClient.post(url, details)
  } else {
    response = await apiClient.put(url, details)
  }

  const userDetails = response.data as UserDetailResponse
  return {
    firstName: userDetails.first_name,
    lastName: userDetails.last_name,
    address: userDetails.address1,
    designation: userDetails.designation,
  }
}

export const updateEmailService = async (email: string): Promise<void> => {
  const apiClient = await getAuthenticatedApiClient()

  await apiClient.put(createUrl(profileEndpoints.putChangeEmail), { email })
}

export const updatePhoneService = async (phone: string): Promise<void> => {
  const apiClient = await getAuthenticatedApiClient()

  await apiClient.put(createUrl(profileEndpoints.putChangePhone), { phone })
}

export const updatePasswordService = async (
  data: PasswordUpdateRequest
): Promise<void> => {
  const apiClient = await getAuthenticatedApiClient()

  await apiClient.put(createUrl(profileEndpoints.putChangePassword), data)
}
