"use server"

import { registerService } from "@/modules/auth/data/auth-service"
import { RegisterRequest, RegisterResponse } from "@/modules/auth/domain/types"

export const registerAction = (
  details: RegisterRequest
): Promise<RegisterResponse> => registerService(details)
