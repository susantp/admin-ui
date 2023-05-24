import AuthApiResponse from "@/auth/domain/entities/auth-api-response"
import { RecoilState, atom } from "recoil"

export interface AuthState {
  loading: boolean
  error: string | null
  data: AuthApiResponse | null
}

const authAtom: RecoilState<AuthState> = atom<AuthState>({
  key: "authState",
  default: {
    loading: false,
    error: null,
    data: null,
  },
})

export default authAtom
