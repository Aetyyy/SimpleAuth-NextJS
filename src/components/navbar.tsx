import Link from "next/link";
import Image from "next/image";
import { auth, signOut } from "@/auth";
import React from "react";

export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="bg-navbar-light border-b border-navbar-border fixed w-full top-0">
      <div className="max-w-screen-xl flex items-center justify-between container mx-auto p-4">
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={"/logo.jpg"} alt="logo" width={50} height={50} priority />
          <h1 className="text-lg font-bold">Boren</h1>
        </Link>
        <div className="flex items-center gap-3">
          <ul className="hidden sm:flex items-center gap-4 mr-5 font-semibold text-navbar-text">
            <li>
              <Link href={"/"} className="hover:text-navbar-hover-text">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-navbar-hover-text">
                About
              </Link>
            </li>
            {session && (
              <>
                <li>
                  <Link
                    href={"/product"}
                    className="hover:text-navbar-hover-text"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/dashboard"}
                    className="hover:text-navbar-hover-text"
                  >
                    Dashboard
                  </Link>
                </li>
                {session.user.role === "admin" ? (
                  <li>
                    <Link
                      href={"/user"}
                      className="hover:text-navbar-hover-text"
                    >
                      User
                    </Link>
                  </li>
                ) : null}
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          {session && (
            <div className="flex gap-3 items-center">
              <div className="flex flex-col justify-center -space-y-1">
                <span className="font-semibold text-gray-600 text-right capitalize">
                  {session.user.name}
                </span>
                <span className="font-xs text-gray-400 text-right capitalize">
                  {session.user.role}
                </span>
              </div>
              <button
                type="button"
                className="text-sm bg-gray-100 rounded-full"
              >
                <Image
                  src={session.user.image || "/avatar.png"}
                  alt="avatar"
                  width={512}
                  height={512}
                  priority
                  quality={100}
                  className="max-w-10 h-10 rounded-full"
                />
              </button>
            </div>
          )}
          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button
                type="submit"
                className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500"
              >
                Logout
              </button>
            </form>
          ) : (
            <>
              <Link
                href={"/login"}
                className="hidden sm:block bg-button-light text-white px-4 py-2 rounded-md hover:bg-button-hover transition-colors duration-500"
              >
                Login
              </Link>
              <Link
                href={"/register"}
                className="hidden sm:block bg-[#0056b3] text-white px-4 py-2 rounded-md hover:bg-button-light transition-colors duration-500"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
