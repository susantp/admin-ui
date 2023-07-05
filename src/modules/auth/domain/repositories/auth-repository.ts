import {
  UserLoginRequest,
  UserLoginResponse,
  UserRegisterRequest,
  UserRegisterResponse,
} from "../types/auth-endpoints"

export default interface AuthRepository {
  login(credentials: UserLoginRequest): Promise<UserLoginResponse>
  register(details: UserRegisterRequest): Promise<UserRegisterResponse>
}
