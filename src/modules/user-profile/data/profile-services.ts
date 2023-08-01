import { profileEndpoints } from "@/profile/data/profile-endpoints"
import { getAuthenticatedApiClient } from "@/src/common/utils/authentic-client"
import { createUrl } from "@/src/common/utils/helpers"

export const fetchUserProfileService = async (): Promise<UserProfile> => {
  const apiClient = await getAuthenticatedApiClient()

  const loggedInUserResponse = await apiClient.get(
    createUrl(profileEndpoints.getLoggedInUser)
  )
  const userDetailsResponse = await apiClient.get(
    createUrl(profileEndpoints.getUserDetail)
  )

  const loggedInUser = loggedInUserResponse.data as LoggedInUserResponse
  const userDetails = userDetailsResponse.data as UserDetailResponse

  return {
    id: loggedInUser.id,
    username: loggedInUser.username,
    firstName: userDetails.first_name,
    lastName: userDetails.last_name,
    email: loggedInUser.email,
    phone: loggedInUser.phone,
    address: userDetails.address1,
    designation: userDetails.designation,
  }
}

export const updateUserDetailService = async (
  details: UserDetailRequest
): Promise<Partial<UserProfile>> => {
  const apiClient = await getAuthenticatedApiClient()

  const response = await apiClient.put(
    createUrl(profileEndpoints.putUserDetail),
    details
  )

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
