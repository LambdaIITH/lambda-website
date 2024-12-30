import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-sphere-demo.vercel.app",
  // renderers: ["@astrojs/renderer-react"],
  integrations: [
    mdx(),
    sitemap(),
    react({
      // experimentalReactChildren: true,
      include: ["**/react/*"],
    }),
    solidJs({
      include: ["**/solid/*"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
