import AuthApiResponse from "@/auth/domain/entities/auth-api-response"
import AuthRepository from "@/auth/domain/repositories/auth-repository"

export default class RegisterUseCase {
  private authRepository: AuthRepository

  public constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  public async execute(
    username: string,
    password: string,
    email: string,
    phone: string
  ): Promise<AuthApiResponse> {
    // Perform any necessary business logic or validation here
    // Example: Validate username, email, phone, etc.

    try {
      return await this.authRepository.register(
        username,
        password,
        email,
        phone
      )
      // Additional business logic or transformations if needed
    } catch (error) {
      throw new Error("Error occurred during registration")
    }
  }
}
