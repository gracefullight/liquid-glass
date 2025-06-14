import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "plugin.ts"], // 'plugin.ts' 추가
  dts: true,
  format: ["esm", "cjs"],
  splitting: true,
  outDir: "dist",
  loader: {
    ".css": "file",
  },
});
