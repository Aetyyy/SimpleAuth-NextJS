"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { signUpCredentials } from "@/lib/action";
import { RegisterButton } from "@/components/buttons";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function FormRegister() {
  const [state, formAction] = useFormState(signUpCredentials, null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
          placeholder="John_Doe"
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
        <div className="relative overflow-hidden">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            name="password"
            className="bg-white border border-[#CED4DA] hover:border-[#74C0FC] focus:border-[#74C0FC] outline-none transition-colors duration-300 text-[#6C757D] rounded-lg w-full p-2.5"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute py-4 right-0 items-center outline-none px-4 text-gray-400 hover:text-gray-600 transition-colors duration-300"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <div className="relative w-4 h-4">
              <FaEyeSlash
                className={`absolute inset-0 transform transition-all duration-300 ease-in-out ${
                  showPassword
                    ? "opacity-0 rotate-100 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <FaEye
                className={`absolute inset-0 transform transition-all duration-300 ease-in-out ${
                  showPassword
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-100 scale-0"
                }`}
              />
            </div>
          </button>
        </div>
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
        <div className="relative overflow-hidden">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            name="ConfirmPassword"
            className="bg-white border border-[#CED4DA] hover:border-[#74C0FC] focus:border-[#74C0FC] outline-none transition-colors duration-300 text-[#6C757D] rounded-lg w-full p-2.5"
            placeholder="Enter your confirm password"
          />
          <button
            type="button"
            onClick={toggleConfirmPassword}
            className="absolute py-4 right-0 items-center outline-none px-4 text-gray-400 hover:text-gray-600 transition-colors duration-300"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            <div className="relative w-4 h-4">
              <FaEyeSlash
                className={`absolute inset-0 transform transition-all duration-300 ease-in-out ${
                  showConfirmPassword
                    ? "opacity-0 rotate-100 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <FaEye
                className={`absolute inset-0 transform transition-all duration-300 ease-in-out ${
                  showConfirmPassword
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-100 scale-0"
                }`}
              />
            </div>
          </button>
        </div>
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
