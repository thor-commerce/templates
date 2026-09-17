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
import {useEffect, useLayoutEffect, useState} from "react";

import "@thor-commerce/ui/styles.css";
import "./app.css";

import type { Route } from "./+types/root";
import {AppProvider} from "@thor-commerce/thor-app-react-router/react";

import { BaseStyles, ThemeProvider } from "@primer/react";
import { boundary } from "@thor-commerce/thor-app-react-router/server";

type AppAppearance = "dark" | "light";

const APPEARANCE_COOKIE = "thor_app_appearance";
const APPEARANCE_STORAGE_KEY = "thor-app-appearance";
const useHydratedLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

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

function dashboardOrigin(): string | undefined {
  const ancestorOrigin = window.location.ancestorOrigins?.item(0);
  if (ancestorOrigin) return ancestorOrigin;
  if (!document.referrer) return undefined;

  try {
    const referrerOrigin = new URL(document.referrer).origin;
    return referrerOrigin === window.location.origin
      ? undefined
      : referrerOrigin;
  } catch {
    return undefined;
  }
}

function appearanceFromMessage(value: unknown): AppAppearance | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const message = value as {
    namespace?: string;
    payload?: {colorMode?: string};
    source?: string;
    type?: string;
  };
  const isLegacy =
    message.source === "thor-dashboard" &&
    message.type === "thor-app-bridge:appearance";
  const isModern =
    message.namespace === "thorcommerce:app-bridge" &&
    message.source === "dashboard" &&
    message.type === "appearance:update";
  if (!isLegacy && !isModern) return null;

  const colorMode = message.payload?.colorMode;
  return colorMode === "dark" || colorMode === "light" ? colorMode : null;
}

function requestDashboardAppearance(targetOrigin = dashboardOrigin()): void {
  if (window.parent === window) return;

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
    targetOrigin ?? "*",
  );
  window.parent.postMessage(
    {
      source: "thor-app-bridge",
      type: "thor-app-bridge:appearance-request",
    },
    targetOrigin ?? "*",
  );
}

function useDashboardAppearance(
  initialAppearance: AppAppearance,
  allowCachedAppearance: boolean,
  routeKey: string,
): AppAppearance {
  const [appearance, setAppearance] = useState(initialAppearance);

  useHydratedLayoutEffect(() => {
    if (!allowCachedAppearance) return;

    try {
      const cachedAppearance = window.localStorage.getItem(
        APPEARANCE_STORAGE_KEY,
      );
      if (cachedAppearance === "dark" || cachedAppearance === "light") {
        setAppearance(cachedAppearance);
      }
    } catch {
      // Storage can be unavailable in privacy-restricted embedded contexts.
    }
  }, [allowCachedAppearance]);

  useEffect(() => {
    if (window.parent === window) return;

    const parentOrigin = dashboardOrigin();
    const handleMessage = (event: MessageEvent) => {
      if (event.source !== window.parent) return;
      if (parentOrigin && event.origin !== parentOrigin) return;

      const nextAppearance = appearanceFromMessage(event.data);
      if (!nextAppearance) return;

      setAppearance(nextAppearance);
      try {
        window.localStorage.setItem(APPEARANCE_STORAGE_KEY, nextAppearance);
      } catch {
        // Storage can be unavailable in privacy-restricted embedded contexts.
      }
    };

    window.addEventListener("message", handleMessage);
    requestDashboardAppearance(parentOrigin);
    const retries = [100, 500].map((delay) =>
      window.setTimeout(() => requestDashboardAppearance(parentOrigin), delay),
    );

    return () => {
      window.removeEventListener("message", handleMessage);
      retries.forEach((timer) => window.clearTimeout(timer));
    };
  }, [routeKey]);

  return appearance;
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
  const serverAppearance = rootData?.appearance ?? null;
  const initialAppearance = serverAppearance ?? "light";
  const appearance = useDashboardAppearance(
    initialAppearance,
    serverAppearance === null,
    location.pathname,
  );
  const initialBackground =
    initialAppearance === "dark" ? "#0d1117" : "#ffffff";

  useEffect(() => {
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
