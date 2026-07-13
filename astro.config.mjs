import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://pavandg.github.io/pavankumar-portfolio",
  base: "/pavankumar-portfolio/",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
