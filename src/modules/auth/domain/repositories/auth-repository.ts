import { AuthResponse } from "../types"

export default interface AuthRepository {
  login(username: string, password: string): Promise<AuthResponse>
  register(
    username: string,
    password: string,
    email: string,
    phone: string
  ): Promise<AuthResponse>
}
