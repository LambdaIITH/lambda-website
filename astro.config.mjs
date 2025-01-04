import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solid from "@astrojs/solid-js";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-sphere-demo.vercel.app",
  integrations: [
    react({
      include: ["**/react/*"],
    }),
    solid({
      include: ["**/solid/*"],
    }),
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
});

