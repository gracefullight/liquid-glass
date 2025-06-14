import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  dts: true,
  format: ["esm", "cjs"],
  splitting: false,
  outDir: "dist",
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.jsxImportSource = "react";
  },
  banner: {
    js: '"use client";',
  },
  loader: {
    ".css": "file",
  },
});
