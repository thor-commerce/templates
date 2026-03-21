import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  ssr: true,
  future: {
    v8_viteEnvironmentApi: true
  }
} satisfies Config;