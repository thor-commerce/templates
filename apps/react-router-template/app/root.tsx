import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  type HeadersFunction,
} from "react-router";

import "./app.css";

import type { Route } from "./+types/root";
import { authenticate } from "./thor.server";
import {
  AppProvider,
  useAppAppearance,
} from "@thor-commerce/thor-app-react-router/react";

import { BaseStyles, ThemeProvider } from "@primer/react";
import { boundary } from "@thor-commerce/thor-app-react-router/server";

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
  const appearance = useAppAppearance();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
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
  //ensure the user is authenticated as an admin before allowing access to the app
  await authenticate.admin(request);

  // eslint-disable-next-line no-undef
  return {
    clientId: process.env.THOR_APP_CLIENT_ID || "",
    appBridgeUrl: process.env.THOR_APP_BRIDGE_URL || undefined,
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
