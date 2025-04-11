// @ts-check
import { defineConfig } from "astro/config";

import vercelStatic from "@astrojs/vercel/static";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://www.phpeterle.com/",
  prefetch: true,
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "github-light",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],

      langAlias: {
        cjs: "javascript",
      },

      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
