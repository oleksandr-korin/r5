import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://rokytnyi5.com",
  output: "static",
  prefetch: { prefetchAll: false, defaultStrategy: "hover" },
  build: { inlineStylesheets: "auto" },
});
