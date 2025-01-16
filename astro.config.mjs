import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://wejob.dev",
  integrations: [tailwind()],
  // Generate sitemap
  sitemap: true,
});
