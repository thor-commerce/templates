# Thor React Router Template

Starter template for building embedded Thor Commerce apps with React Router v7, React 19, and TypeScript.

This template includes:

- Thor app authentication for admin users
- A webhook endpoint
- Example admin GraphQL queries
- Generated GraphQL types via codegen
- Primer React for UI primitives
- Server-side rendering with React Router
- Automatic light/dark appearance synchronization with the Thor dashboard

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

Thor API requests use `https://api.thorcommerce.io` by default. Development
and enterprise installations can optionally set:

- `THOR_API_BASE_URL`
- `THOR_ADMIN_BASE_URL`
- `THOR_APP_BRIDGE_URL`

Example:

```env
THOR_APP_CLIENT_ID="your-client-id"
THOR_APP_CLIENT_SECRET="your-client-secret"
THOR_APP_URL="http://localhost:3000"
THOR_APP_SCOPES="offline_access,products:view,channels:view"
# THOR_API_BASE_URL="https://dev-api.thorcommerce.io"
# THOR_ADMIN_BASE_URL="https://dev-admin.thorcommerce.io"
# THOR_APP_BRIDGE_URL="https://cdn.enterprise.example/global/thor-app-bridge.js"
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
  thor.server.ts            Thor app configuration
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

### Session storage

The SDK uses `MemorySessionStorage` when `sessionStorage` is omitted. That
keeps setup simple during development, but sessions are lost when the process
restarts and are not shared between application instances.

The D1 adapter does not create a Cloudflare database automatically. It uses an
existing D1 binding and can initialize its table, but provisioning the database
remains an explicit deployment step.

#### Cloudflare D1 production setup

Install the adapter and Wrangler:

```bash
pnpm add @thor-commerce/thor-app-session-storage-d1@0.1.0
pnpm add -D wrangler
```

Create the database:

```bash
pnpm wrangler d1 create thor-app-sessions
```

Accept Wrangler's offer to update your configuration, then rename the
generated binding to `THOR_SESSIONS`. The resulting `wrangler.jsonc` entry
should look like:

```jsonc
{
  "d1_databases": [
    {
      "binding": "THOR_SESSIONS",
      "database_name": "thor-app-sessions",
      "database_id": "<database-id>"
    }
  ]
}
```

Copy the adapter's schema into a checked-in migration:

```bash
mkdir -p migrations
cp node_modules/@thor-commerce/thor-app-session-storage-d1/schema.sql \
  migrations/0001_thor_app_sessions.sql
```

Apply the migration locally and remotely:

```bash
pnpm wrangler d1 migrations apply thor-app-sessions --local
pnpm wrangler d1 migrations apply thor-app-sessions --remote
```

Finally, pass the Worker binding to `thorApp` in `app/thor.server.ts`:

```ts
import {env} from "cloudflare:workers";
import {D1SessionStorage} from "@thor-commerce/thor-app-session-storage-d1";

const thor = thorApp({
  clientId: process.env.THOR_APP_CLIENT_ID || "",
  clientSecret: process.env.THOR_APP_CLIENT_SECRET || "",
  scopes: process.env.THOR_APP_SCOPES
    ?.split(",")
    .map((scope) => scope.trim())
    .filter(Boolean),
  appUrl: process.env.THOR_APP_URL || "",
  sessionStorage: new D1SessionStorage(env.THOR_SESSIONS),
});
```

For prototypes, `await sessionStorage.initialize()` creates the table in an
already-provisioned database. Use migrations in production.

The existing `SessionStorage` interface is unchanged, so custom adapters and
apps using older SDK versions continue to work.

### Dashboard appearance

The template uses `useAppAppearance()` to follow the dashboard's resolved
light or dark appearance. Primer switches between its `light` and `dark`
schemes automatically when the dashboard preference changes.

## Routing

The template defines these routes in `app/routes.ts`:

- `/` product list
- `/products/:id` product detail page
- `/api/auth/*` Thor auth flow
- `/api/webhook-handler` webhook endpoint

## Styling

Styling is based on Primer primitives and Primer React. Global styles live in `app/app.css`.

## Production Notes

- Set `THOR_APP_URL` to your deployed app URL
- Make sure `THOR_APP_SCOPES` matches the scopes in the app's active version.
  The SDK uses this list to invalidate stale stored sessions and trigger
  reauthorization after permissions change.
- Register any required webhooks for your production environment
- Configure persistent session storage; the default in-memory adapter is only
  suitable for local development and tests
- Leave the optional Thor endpoint variables unset to use the hosted production
  API, admin, and App Bridge endpoints

## Docker

A `Dockerfile` is included, but review it before using it as-is in production. The current repository uses `pnpm`, while the Docker build is written around `npm`.

## Next Steps

Typical customizations after generating from this template:

- add your own admin routes and loaders
- add GraphQL mutations and regenerate types
- implement real webhook processing
- tighten logging and production configuration
