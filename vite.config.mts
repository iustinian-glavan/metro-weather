import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
    react({
      jsxRuntime: "classic",
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "WeatherWidget",
      fileName: "weather-widget",
    },
    rollupOptions: {
      external: ["react", "react-dom", "goober"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          goober: "goober",
        },
      },
    },
  },
});
