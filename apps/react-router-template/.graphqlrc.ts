import { ApiType, thorCommerceApiProject } from "@thor-commerce/graphql-codegen-preset";
import type { IGraphQLConfig } from "graphql-config";



export default {
    projects: {
        default: thorCommerceApiProject({
            apiType: ApiType.Admin,
            documents: ["./app/**/*.{js,ts,jsx,tsx}", "./app/.server/**/*.{js,ts,jsx,tsx}"],
            outputDir: "./app/types",
        }),
    },
} satisfies IGraphQLConfig;



