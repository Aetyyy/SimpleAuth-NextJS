"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { signUpCredentials } from "@/lib/action";
import { RegisterButton } from "@/components/buttons";

export default function FormRegister() {
  const [state, formAction] = useFormState(signUpCredentials, null);

  return (
    <form action={formAction} className="space-y-6">
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
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          className="bg-white border border-[#CED4DA] hover:border-[#74C0FC] focus:border-[#74C0FC] outline-none transition-colors duration-300 text-[#6C757D] rounded-lg w-full p-2.5"
          placeholder="John Doe"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.name}
          </span>
        </div>
      </div>
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
      <div>
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
      <div>
        <label
          htmlFor="ConfirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          ConfirmPassword
        </label>
        <input
          type="password"
          name="ConfirmPassword"
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
                {state.error.ConfirmPassword && (
                  <div>
                    {state.error.ConfirmPassword.map((msg, idx) => (
                      <p key={idx}>{msg}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </span>
        </div>
      </div>
      <RegisterButton />
      <p className="text-sm font-light text-[#495057]">
        Already have an account?
        <Link href={"/login"}>
          <span className="font-medium pl-1 text-[#007BFF] hover:text-[#0056b3]">
            Sign in
          </span>
        </Link>
      </p>
    </form>
  );
}
