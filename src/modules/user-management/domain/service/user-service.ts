import { authEndpoints } from "@/auth/domain/config/auth-endpoints"
import { authOptions } from "@/auth/domain/config/auth-options"
import {
  UserRegisterRequest,
  UserRegisterResponse,
} from "@/auth/domain/types/auth-endpoints"
import { AllUsersResponse } from "@/src/modules/user-management/data/api-endpoints"
import { userEndpoints } from "@/src/modules/user-management/data/endpoints"
import { User } from "@/src/modules/user-management/domain/types/user"
import UserService from "@/src/modules/user-management/domain/types/user-service"
import ApiClient from "@/src/utils/api-client"
import { getServerSession } from "next-auth"

export const userService: UserService = {
  async fetchAllUsers(): Promise<User[]> {
    const session = await getServerSession(authOptions)
    const accessToken = session?.user.access
    const headers = { "x-screen-id": "6d9478a4-572e-4d54-bd08-c40bbd0d2b80" }
    const apiClient = new ApiClient({ accessToken, headers })

    const response = await apiClient.get<AllUsersResponse>(
      userEndpoints.allUsers
    )

    return response.results
  },

  async createUser(): Promise<void> {
    const apiClient = new ApiClient()

    const response = await apiClient.post<
      UserRegisterRequest,
      UserRegisterResponse
    >(authEndpoints.userRegister, {
      username: "test.user",
      password: "test@1234",
      email: "test.user@gmail.com",
      phone: "",
    })

    console.log("CREATE USER RESPONSE", response)
  },
}
