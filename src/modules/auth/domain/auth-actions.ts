"use server"

import { loginService, registerService } from "@/modules/auth/data/auth-service"
import {
  LoginRequest,
  RegisterRequest,
  RegisterResponse,
} from "@/modules/auth/domain/types"
import { LoginFormValues } from "@/modules/auth/presentation/components/form-config"

export const actionRegister = (
  details: RegisterRequest
): Promise<RegisterResponse> => registerService(details)

export const actionLogin = async (loginRequest: BodyInit) => {
  return loginService(loginRequest)
}
