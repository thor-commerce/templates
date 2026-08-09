import { boundary } from "@thor-commerce/thor-app-react-router/server";
import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { authenticate } from "~/thor.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

// Keep this route in React Router's document pipeline. Without a component it
// becomes a resource route and thrown App Bridge responses are sent as raw JSON.
export default function AuthRoute() {
  return null;
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
