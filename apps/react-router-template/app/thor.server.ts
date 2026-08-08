import {
    LogSeverity,
    thorApp,
} from "@thor-commerce/thor-app-react-router/server";

const scopes = process.env.THOR_APP_SCOPES
    ?.split(",")
    .map((scope) => scope.trim())
    .filter(Boolean);

if (!scopes?.length) {
    throw new Error(
        "THOR_APP_SCOPES must list the scopes published in the app's active version.",
    );
}

const thor = thorApp({
    // The client ID of your app. This is required for authentication and must match the client ID configured in your app settings on the Thor Partner Dashboard.
    clientId: process.env.THOR_APP_CLIENT_ID || "",
    //The client secret is only required if your app needs to make authenticated requests to the Thor API. If your app only needs to authenticate users and doesn't need to make authenticated requests to the Thor API, you can leave this blank.
    clientSecret: process.env.THOR_APP_CLIENT_SECRET || "",
    // These scopes are also used to invalidate stored sessions after the app's permissions change.
    // Keep them in sync with the scopes published in the app's active version.
    scopes,
    // The URL of your app. This is required for authentication and must match the URL configured in your app settings on the Thor Partner Dashboard.
    appUrl: process.env.THOR_APP_URL || "",
    // Optional overrides for development or enterprise Thor installations.
    // Production defaults are used when these variables are not set.
    apiBaseUrl: process.env.THOR_API_BASE_URL || undefined,
    adminBaseUrl: process.env.THOR_ADMIN_BASE_URL || undefined,
    appBridgeUrl: process.env.THOR_APP_BRIDGE_URL || undefined,
    // Session storage defaults to process-local memory for development.
    // Configure a persistent SessionStorage adapter before production.
    authPathPrefix: "/api/auth",
    logger: {
        level: LogSeverity.Debug,
        httpRequests: true,
        timestamps: true,
        log: (severity, message) => {
            console.log(`[thor:${severity}] ${message}`);
        },
    },
});

export default thor;
export const addDocumentResponseHeaders = thor.addDocumentResponseHeaders;
export const registerWebhooks = thor.registerWebhooks;
export const authenticate = thor.authenticate;
export const sessionStorage = thor.sessionStorage;
