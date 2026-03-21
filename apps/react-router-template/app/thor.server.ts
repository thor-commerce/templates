import "@thor-commerce/thor-app-react-router/adapters/node";
import {
    MemorySessionStorage,
    thorApp,
} from "@thor-commerce/thor-app-react-router/server";


const thor = thorApp({
    // The client ID of your app. This is required for authentication and must match the client ID configured in your app settings on the Thor Partner Dashboard.
    clientId: process.env.THOR_APP_CLIENT_ID || "",
    //The client secret is only required if your app needs to make authenticated requests to the Thor API. If your app only needs to authenticate users and doesn't need to make authenticated requests to the Thor API, you can leave this blank.
    clientSecret: process.env.THOR_APP_CLIENT_SECRET || "",
    // The scopes your app needs to function. This should match the scopes configured in your app settings on the Thor Partner Dashboard.
    scopes: process.env.THOR_APP_SCOPES?.split(","),
    // The URL of your app. This is required for authentication and must match the URL configured in your app settings on the Thor Partner Dashboard.
    appUrl: process.env.THOR_APP_URL || "",
    // For development, we can use in-memory session storage. In production, you should use a more robust solution.
    sessionStorage: new MemorySessionStorage(),
});

export default thor;
export const addDocumentResponseHeaders = thor.addDocumentResponseHeaders;
export const authenticate = thor.authenticate;
export const sessionStorage = thor.sessionStorage;
