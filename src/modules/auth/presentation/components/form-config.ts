import { z } from "zod"

export const loginFormSchema = z.object({
  username: z
    .string()
    .nonempty("Username can not be empty")
    .min(3, "Username must be at least 3 characters"),
  password: z.string().nonempty("Password can not be empty."),
})

export type LoginFormValues = z.infer<typeof loginFormSchema>
