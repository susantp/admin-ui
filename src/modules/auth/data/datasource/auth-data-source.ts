import { authEndpoints } from "@/auth/domain/config/auth-endpoints"
import AuthRepository from "@/auth/domain/repositories/auth-repository"
import { AuthResponse } from "@/auth/domain/types"
import ApiClient from "@/src/utils/api-client"

export default class AuthDataSource implements AuthRepository {
  apiClient = new ApiClient()

  login(username: string, password: string) {
    return this.apiClient.post<AuthResponse>(authEndpoints.userLogin, {
      username,
      password,
    })
  }

  register(username: string, password: string, email?: string, phone?: string) {
    return this.apiClient.post<AuthResponse>(authEndpoints.userRegister, {
      username,
      password,
      email,
      phone,
    })
  }
}
