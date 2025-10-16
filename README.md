# BookStore App

A full-stack book discovery app built with React (Vite, Tailwind v4, daisyUI) and Node.js/Express with MongoDB. Includes authentication (JWT), protected routes, a contact form with success redirect, and a polished UI.

## Monorepo layout

- Frontend/ — Vite + React 19, Tailwind CSS v4, daisyUI
- Backend/ — Express 5, Mongoose 8, JWT auth

## Prerequisites

- Node.js 18+ (22 recommended)
- MongoDB running locally (default URI: mongodb://localhost:27017/bookstore)

## Quick start

1. Backend
   - Create Backend/.env
     - PORT=4001
     - MONGO_URL="mongodb://localhost:27017/bookstore"
     - JWT_SECRET="change-this-in-production"
   - Install deps and run dev:
     - npm install (inside Backend)
     - npm run dev
   - You should see:
     - Connected to MongoDB
     - Example app listening on port 4001
   - Health check:
     - http://localhost:4001/api/health

2. Frontend
   - Install deps and run dev:
     - npm install (inside Frontend)
     - npm run dev
   - Open http://localhost:5173
   - Optional: Frontend/.env
     - VITE_API_BASE=http://localhost:4001

## Features

- Auth: Register/Login with JWT; state stored in localStorage
- Protected routes: /course requires login
- Dark mode toggle (Tailwind + daisyUI)
- Contact form: shows success toast then redirects home
- About page
- Book list endpoint on backend (/book)

## Notable files

- Frontend
  - src/context/AuthContext.jsx — login/signup/logout + token persistence
  - src/components/ProtectedRoute.jsx — route guard
  - src/components/Login.jsx — login modal wired to backend
  - src/components/Signup.jsx — signup form wired to backend
  - src/components/Contact.jsx — success toast and redirect
  - src/components/About.jsx — About page
  - src/App.jsx — routes; /course wrapped by ProtectedRoute
- Backend
  - Index.js — server entry; CORS, routes, Mongoose connect
  - route/auth.route.js — /api/auth endpoints
  - controller/auth.controller.js — register/login/me
  - middleware/auth.middleware.js — JWT verification
  - model/user.model.js — user schema
  - route/book.route.js, controller/book.controller.js — sample book API

## Scripts

- Backend
  - npm run dev — start Express with nodemon (legacy watch for OneDrive)
  - npm start — start Express without watch
- Frontend
  - npm run dev — start Vite dev server
  - npm run build — production build
  - npm run preview — preview built assets

### Root-level convenience scripts

From the repo root, you can run:

- Install all deps (Frontend + Backend):
  - npm run install:all
- Start backend dev server:
  - npm run dev:backend
- Start frontend dev server:
  - npm run dev:frontend

## Troubleshooting

- If backend restarts excessively on OneDrive, we already enabled nodemon legacy watch.
- If frontend can’t call backend, ensure CORS origin http://localhost:5173 and backend PORT=4001.
- For Mongo URI/auth issues, verify MONGO_URL in Backend/.env.

## License

MIT
