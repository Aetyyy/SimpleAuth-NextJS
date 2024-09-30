"use client";

import { forgotPassword } from "@/lib/action";
import { ForgotPasswordButton } from "@/components/buttons";
import { FormEvent, useState } from "react";
import { Email } from "@/types/forgot.i";

export default function FormForgotPassword() {
  const [state, setState] = useState<Email>();

  const handleForm = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const data = await forgotPassword(null, formData);
    if (data.status === 404) {
      setState(data as Email);
    } else if (data.status === 200) {
      setState(data as Email);
      await fetch("/api/pwreset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
        }),
      });
    }
  };

  return (
    <form onSubmit={handleForm} method="POST" className="space-y-6">
      {state?.message ? (
        <div
          className={`p-4 mb-4 text-sm rounded-lg ${
            state?.status !== 200
              ? "text-red-800 bg-red-100"
              : "text-green-800 bg-green-100"
          }`}
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
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          placeholder="john.doe@me.com"
          required
        />
      </div>

      <ForgotPasswordButton />
    </form>
  );
}
