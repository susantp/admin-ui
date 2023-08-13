import { z } from "zod"

export const screenFormSchema = z.object({
  name: z
    .string({ required_error: "Screen name is required" })
    .min(4, "Screen name must be at least 4 characters.")
    .max(20, "Screen name can't be longer than 20 characters."),
  slug: z
    .string({ required_error: "Slug is required" })
    .min(4, "Slug must be at least 4 characters.")
    .max(20, "Slug can't be longer than 20 characters."),
})

export type ScreenFormValues = z.infer<typeof screenFormSchema>
