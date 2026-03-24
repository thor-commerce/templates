import {
    ApiVersion,
    LogSeverity,
    Session,
    thorApp,
    type SessionStorage,
} from "@thor-commerce/thor-app-react-router/server";


export class MemorySessionStorage implements SessionStorage {
    private sessions: Record<string, Session> = {};

    public async storeSession(session: Session): Promise<boolean> {
        this.sessions[session.id] = session;
        return true;
    }

    public async loadSession(id: string): Promise<Session | undefined> {
        return this.sessions[id] ?? undefined;
    }

    public async deleteSession(id: string): Promise<boolean> {
        delete this.sessions[id];
        return true;
    }

    public async deleteSessions(ids: string[]): Promise<boolean> {
        for (const id of ids) {
            delete this.sessions[id];
        }

        return true;
    }

    public async findSessionsByProject(project: string): Promise<Session[]> {
        return Object.values(this.sessions).filter(
            (session) => session.project === project,
        );
    }
}

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
    apiVersion: ApiVersion.April25,
    logger: {
        level: LogSeverity.Debug,
        httpRequests: true,
        timestamps: true,
        log: (severity, message) => {
            console.log(`[thor:${severity}] ${message}`);
        },
    }
});

export default thor;
export const addDocumentResponseHeaders = thor.addDocumentResponseHeaders;
export const authenticate = thor.authenticate;
export const sessionStorage = thor.sessionStorage;
