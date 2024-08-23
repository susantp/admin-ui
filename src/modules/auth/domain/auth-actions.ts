"use server"

import { loginService } from "@/modules/auth/data/auth-service"
import { RegisterRequest } from "@/modules/auth/domain/types"

export const actionRegister = (details: RegisterRequest) =>
  Promise.resolve("hey")

export const actionLogin = async (loginRequest: BodyInit): Promise<string> => {
  return loginService(loginRequest)
}
