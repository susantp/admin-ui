import { z } from "zod"

export const resetPasswordFormSchema = z.object({
  currentPassword: z.string().min(8, "Must be 8 character long.").trim(),
  newPassword: z
    .string()
    .min(8, "Must be 8 character long.")
    .max(15, "Only 15 character allowed.")
    .trim(),
})

export type ResetPasswordFormValues = z.infer<typeof resetPasswordFormSchema>
