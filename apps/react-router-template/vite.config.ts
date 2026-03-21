import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: ["@primer/react"],
  },
  // use blow if you're testing with ngrok or another tunneling service and need to allow requests from the tunnel url
  server: {
    allowedHosts: [".ngrok-free.app"]
  }
});