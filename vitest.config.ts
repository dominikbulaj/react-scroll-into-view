import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      // https://vitest.dev/config/browser/playwright
      instances: [{ browser: "chromium" }],
    },
  },
});
