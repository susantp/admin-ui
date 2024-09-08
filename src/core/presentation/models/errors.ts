import { IAppError } from "@/core/presentation/models/index"

export const responseTamperedError: IAppError = {
  error: "Response Tampered",
  errorCode: 409,
}

export const responseUnauthorized: IAppError = {
  error: "Unauthorized",
  errorCode: 401,
}
