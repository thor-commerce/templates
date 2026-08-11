import { reactRouter } from "@react-router/dev/vite";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const require = createRequire(import.meta.url);
const requireFromPrimer = createRequire(require.resolve("@primer/react"));
const primerLiveRegionNodeCjsEntry = requireFromPrimer.resolve(
  "@primer/live-region-element",
);
const primerLiveRegionSsrEntry = resolve(
  dirname(primerLiveRegionNodeCjsEntry),
  "../../esm/node/index.js",
);

// Primer exposes separate browser and Node entry points. Cloudflare's Vite SSR
// environment otherwise resolves the browser entry, which accesses HTMLElement
// at module evaluation time and crashes before the app can render.
const primerLiveRegionSsr: Plugin = {
  name: "primer-live-region-ssr",
  enforce: "pre",
  resolveId(source, _importer, options) {
    if (
      source === "@primer/live-region-element" &&
      (options?.ssr || this.environment.name === "ssr")
    ) {
      return primerLiveRegionSsrEntry;
    }
  },
};

export default defineConfig({
  plugins: [primerLiveRegionSsr, reactRouter(), tsconfigPaths()],
  environments: {
    ssr: {
      optimizeDeps: {
        esbuildOptions: {
          plugins: [
            {
              name: "primer-live-region-ssr",
              setup(build) {
                build.onResolve(
                  { filter: /^@primer\/live-region-element$/ },
                  () => ({ path: primerLiveRegionSsrEntry }),
                );
              },
            },
          ],
        },
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('@primer/react') || id.includes('root')) {
            return 'root';
          }
        },
      },
    },
  },
  ssr: {
    noExternal: ["@primer/react"],
  },
  // use blow if you're testing with ngrok or another tunneling service and need to allow requests from the tunnel url
  server: {
    allowedHosts: [".ngrok-free.app"]
  }
});
