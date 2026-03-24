import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://pavankumardg.dev",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
