"use client";

import { useClerk, useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export function HeaderAuth() {
  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <UserButton />;
  }

  return (
    <>
      <button
        className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 hover:bg-zinc-700 transition-colors"
        onClick={() => openSignIn()}
      >
        Sign in
      </button>
      <button
        className="px-4 py-2 text-sm font-medium rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
        onClick={() => openSignUp()}
      >
        Sign up
      </button>
    </>
  );
}
