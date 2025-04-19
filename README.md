# 🧠 Character Editor

A slick little web app for selecting and previewing famous personas — built with React, TypeScript, Tailwind CSS, and state synced via context.

This project exists because sometimes you just need to switch from Einstein to Beyoncé with a click.

## 🧪 Features

- 🧍 Persona selector with preloaded profiles (Einstein, Oprah, Spock, and more)
- 📸 Live preview with fallback images
- 🔄 Persona context state with localStorage persistence
- ⚛️ React + Vite + TypeScript
- 🎨 Tailwind CSS styling
- ⚙️ Type-safe, strict-mode setup with ESLint + TypeScript ESLint

## 🚀 Getting Started

```
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) and start switching personas.


## 🧬 Project Structure

```
src/
├── components/         # UI components
├── hooks/              # Context, hooks, utils
├── data/               # Preloaded personas
├── pages/              # Home + Editor page
├── services/           # getPersona service logic
├── styles/             # Tailwind CSS
└── types/              # Shared Persona type
```

## 🧠 How Persona Works

- The current `personaId` is managed via React Context.
- The `usePersona` hook asynchronously loads the corresponding persona and handles errors gracefully.
- The selection persists via `localStorage`.
- The preview auto-updates the image and name.

## 🧼 Linting

```
npm run lint
```

> Uses strict recommended ESLint config with TS + React plugin rules.

---

## 📦 Building for Production

```
npm run build
```

This runs `tsc` type-checking and Vite’s production build.
