# UI Components

## Library

**shadcn/ui is the only component library.** Do not create custom components or use any other UI library.

## Rules

- All UI elements must use shadcn/ui components from `components/ui/`.
- If a required component does not exist in `components/ui/`, add it via the shadcn CLI (`npx shadcn@latest add <component>`) — do not build it manually.
- Never write raw HTML elements (e.g. `<button>`, `<input>`, `<dialog>`) where a shadcn equivalent exists.
- Styling must use the existing Tailwind CSS v4 utility classes and the CSS variable theme defined in `app/globals.css` — do not add inline styles or new CSS files.
