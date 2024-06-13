import { z } from "zod";

export const usernameValidation = z
        .string()
        .min(4, "username must be at least 4 characters")
        .max(12, "username must not exceed 12 characters")
        .regex(/^[a-zA-Z0-9_.]+$/, "username must not contain any special characters")


export const signUpValidation = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Please enter a valid email address"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters"})
})