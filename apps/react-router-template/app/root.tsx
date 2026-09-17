import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useRouteLoaderData,
  useRouteError,
  type HeadersFunction,
} from "react-router";
import { useEffect } from "react";

import "@thor-commerce/ui/styles.css";
import "./app.css";

import type { Route } from "./+types/root";
import {
  AppProvider,
  useAppAppearance,
} from "@thor-commerce/thor-app-react-router/react";

import { BaseStyles, ThemeProvider } from "@primer/react";
import { boundary } from "@thor-commerce/thor-app-react-router/server";

type AppAppearance = "dark" | "light";

const APPEARANCE_COOKIE = "thor_app_appearance";
const APPEARANCE_STORAGE_KEY = "thor-app-appearance";
let lastKnownAppearance: AppAppearance | null = null;

function appearanceFromRequest(request: Request): AppAppearance | null {
  const queryAppearance = new URL(request.url).searchParams.get("appearance");
  if (queryAppearance === "dark" || queryAppearance === "light") {
    return queryAppearance;
  }

  const cookies = request.headers.get("cookie")?.split(";") ?? [];
  const appearanceCookie = cookies.find((cookie) =>
    cookie.trim().startsWith(`${APPEARANCE_COOKIE}=`),
  );
  const value = appearanceCookie?.split("=").slice(1).join("=").trim();
  return value === "dark" || value === "light" ? value : null;
}

function clientAppearanceFallback(
  serverAppearance: AppAppearance,
): AppAppearance {
  if (typeof window === "undefined") return serverAppearance;
  if (lastKnownAppearance) return lastKnownAppearance;

  try {
    const storedAppearance = window.localStorage.getItem(
      APPEARANCE_STORAGE_KEY,
    );
    return storedAppearance === "dark" || storedAppearance === "light"
      ? storedAppearance
      : serverAppearance;
  } catch {
    return serverAppearance;
  }
}

function requestDashboardAppearance(): void {
  if (window.parent === window) return;

  const targetOrigin = window.location.ancestorOrigins?.item(0) || "*";
  window.parent.postMessage(
    {
      namespace: "thorcommerce:app-bridge",
      version: "1.0",
      id: `appearance_${Date.now()}_${Math.random().toString(36).slice(2)}`,
      kind: "request",
      type: "appearance:get",
      source: "embedded-app",
      target: "dashboard",
    },
    targetOrigin,
  );
  window.parent.postMessage(
    {
      source: "thor-app-bridge",
      type: "thor-app-bridge:appearance-request",
    },
    targetOrigin,
  );
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const rootData = useRouteLoaderData<typeof loader>("root");
  const location = useLocation();
  const initialAppearance = clientAppearanceFallback(
    rootData?.appearance ?? "light",
  );
  const appearance = useAppAppearance(initialAppearance);
  const initialBackground =
    initialAppearance === "dark" ? "#0d1117" : "#ffffff";

  useEffect(() => {
    lastKnownAppearance = appearance;
    try {
      window.localStorage.setItem(APPEARANCE_STORAGE_KEY, appearance);
    } catch {
      // Storage can be unavailable in privacy-restricted embedded contexts.
    }

    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${APPEARANCE_COOKIE}=${appearance}; Path=/; Max-Age=31536000; SameSite=${secure ? "None" : "Lax"}${secure}`;

    const background = appearance === "dark" ? "#0d1117" : "#ffffff";
    document.documentElement.style.backgroundColor = background;
    document.documentElement.style.colorScheme = appearance;
    document.body.style.backgroundColor = background;
    document.body.style.colorScheme = appearance;
    document
      .querySelector('meta[name="color-scheme"]')
      ?.setAttribute("content", appearance);

    const url = new URL(window.location.href);
    if (url.searchParams.get("appearance") !== appearance) {
      url.searchParams.set("appearance", appearance);
      window.history.replaceState(window.history.state, "", url);
    }
  }, [appearance]);

  useEffect(() => {
    requestDashboardAppearance();
    const retries = [100, 500].map((delay) =>
      window.setTimeout(requestDashboardAppearance, delay),
    );
    return () => retries.forEach((timer) => window.clearTimeout(timer));
  }, [location.pathname]);

  return (
    <html lang="en" style={{ backgroundColor: initialBackground }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content={initialAppearance} />
        <Meta />
        <Links />
      </head>
      <body style={{ backgroundColor: initialBackground }}>
        <ThemeProvider
          key={appearance}
          colorMode={appearance === "dark" ? "night" : "day"}
          dayScheme="light"
          nightScheme="dark"
          preventSSRMismatch
        >
          <BaseStyles as={"main"} className="frame">
            {children}
          </BaseStyles>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const loader = async ({ request }: Route.LoaderArgs) => {
  // eslint-disable-next-line no-undef
  return {
    clientId: process.env.THOR_APP_CLIENT_ID || "",
    appBridgeUrl: process.env.THOR_APP_BRIDGE_URL || undefined,
    appearance: appearanceFromRequest(request),
  };
};

export default function App({ loaderData }: Route.ComponentProps) {
  return (
    <AppProvider
      embedded
      clientId={loaderData.clientId}
      appBridgeUrl={loaderData.appBridgeUrl}
    >
      <Outlet />
    </AppProvider>
  );
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
