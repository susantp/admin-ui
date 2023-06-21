import AuthApiResponse from "@/auth/domain/entities/auth-api-response"
import UserEntity from "@/auth/domain/entities/user-entity";

export default interface AuthRepository {
  login(username: string, password: string): Promise<AuthApiResponse | null>

  register(
    username: string,
    password: string,
    email: string,
    phone: string
  ): Promise<AuthApiResponse>
}
