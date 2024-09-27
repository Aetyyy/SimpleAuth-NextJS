"use server";
import { signUpSchema, signInSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { signIn } from "../auth";
import { AuthError } from "next-auth";

export const signUpCredentials = async(previous: unknown, formData: FormData) => {
    
    const validatedFields = signUpSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedFields.success ) {
        return {
            error: validatedFields.error.flatten().fieldErrors
        }
    }

    const { name, email, password } = validatedFields.data;
    const hashPassword = hashSync(password, 12);

    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword
            }
        });
    } catch (error) {
        return { message: "Failed to register user" }
    }
    redirect("/login");
};

// Sign in Credentials action
export const signInCredentials = async(previous: unknown, formData: FormData) => {
    const validatedFields = signInSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedFields.success ) {
        return {
            error: validatedFields.error.flatten().fieldErrors
        }
    }

    const { email, password } = validatedFields.data;

    try {
        await signIn("credentials", {email, password, redirectTo: "/dashboard"});
    } catch (error) {
        if(error instanceof AuthError) {
            switch(error.type) {
                case "CredentialsSignin":
                    return { message: "Invalid email or password" }
                default:
                    return { message: "Failed to sign in" }
            }
        }
        throw error;
    }
}