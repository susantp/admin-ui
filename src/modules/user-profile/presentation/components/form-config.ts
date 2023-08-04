import { z } from "zod"

export const userDetailsSchema = z.object({
  firstName: z
    .string()
    .nonempty("First name is required")
    .min(2, "First name must be at least 2 characters.")
    .max(50, "First name can't be longer than 50 characters."),
  lastName: z
    .string()
    .nonempty("Last name is required")
    .min(2, "Last name must be at least 2 characters.")
    .max(50, "Last name can't be longer than 50 characters."),
  address: z
    .string()
    .nonempty("Address is required")
    .min(2, "Address must be at least 2 characters.")
    .max(50, "Address can't be longer than 50 characters."),
})

export type UserDetailsFormValues = z.infer<typeof userDetailsSchema>

export const userEmailSchema = z.object({
  email: z
    .string()
    .nonempty("Email cannot be empty")
    .email("Not a valid email address"),
})

export type UserEmailValue = z.infer<typeof userEmailSchema>

export const userPhoneSchema = z.object({
  phone: z
    .string()
    .nonempty("Phone cannot be empty")
    .regex(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      "Not a valid phone number"
    ),
})

export type UserPhoneValue = z.infer<typeof userPhoneSchema>

export const passwordSchema = z
  .object({
    oldPassword: z.string().nonempty("Old password cannot be empty").min(4),
    password: z.string().nonempty("Password cannot be empty").min(4),
    confirmPassword: z
      .string()
      .nonempty("Confirm Password cannot be empty")
      .min(4),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "The passwords did not match",
      })
    }
  })

export type PasswordFormValues = z.infer<typeof passwordSchema>
