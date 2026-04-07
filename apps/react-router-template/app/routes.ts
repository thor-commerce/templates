import {
    type RouteConfig,
    index,
    prefix,
    route,
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("products/:id", "routes/product-detail/product-detail.tsx"),
    ...prefix("api", [
        route("webhook-handler", "api/webhook-handler.tsx"),
        route("auth/*", "api/auth.tsx"),
    ]),
] satisfies RouteConfig;
