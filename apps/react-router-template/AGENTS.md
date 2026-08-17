# Thor React Router Template Guidelines

## Purpose

This directory is copied to create embedded Thor Commerce apps. Changes here
must be safe as defaults: downstream apps often keep the authentication,
session, routing, and error-handling structure unchanged.

## Commands

- Install dependencies: `pnpm install`
- Generate GraphQL types: `pnpm codegen`
- Type-check: `pnpm typecheck`
- Build the production bundle: `pnpm build`

Run commands from `apps/react-router-template`.

## Authentication Invariants

- Do not call `authenticate.admin(request)` from `app/root.tsx`. React Router
  runs all matched loaders in parallel; authenticating in both the root and a
  child loader can concurrently exchange or refresh the same session token.
- Every protected route must authenticate exactly once in its own `loader` or
  `action`, before reading project data or calling the Admin API.
- Authentication endpoints, webhook endpoints, and other resource routes must
  use their purpose-specific Thor authentication helper. Do not rely on the
  root loader as an authentication gate.
- If authentication ever needs to be shared across matched routes, implement it
  with request middleware or an awaited single-flight primitive. Do not rely on
  parent loaders completing before child loaders.
- Never catch an authentication error and replace it without first recording a
  sanitized cause. Log status, error type, project, and upstream request ID when
  available; never log ID tokens, access tokens, refresh tokens, client secrets,
  cookies, or authorization headers.

## Session Storage

- `MemorySessionStorage` is for local development and tests only. Production
  deployments must configure durable session storage shared by every process or
  Worker isolate.
- Keep `THOR_APP_SCOPES` synchronized with the active app version. A stored
  session missing required scopes must be treated as stale and reauthorized.
- Session writes must be idempotent because concurrent requests can store the
  same offline session.

## Routing And Error Boundaries

- Keep App Bridge configuration in the root loader, but keep authentication in
  protected route handlers.
- Routes using `authenticate.admin` must retain the Thor `boundary.error` and
  `boundary.headers` integration needed for App Bridge authentication responses.
- User-facing errors should provide a retry path and a correlation/request ID
  when available. Do not render raw upstream response bodies.

## Verification

For authentication, routing, dependency, or session changes, run both
`pnpm typecheck` and `pnpm build`. Verify a fresh app load with no stored session,
a load with an existing session, and a session-token refresh. A matched route
must cause at most one token exchange or refresh per session token.
