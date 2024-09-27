import { object, string } from "zod";

export const signUpSchema = object({
    name: string().min(1, "Name is required"),
    email: string().email("Invalid email").min(1, "Email is required"),
    password: string()
        .min(8, "Password is required 8 charracters")
        .max(32, "Password must be less than 32 charracters"),
    ConfirmPassword: string()
        .min(8, "Password is required 8 charracters")
        .max(32, "Password must be less than 32 charracters")
    }).refine((data) => data.password === data.ConfirmPassword, {
            message: "Passwords are not the same",
            path: ["ConfirmPassword"],
    });

export const signInSchema = object({
    email: string().email("Invalid email").min(1, "Email is required"),
    password: string()
        .min(8, "Password is required 8 charracters")
        .max(32, "Password must be less than 32 charracters")
    });