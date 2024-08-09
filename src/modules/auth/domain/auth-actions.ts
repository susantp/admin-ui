"use server"

import { ApiResponse, ErrorResponse } from "@/core/types"
import { loginService } from "@/modules/auth/data/auth-service"
import {
  LoginRequest,
  RegisterRequest,
  RegisterResponse,
  TokenResponse,
} from "@/modules/auth/domain/types"
import { LoginFormValues } from "@/modules/auth/presentation/components/form-config"

export const actionRegister = (details: RegisterRequest) =>
  Promise.resolve("hey")

export const actionLogin = async (
  loginRequest: BodyInit
): Promise<ErrorResponse | TokenResponse> => {
  return loginService(loginRequest)
}
