import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site } from "./site.config.ts";

export default defineConfig({
  site: `https://${site.host}`,
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [sitemap({ filter: (page) => !page.includes("/search/") })],
});
