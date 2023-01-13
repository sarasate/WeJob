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
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      serialize(item) {
        if (/dev/.test(item.url) || /jobs/.test(item.url)) {
          item.changefreq = "daily";
          item.lastmod = new Date();
          item.priority = 1.0;
        }
        return item;
      },
    }),
  ],
});
