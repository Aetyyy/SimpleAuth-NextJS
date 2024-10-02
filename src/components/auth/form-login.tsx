"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { signInCredentials } from "@/lib/action";
import { LoginButton } from "@/components/buttons";

export default function FormLogin() {
  const [state, formAction] = useFormState(signInCredentials, null);

  return (
    <form action={formAction}>
      {state?.message ? (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100"
          role="alert"
        >
          <span className="font-medium">{state?.message}</span>
        </div>
      ) : null}
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          className="bg-white border border-[#CED4DA] hover:border-[#74C0FC] focus:border-[#74C0FC] outline-none transition-colors duration-300 text-[#6C757D] rounded-lg w-full p-2.5"
          placeholder="john.doe@me.com"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error && (
              <div
                className="mb-4 text-sm text-red-500 rounded-lg"
                role="alert"
              >
                {state.error.email && (
                  <div>
                    {state.error.email.map((msg, idx) => (
                      <p key={idx}>{msg}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </span>
        </div>
      </div>
      <div className="my-4">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          className="bg-white border border-[#CED4DA] hover:border-[#74C0FC] focus:border-[#74C0FC] outline-none transition-colors duration-300 text-[#6C757D] rounded-lg w-full p-2.5"
          placeholder="**********"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error && (
              <div
                className="mb-4 text-sm text-red-500 rounded-lg"
                role="alert"
              >
                {state.error.password && (
                  <div>
                    {state.error.password.map((msg, idx) => (
                      <p key={idx}>{msg}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </span>
        </div>
      </div>
      <LoginButton />
      <div className="mt-1 text-xs font-light text-gray-500">
        <Link href={"/forgot-password"}>
          <span className="font-medium text-[#007BFF] hover:text-[#0056b3]">
            Forgot Password?
          </span>
        </Link>
      </div>
      <p className="mt-4 text-sm font-light text-gray-500">
        Dont&apos;t have an account?
        <Link href={"/register"}>
          <span className="font-medium pl-1 text-[#007BFF] hover:text-[#0056b3]">
            Sign Up here
          </span>
        </Link>
      </p>
    </form>
  );
}
