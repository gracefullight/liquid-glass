import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@liquid-glass/ui": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },
});
