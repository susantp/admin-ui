import AuthApiResponse from "@/auth/domain/entities/auth-api-response"

export default interface AuthRepository {
  login(username: string, password: string): Promise<AuthApiResponse>
  register(
    username: string,
    password: string,
    email: string,
    phone: string
  ): Promise<AuthApiResponse>
}
