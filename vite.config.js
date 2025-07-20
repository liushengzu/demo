import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { functionsScanner, copyFile } from "wpsjs/vite_plugins";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir:
      "C:\\Users\\liuqifeng\\AppData\\Roaming\\kingsoft\\wps\\jsaddons\\test_",
    emptyOutDir: true,
  },
  plugins: [
    copyFile({ src: "manifest.xml", dest: "manifest.xml" }),
    functionsScanner({
      inputJsPath: "js/functions.js",
      outputJsonPath: "functions.json",
      namespace: "HelloEt",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
  },
});
