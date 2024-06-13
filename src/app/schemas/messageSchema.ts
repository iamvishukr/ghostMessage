import { z } from "zod"

export const messageSchema = z.object({
    content: z
    .string()
    .min(3, {message: "Message must be of at least 3 characters" })
    .max(300, {message: "Message must be of at most 300 characters" })
})