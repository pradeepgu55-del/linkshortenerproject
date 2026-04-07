# Authentication

## Provider

**Clerk is the only auth provider.** Do not implement any other authentication method (JWT, NextAuth, sessions, OAuth manually, etc.).

## Rules

- All auth logic must use Clerk's SDK (`@clerk/nextjs`).
- The middleware file is `proxy.ts` — never `middleware.ts`. The Clerk middleware (`clerkMiddleware`) is already configured there.
- Never hard-code credentials or secrets — use `process.env.VAR_NAME`.

## Protected Routes

- `/dashboard` **requires the user to be signed in.**
- Use `auth()` from `@clerk/nextjs/server` inside the page to redirect unauthenticated users:

```ts
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect('/');
  // ...
}
```

## Home Page Redirect

- If a signed-in user visits `/`, redirect them to `/dashboard`:

```ts
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) redirect('/dashboard');
  // ...
}
```

## Sign In / Sign Up UI

- Always use **Clerk modals** — never navigate to a dedicated sign-in/sign-up page.
- Trigger modals via Clerk's `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` components.

```tsx
import { SignInButton, SignUpButton } from '@clerk/nextjs';

<SignInButton mode="modal">
  <button>Sign in</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign up</button>
</SignUpButton>
```

- Do **not** create `/sign-in` or `/sign-up` route pages.
