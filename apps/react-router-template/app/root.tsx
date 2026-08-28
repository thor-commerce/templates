import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
  useRouteError,
  type HeadersFunction,
} from "react-router";
import { useEffect } from "react";

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

function appearanceFromCookie(request: Request): AppAppearance | null {
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
  const initialAppearance = clientAppearanceFallback(
    rootData?.appearance ?? "light",
  );
  const appearance = useAppAppearance(initialAppearance);
  const initialBackground =
    initialAppearance === "dark" ? "#0d1117" : "#ffffff";

  useEffect(() => {
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
    appearance: appearanceFromCookie(request),
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
