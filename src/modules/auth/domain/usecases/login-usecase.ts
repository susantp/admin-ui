import AuthApiResponse from "@/auth/domain/entities/auth-api-response"
import AuthRepository from "@/auth/domain/repositories/auth-repository"

export default class LoginUseCase {
  private authRepository: AuthRepository

  public constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  public async execute(
    username: string,
    password: string
  ): Promise<AuthApiResponse> {
    // Perform any necessary business logic or validation here
    // Example: Hash the password, validate credentials, etc.

    try {
      return await this.authRepository.login(username, password)
      // Additional business logic or transformations if needed
    } catch (error) {
      throw new Error("Error occurred during login")
    }
  }
}
