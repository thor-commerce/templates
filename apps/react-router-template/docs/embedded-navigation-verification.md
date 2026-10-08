# Embedded navigation and appearance verification

Verified 2026-10-08 from fresh `origin/main` at `30daf94`, using its frozen lockfile:
React Router 7.13.1, App Bridge React 0.9.0, Thor React Router SDK 3.0.6,
Primer React 38.35.0, Node 26.5.0, and Chromium 153.

## Change

The root mounts only `ReactRouterAppBridgeProvider`. Its bundled runtime delegates
host navigation to React Router without the legacy CDN runtime's two-animation-frame
URL check and document-reload fallback. `ThemeProvider` remains mounted when its
mode changes, and React renders the document background, color scheme and meta
value from the current appearance. The appearance query is reapplied after route
navigation as well as mode changes.

The existing server/query/cookie hydration behavior, appearance origin/source
checks, storage fallback and retries remain. Protected-route authentication,
SDK error/header boundaries, session configuration, and API/admin overrides are
unchanged. `THOR_APP_BRIDGE_URL` still configures SDK authentication bootstrap and
document preloads; the client adapter has no script-URL prop and bundles its runtime.

## Browser check

A temporary anonymous test route used the actual template root and a 500 ms loader.
A local parent iframe on port 3127 sent the documented modern bridge messages to
port 3126. It supplied a synthetic session token only for this anonymous test; no
Thor authentication or Admin API operation was performed. The route contained a
Primer input/select and an internal React Router link. The temporary route was
removed and both local listeners stopped before the final checks and commit.

| Viewport | Host navigation | Internal navigation | Dark animation frames | Document reloads |
| --- | ---: | ---: | ---: | ---: |
| 390 px | 794 ms | 840 ms | 49 | 0 |
| 1280 px | 789 ms | 842 ms | 48 | 0 |

Assertions at both widths passed: unchanged `performance.timeOrigin`, stable
component instance and draft, focus retained across dark/light changes, selected
option retained, matching document/Primer/control colors, and `appearance=dark`
retained after navigation. Every sampled body/main background during the delayed
dark navigation was `rgb(13, 17, 23)`. A non-parent appearance message was ignored.
One modern `app:ready` and one shared session-token request occurred; no legacy
ready event or executing legacy bridge script was present. The SDK still emits one
CDN script preload through its unchanged `Link` response header, independently
confirmed as `isLinkPreload: true` by Chrome DevTools. Cookie-only refresh rendered
dark server markup and retained the dark client theme. No uncaught JavaScript
exceptions occurred.

Development React logged a hydration attribute warning for Primer's
`js-focus-visible`/`data-js-focus-visible` additions on the document element; the
appearance attributes matched. This patch does not suppress that warning.

## Checks and limits

The final `pnpm typecheck`, `pnpm build`, and `git diff --check` pass with the test
route removed. Build reports the existing large-chunk warning. Production Node
`pnpm start` remains blocked before serving requests by `Unknown file extension
".css"` for Primer's `BaseStyles-fda34843.css`. The same failure was reproduced
with the untouched fresh-main root and identical frozen dependencies, so no
production-browser claim is made and no unrelated SSR packaging change is included.

Live authentication with fresh, stored, or expired credentials was not exercised;
its configuration and call sites were preserved. No app deployment, package
publication, Forms/dashboard change, or original-checkout edit was performed.
The original modified `AGENTS.md` SHA-256 remained
`03eba0bcd611b5300a68c1f742e79dfcd19c583f609ec78d528a0cb51e8b17bc`.
