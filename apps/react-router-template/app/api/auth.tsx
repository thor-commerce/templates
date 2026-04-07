import { boundary } from "@thor-commerce/thor-app-react-router/server";
import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { authenticate } from "~/thor.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
