import AuthApiResponse from "@/auth/domain/entities/auth-api-response"
import { RecoilState, atom } from "recoil"

export interface AuthState {
  loading: boolean
  error: string | null
  data: AuthApiResponse | null
}

const localStorageEffect =
  (key: string) =>
  ({
    setSelf,
    onSet,
  }: {
    setSelf: (value: AuthState) => void
    onSet: (
      f: (newValue: AuthState, _: unknown, isReset: boolean) => void
    ) => void
  }) => {
    // if (typeof window === "undefined") {
    //   return
    // }

    const savedValue = localStorage.getItem(key)
    if (savedValue) {
      setSelf(JSON.parse(savedValue) as AuthState)
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key)
      } else if (newValue.data) {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    })
  }

const authAtom: RecoilState<AuthState> = atom<AuthState>({
  key: "authState",
  default: {
    loading: false,
    error: null,
    data: null,
  },
  effects: [localStorageEffect("user")],
})

export default authAtom
