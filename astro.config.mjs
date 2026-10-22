import { defineConfig } from "astro/config";
import { site } from "./site.config.ts";

export default defineConfig({
  site: `https://${site.host}`,
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
});
