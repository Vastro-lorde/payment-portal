"use client"
import Link from "next/link";
import { signUpHelper } from "@/components/helpers/superbaseHelperfunctions";
import { useFormState, useFormStatus } from "react-dom";
import { BallTriangle } from "react-loader-spinner";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Signup({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const initialState = {
    message: "",
    data: {}
  };
  const [ state, formAction] = useFormState(signUpHelper, initialState );
  const SignUpButton = () => {
    const { pending } = useFormStatus();
    if (pending) {
      return (
        <button disabled className="bg-green-700 hover:bg-green-400 rounded-md flex justify-center px-4 py-2 text-foreground mb-2">
          <BallTriangle
            height={20}
            width={10}
            radius={5}
            color="#ffffff"
            ariaLabel="ball-triangle-loading"
            wrapperClass={'mx-auto'}
            visible={true}
          />
        </button>
      );
    } else {
      return (
        <button className="bg-green-700 hover:bg-green-400 rounded-md px-4 py-2 text-foreground mb-2">
          Sign Up
        </button>
      );
    }
  };
  useEffect(() => {
    if (state?.message === "Successful") {
      redirect("/login");
    }
  }, [state])
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={formAction}
      >
        <label className="text-md" htmlFor="display_name">
          Fullname
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="display_name"
          type="text"
          placeholder="fullname"
          required
        />
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SignUpButton/>
        <Link href={"/login"}
          className="border border-foreground/20 text-center hover:bg-green-800 hover:text-white rounded-md px-4 py-2 text-foreground mb-2"
        >
          Login
        </Link>
        {state?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
