import { defineConfig } from "astro/config";
import { site } from "./src/config";

export default defineConfig({
  site: site.url,
  output: "static",
  build: {
    format: "directory"
  }
});
