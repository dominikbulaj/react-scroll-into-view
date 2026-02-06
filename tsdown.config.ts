import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.tsx"],
  external: ["react", "react-dom"],
});
