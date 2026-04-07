<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Link Shortener — Agent Instructions

## Project Overview

A full-stack link shortener built with Next.js 16 (App Router), TypeScript, Clerk auth, Drizzle ORM on Neon (PostgreSQL), and Tailwind CSS v4 with shadcn/radix-nova components.

## Domain-Specific Instructions

> **CRITICAL — NON-NEGOTIABLE:** You MUST read the relevant `/docs/` file for every domain you are about to touch **before writing a single line of code**. This is not optional. Skipping this step will result in incorrect, non-compliant code. If you are unsure which file applies, read all of them.

Detailed coding standards are in `/docs/`. ALWAYS refer to the relevant .md file BEFORE generating any code:

| Domain | File |
|---|---|
| Authentication | [`/docs/auth.md`](docs/auth.md) |
| UI Components | [`/docs/ui.md`](docs/ui.md) |

## Key File Map

```
proxy.ts              # Next.js 16 middleware (replaces middleware.ts) — Clerk auth guard
app/
  layout.tsx          # Root layout — ClerkProvider, fonts, header auth buttons
  page.tsx            # Home page (link shortener UI goes here)
  globals.css         # Tailwind v4 + shadcn CSS variable theme
db/
  schema.ts           # Drizzle table definitions (currently empty)
  index.ts            # Drizzle + Neon HTTP driver initialisation
drizzle.config.ts     # Drizzle Kit migrations config
components/
  ui/                 # shadcn UI primitives (button, etc.)
lib/
  utils.ts            # cn() utility (clsx + tailwind-merge)
```

## Non-Negotiable Rules

1. **STOP AND READ the `/docs/` file** for EVERY domain you are working in BEFORE writing any code — no exceptions, no shortcuts.
2. All request APIs (`cookies`, `headers`, `params`, `searchParams`) are **async** — always `await` them.
3. Never create `middleware.ts` — the middleware file is `proxy.ts`.
4. Never install a different version of a dependency without explicit user instruction.
5. All env vars are accessed via `process.env.VAR_NAME` — never hard-code secrets.
6. All new database tables must be defined in `db/schema.ts` using Drizzle syntax and migrated via Drizzle Kit.
7. Never bypass TypeScript strict mode — no `@ts-ignore`, no `any` without justification.
