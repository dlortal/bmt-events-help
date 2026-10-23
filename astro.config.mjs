import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site } from "./site.config.ts";

export default defineConfig({
  site: `https://${site.host}`,
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: site.indexable === false ? [] : [sitemap({ filter: (page) => new URL(page).pathname !== "/search/" })],
});
