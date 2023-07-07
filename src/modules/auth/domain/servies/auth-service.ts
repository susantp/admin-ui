import AuthDataSource from "@/auth/data/datasource/auth-data-source"
import {
  UserLoginResponse,
  UserRegisterResponse,
} from "@/auth/domain/types/auth-endpoints"

export default class AuthService {
  authRepository = new AuthDataSource()

  async loginUser(
    username: string,
    password: string
  ): Promise<UserLoginResponse> {
    // Perform any necessary business logic or validation here
    // Example: Hash the password, validate credentials, etc.

    try {
      return await this.authRepository.login({ username, password })
      // Additional business logic or transformations if needed
    } catch (error) {
      throw new Error("Error occurred during login")
    }
  }

  async registerUser(
    username: string,
    password: string,
    email: string,
    phone: string
  ): Promise<UserRegisterResponse> {
    // Perform any necessary business logic or validation here
    // Example: Validate username, email, phone, etc.

    try {
      return await this.authRepository.register({
        username,
        password,
        email,
        phone,
      })
      // Additional business logic or transformations if needed
    } catch (error) {
      throw new Error("Error occurred during registration")
    }
  }
}
