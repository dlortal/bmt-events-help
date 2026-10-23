import type { APIRoute } from "astro";
import { site } from "../../site.config";
export const GET: APIRoute = () =>
  new Response(JSON.stringify({
    name: site.name, short_name: site.name,
    icons: [{ src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    theme_color: site.themeColor, background_color: site.themeColor, display: "browser",
  }), { headers: { "Content-Type": "application/manifest+json" } });
