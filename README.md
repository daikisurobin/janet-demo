# NeuralFlow — AI SaaS Landing Page

A fully responsive AI SaaS landing page built with Next.js, featuring authentication, pricing, dark mode, and smooth animations.

## Features

- **Responsive design** — Mobile-first layout that adapts from phones to desktops
- **Authentication** — Sign in / sign up modals with client-side session persistence
- **Pricing** — Three-tier pricing with monthly/yearly toggle
- **Dark mode** — System-aware theme switching with `next-themes`
- **Animations** — Scroll-triggered and entrance animations via Framer Motion

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Lucide React](https://lucide.dev/) icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # UI components (hero, pricing, auth, etc.)
├── context/          # React context (auth)
└── lib/              # Utilities
```

## Scripts

| Command       | Description          |
|---------------|----------------------|
| `npm run dev` | Start dev server     |
| `npm run build` | Production build   |
| `npm run start` | Start production   |
| `npm run lint`  | Run ESLint         |
