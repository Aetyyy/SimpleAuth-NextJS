import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const getUsers = async () => {
  const session = await auth();
  if (!session || !session.user || session.user.role !== "admin")
    redirect("/dashboard");

  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByUser = async () => {
  const session = await auth();
  if (!session || !session.user) redirect("/dashboard");
  const role = session.user.role;

  if (role === "admin") {
    try {
      const products = await prisma.product.findMany({
        include: { user: { select: { name: true } } },
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const products = await prisma.product.findMany({
        where: { userId: session.user.id },
        include: { user: { select: { name: true } } },
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
};

export const getUnverifiedUser = async () => {
  const users = await prisma.user.findMany();

  return users;
};

export const generateForgotPasswordToken = async (
  userId: string
): Promise<{ token: string }> => {
  try {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 22;
    let token = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    console.log("Generated Token:", token);

    const existingToken = await prisma.passwordToken.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!existingToken) {
      await prisma.passwordToken.create({
        data: {
          token,
          userId: userId,
        },
      });

      console.log("Token successfully saved for new user:", userId);
    } else {
      console.log("Token already exists, regenerating...");
      await prisma.passwordToken.update({
        where: {
          id: existingToken.id,
        },
        data: {
          token,
        },
      });

      console.log("Token successfully updated for user:", userId);
    }

    return { token };
  } catch (error) {
    console.error("Error generating forgot password token:", error);
    throw new Error("Failed to generate forgot password token");
  }
};
