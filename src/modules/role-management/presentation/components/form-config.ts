import { z } from "zod"

export const formSchema = z.object({
  roleName: z
    .string()
    .nonempty("Role name is required")
    .min(2, "Role name must be at least 2 characters.")
    .max(50, "Role name can't be longer than 50 characters."),
  permissions: z.array(z.string()).min(0),
})

export type RoleFormValues = z.infer<typeof formSchema>
