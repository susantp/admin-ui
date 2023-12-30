import { authEndpoints } from "@/auth/domain/config/auth-endpoints"
import AuthRepository from "@/auth/domain/repositories/auth-repository"
import {
  UserLoginRequest,
  UserLoginResponse,
  UserRegisterRequest,
  UserRegisterResponse,
} from "@/auth/domain/types/auth-endpoints"
import ApiClient from "@/src/utils/api-client"

export default class AuthDataSource implements AuthRepository {
  apiClient = new ApiClient()

  login(credentials: UserLoginRequest): Promise<UserLoginResponse> {
    return this.apiClient.post<UserLoginRequest, UserLoginResponse>(
      authEndpoints.userLogin,
      credentials
    )
  }

  register(details: UserRegisterRequest): Promise<UserRegisterResponse> {
    return this.apiClient.post<UserRegisterRequest, UserRegisterResponse>(
      authEndpoints.userRegister,
      details
    )
  }
}
