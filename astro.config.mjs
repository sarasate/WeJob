import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://wejob.tech",
  server: {
    port: 9000,
  },
  integrations: [tailwind(), sitemap()],
});
