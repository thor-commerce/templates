# Thor React Router Template

Starter template for building embedded Thor Commerce apps with React Router v7, React 19, and TypeScript.

This template includes:

- Thor app authentication for admin users
- A webhook endpoint
- Example admin GraphQL queries
- Generated GraphQL types via codegen
- Primer React for UI primitives
- Server-side rendering with React Router

## Stack

- `react-router@7`
- `react@19`
- `typescript`
- `@thor-commerce/thor-app-react-router`
- `@thor-commerce/app-bridge-react`
- `@primer/react`
- `graphql-codegen`

## Requirements

- Node.js 20+
- pnpm
- A Thor Commerce app with a client ID, client secret, app URL, and scopes

## Environment Variables

Copy `.env.example` to `.env` and fill in the values from the Thor developer portal:

```bash
cp .env.example .env
```

Required variables:

- `THOR_APP_CLIENT_ID`
- `THOR_APP_CLIENT_SECRET`
- `THOR_APP_URL`
- `THOR_APP_SCOPES`

Example:

```env
THOR_APP_CLIENT_ID="your-client-id"
THOR_APP_CLIENT_SECRET="your-client-secret"
THOR_APP_URL="http://localhost:3000"
THOR_APP_SCOPES="products:view,channels:view"
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The app runs on [http://localhost:3000](http://localhost:3000).

If you expose the app through ngrok, the Vite config already allows `*.ngrok-free.app` hosts.

## Available Scripts

- `pnpm dev` starts the local development server on port `3000`
- `pnpm build` builds the server and client bundles
- `pnpm start` serves the production build
- `pnpm typecheck` generates React Router types and runs TypeScript
- `pnpm codegen` regenerates GraphQL schema and document types into `app/types`

## Project Structure

```text
app/
  api/
    auth.tsx                Thor auth entrypoint
    webhook-handler.tsx     Webhook action endpoint
  routes/
    home.tsx                Product list example
    product-detail/         Product detail example
  root.tsx                  App shell, auth gate, AppProvider
  thor.server.ts            Thor app configuration and session storage
  types/                    Generated GraphQL schema and typings
```

## How It Works

### Authentication

`app/root.tsx` protects the app by calling `authenticate.admin(request)` in the root loader. The app is wrapped with `AppProvider` so it can run as an embedded Thor app.

The auth callback route lives at `app/api/auth.tsx` and uses the Thor React Router server helpers.

### GraphQL

The example routes use the authenticated admin client returned from `authenticate.admin(request)`:

- `app/routes/home.tsx` queries products and renders a table
- `app/routes/product-detail/product-detail.tsx` loads a single product by ID

GraphQL code generation is configured in `.graphqlrc.ts` and outputs generated files to `app/types`.

When you add or change GraphQL documents, run:

```bash
pnpm codegen
```

### Webhooks

The template exposes `POST /api/webhook-handler` through `app/api/webhook-handler.tsx`.

That route verifies the webhook with `authenticate.webhook(request)` and gives you access to:

- `payload`
- `session`
- `topic`
- `project`

Replace the example `console.log` with your actual webhook handling logic.

### Sessions

`app/thor.server.ts` uses an in-memory `MemorySessionStorage` implementation for local development and template simplicity.

That is not suitable for production. Replace it with persistent session storage before deploying.

## Routing

The template defines these routes in `app/routes.ts`:

- `/` product list
- `/products/:id` product detail page
- `/api/auth/*` Thor auth flow
- `/api/webhook-handler` webhook endpoint

## Styling

Styling is based on Primer primitives and Primer React. Global styles live in `app/app.css`.

## Production Notes

- Replace in-memory sessions with durable storage
- Set `THOR_APP_URL` to your deployed app URL
- Make sure your configured scopes match the scopes requested by the app
- Register any required webhooks for your production environment

## Docker

A `Dockerfile` is included, but review it before using it as-is in production. The current repository uses `pnpm`, while the Docker build is written around `npm`.

## Next Steps

Typical customizations after generating from this template:

- swap `MemorySessionStorage` for a database-backed session store
- add your own admin routes and loaders
- add GraphQL mutations and regenerate types
- implement real webhook processing
- tighten logging and production configuration
