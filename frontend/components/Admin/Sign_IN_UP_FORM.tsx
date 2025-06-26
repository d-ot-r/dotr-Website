"use client";

import React, { useState, useEffect } from "react";
import {
  LabelInputContainer,
  Textarea,
  BottomGradient,
  Input,
  Label,
} from "../- ReUseable/FORM";
import Image from "next/image";
import { useRouter } from "next/navigation";

// #region Sign-UP FORM
export const Sign_UP_FORM = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    console.log(`📦 Sign-UP Form Submission:`, data);

    try {
      const response = await fetch(
        `http://localhost:8000/api/form/admin/sign-up/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) router.push("/auth/signin");
      else alert("Sign-UP failed");

      if (!response.ok) {
        const errorData = await response.json();
        alert(
          `Submission failed: ${
            errorData.message || "An unexpected error occurred."
          }`
        );
        return;
      }

      const result = await response.json();
      console.log("✅ Submitted successfully:", result);
    } catch (error) {
      console.error("🚨 Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section
      id={`sign-up-form`}
      className="shadow-input w-full max-w-5xl mx-auto bg-white p-4 md:p-8 dark:bg-slate-950 rounded-3xl"
    >
      <Image
        src="/images/dotr_black_big.png"
        alt="dotr_logo"
        width={200}
        height={200}
        className="flex justify-center mx-auto rounded-ss-3xl rounded-br-3xl my-10"
      />

      <h1 className="text-3xl font-bold flex flex-col items-center px-auto pb-8 text-neutral-600 dark:text-neutral-300">
        Enter your Details to be a part of our community...
      </h1>

      <form className="my-8 mx-4 md:mx-16" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="email">
            Email Address<span className="text-red-500 text-lg">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="password">
            Password<span className="text-red-500 text-lg">*</span>
          </Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password..."
            type="password"
            required
          />
        </LabelInputContainer>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <button
          className="group/btn relative mx-auto block h-12 w-[180px] rounded-t-full bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send
          <BottomGradient />
        </button>

        {isSubmitted && (
          <p className="text-5xl text-green-500 flex items-center justify-center mt-5">
            ...Thanks! We got your request...
          </p>
        )}
      </form>
    </section>
  );
};
//#endregion

// #region Sign-IN FORM
export const Sign_IN_FORM = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(`📦 Sign-IN Form Submission:`, data);

    try {
      setLoading(true); // 🌀 Start loader
      const response = await fetch(
        `http://localhost:8000/api/form/sign-in/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // send cookies
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("✅ Submitted successfully:", result);
        // window.location.href = "/auth/admin";
        router.push("admin");
        // router.replace("/auth/admin");
      } else {
        setLoading(false); // 🌀 Stop loader
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message || "Unknown error"}`);
      }

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   alert(
      //     `Submission failed: ${
      //       errorData.message || "An unexpected error occurred."
      //     }`
      //   );
      //   return;
      // }

      // const result = await response.json();
      // console.log("✅ Submitted successfully:", result);
    } catch (error) {
      setLoading(false); // ⬅️ Add this
      console.error("🚨 Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section
      id={`sign-up-form`}
      className="shadow-input w-full max-w-5xl mx-auto bg-white p-4 md:p-8 dark:bg-slate-950 rounded-3xl"
    >
      <Image
        src="/images/dotr_black_big.png"
        alt="dotr_logo"
        width={200}
        height={200}
        className="flex justify-center mx-auto rounded-ss-3xl rounded-br-3xl my-10"
      />

      <h1 className="text-3xl font-bold flex flex-col items-center px-auto pb-8 text-neutral-600 dark:text-neutral-300">
        Enter your Details to be a part of our community...
      </h1>

      <form className="my-8 mx-4 md:mx-16" onSubmit={handleSubmit}>
        <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
          <LabelInputContainer>
            <Label htmlFor="email">
              Email Address<span className="text-red-500 text-lg">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="you@example.com"
              type="email"
              required
            />
          </LabelInputContainer>
        </div>

        <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
          <LabelInputContainer>
            <Label htmlFor="password">
              Password<span className="text-red-500 text-lg">*</span>
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter your password..."
              type="password"
              required
            />
          </LabelInputContainer>
        </div>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <button
          disabled={isSubmitted || loading}
          className="group/btn relative mx-auto block h-12 w-[180px] rounded-t-full bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] opacity-100 disabled:opacity-50"
          type="submit"
        >
          {loading ? "Loading..." : "Send"}
          {/* Sign In */}
          <BottomGradient />
        </button>

        {loading && (
          <p className="text-xl text-blue-500 flex items-center justify-center mt-5 animate-pulse">
            Redirecting to admin...
          </p>
        )}
      </form>
    </section>
  );
};
//#endregion
