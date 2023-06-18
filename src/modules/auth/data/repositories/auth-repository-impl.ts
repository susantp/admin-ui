import AuthDataSource from "@/auth/data/datasource/auth-data-source"
import AuthApiResponse from "@/auth/domain/entities/auth-api-response"
import AuthRepository from "@/auth/domain/repositories/auth-repository"

export default class AuthRepositoryImpl implements AuthRepository {
  private authDataSource: AuthDataSource

  public constructor() {
    this.authDataSource = new AuthDataSource()
  }

  public async login(username: string, password: string) {
    return this.authDataSource.login(username, password)
  }

  public async register(
    username: string,
    password: string,
    email: string,
    phone: string
  ): Promise<AuthApiResponse> {
    try {
      return (await this.authDataSource.register(
        username,
        password,
        email,
        phone
      )) as AuthApiResponse
    } catch (error) {
      throw new Error("Error occurred during registration")
    }
  }
}
