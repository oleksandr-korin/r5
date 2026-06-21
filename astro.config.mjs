import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rokytnyi5.com",
  output: "static",
  integrations: [sitemap()],
  prefetch: { prefetchAll: false, defaultStrategy: "hover" },
  build: { inlineStylesheets: "auto" },
});
