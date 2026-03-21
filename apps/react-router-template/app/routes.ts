import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("products/:id", "routes/product-detail/product-detail.tsx")] satisfies RouteConfig;
