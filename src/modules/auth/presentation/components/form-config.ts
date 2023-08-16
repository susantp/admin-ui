import { z } from "zod"

export const loginFormSchema = z.object({
  username: z
    .string()
    .nonempty("Username can not be empty")
    .min(3, "Username must be at least 3 characters"),
  password: z.string().nonempty("Password can not be empty."),
})

export type LoginFormValues = z.infer<typeof loginFormSchema>

export const registerFormSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required" })
      .nonempty("Username can not be empty")
      .min(3, "Username must be at least 3 characters"),
    password: z
      .string({ required_error: "Password is required" })
      .nonempty("Password cannot be empty")
      .min(8)
      .refine((password) => {
        const upperCaseRegex = /[A-Z]/
        const lowerCaseRegex = /[a-z]/
        const digitRegex = /\d/
        const specialCharRegex = /[^A-Za-z0-9]/

        return (
          upperCaseRegex.test(password) &&
          lowerCaseRegex.test(password) &&
          digitRegex.test(password) &&
          specialCharRegex.test(password)
        )
      }, "Password must contain at least 1 uppercase character, 1 lower case character, 1 digit, and 1 special character"),

    confirmPassword: z
      .string({ required_error: "Confirm Password is required" })
      .nonempty("Confirm Password cannot be empty"),
    email: z
      .string({ required_error: "Email is required" })
      .nonempty("Email cannot be empty")
      .email("Not a valid email address"),
    phone: z
      .string({ required_error: "Phone is required" })
      .nonempty("Phone cannot be empty")
      .regex(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        "Not a valid phone number"
      ),
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

export type RegisterFormValues = z.infer<typeof registerFormSchema>
