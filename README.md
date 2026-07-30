# Thor Commerce Templates

Project templates for building apps and integrations on Thor Commerce.

This repository currently contains a React Router starter app for embedded Thor Commerce admin apps. Each template is kept under `apps/` and includes its own setup notes, dependencies, and implementation details.

## Templates

| Template | Description |
| --- | --- |
| `apps/react-router-template` | Embedded Thor Commerce app starter built with React Router v7, React 19, TypeScript, Primer React, and Thor app helpers. |

## React Router Template

The React Router template includes:

- Thor admin authentication
- Embedded app setup with the Thor app bridge
- Example admin GraphQL queries
- Generated GraphQL types
- A webhook endpoint
- Server-side rendering through React Router
- Primer React UI primitives

See [apps/react-router-template/README.md](apps/react-router-template/README.md) for the full template guide.

## Requirements

- Node.js 20+
- pnpm
- A Thor Commerce app with a client ID, client secret, app URL, and required scopes

## Getting Started

Use the template as the starting point for a new app:

```bash
cp -R apps/react-router-template my-thor-app
cd my-thor-app
pnpm install
cp .env.example .env
pnpm dev
```

Fill in `.env` with values from the Thor developer portal before starting local development.

The development server runs on [http://localhost:3000](http://localhost:3000).

## Template Environment

The React Router template expects these variables:

```env
THOR_APP_CLIENT_ID="your-client-id"
THOR_APP_CLIENT_SECRET="your-client-secret"
THOR_APP_URL="http://localhost:3000"
THOR_APP_SCOPES="products:view,channels:view"
```

## Common Commands

Run commands from inside the template directory:

```bash
cd apps/react-router-template
```

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server on port `3000`. |
| `pnpm build` | Build the app for production. |
| `pnpm start` | Serve the production build. |
| `pnpm typecheck` | Generate React Router types and run TypeScript checks. |
| `pnpm codegen` | Regenerate GraphQL schema and document types. |

## Repository Layout

```text
apps/
  react-router-template/
    app/                  React Router app source
    public/               Static assets
    Dockerfile            Container build example
    package.json          Template dependencies and scripts
    README.md             Template-specific documentation
```

## Production Notes

Before using a generated app in production:

- Replace the in-memory session storage with durable storage. For Cloudflare
  deployments, the template documents the
  `@thor-commerce/thor-app-session-storage-d1@0.1.0` adapter and the complete
  D1 provisioning and migration flow.
- Set `THOR_APP_URL` to the deployed app URL.
- Confirm requested scopes match the app's required functionality.
- Register required webhooks for the production environment.
- Review the included Dockerfile and deployment configuration for your target platform.

See the template's
[Cloudflare D1 session-storage guide](apps/react-router-template/README.md#cloudflare-d1-production-setup)
before deploying an app to Cloudflare.

## Contributing Templates

When adding a new template:

1. Add it under `apps/<template-name>`.
2. Include a template-level `README.md`.
3. Include an `.env.example` if runtime configuration is required.
4. Keep generated files and lockfiles scoped to the template directory.
5. Update the templates table in this README.
