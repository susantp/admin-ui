import AuthRepositoryImpl from "@/auth/data/repositories/auth-repository-impl"
import AuthApiResponse from "@/auth/domain/entities/auth-api-response"
import AuthRepository from "@/auth/domain/repositories/auth-repository"
import authAtom, { AuthState } from "@/auth/presentation/state/auth-atom"
import { SetterOrUpdater, useRecoilState } from "recoil"

export default function useAuth(): {
  authState: AuthState
  login: (username: string, password: string) => Promise<void>
  register: (
    username: string,
    password: string,
    email: string,
    phone: string
  ) => Promise<void>
} {
  const [authState, setAuthState]: [
    authState: AuthState,
    setAuthState: SetterOrUpdater<AuthState>
  ] = useRecoilState(authAtom)
  const authRepository: AuthRepository = new AuthRepositoryImpl()

  async function login(username: string, password: string): Promise<void> {
    setAuthState((prevState: AuthState) => ({
      ...prevState,
      loading: true,
      error: null,
    }))

    try {
      const response: AuthApiResponse = await authRepository.login(
        username,
        password
      )
      setAuthState(() => ({
        error: null,
        loading: false,
        data: response,
      }))
    } catch (error) {
      setAuthState(() => ({
        data: null,
        loading: false,
        error: "Login failed. Please try again.",
      }))
    }
  }

  async function register(
    username: string,
    password: string,
    email: string,
    phone: string
  ): Promise<void> {
    setAuthState((prevState: AuthState) => ({
      ...prevState,
      loading: true,
      error: null,
    }))

    try {
      const response: AuthApiResponse = await authRepository.register(
        username,
        password,
        email,
        phone
      )
      setAuthState((prevState: AuthState) => ({
        ...prevState,
        loading: false,
        data: response,
      }))
    } catch (error) {
      setAuthState((prevState: AuthState) => ({
        ...prevState,
        loading: false,
        error: "Registration failed. Please try again.",
      }))
    }
  }

  return { login, register, authState }
}
