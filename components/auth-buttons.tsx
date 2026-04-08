"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function SignUpCta({
  size = "lg",
  className,
  children = "Get Started — It's Free",
}: {
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
  children?: React.ReactNode;
}) {
  const { openSignUp } = useClerk();
  return (
    <Button size={size} className={className} onClick={() => openSignUp()}>
      {children}
    </Button>
  );
}

export function SignInCta({
  size = "lg",
  className,
  children = "Sign In",
}: {
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
  children?: React.ReactNode;
}) {
  const { openSignIn } = useClerk();
  return (
    <Button size={size} variant="outline" className={className} onClick={() => openSignIn()}>
      {children}
    </Button>
  );
}
