import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  assetsInclude: ["**/*.md"],
  rollupInputOptions: {
    treeshake: true,
    plugins: [commonjs(), nodeResolve()],
    output: {
      manualChunks: {
        "material-ui": ["@material-ui/core"],
      },
    },
  },

  rollupOutputOptions: {
    plugins: [visualizer()],
  },

  module: {
    rules: [
      {
        test: /\.md$/,
        use: "raw-loader",
      },
    ],
  },

  build: {
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});

// npm install rollup-plugin-commonjs rollup-plugin-node-resolve rollup-plugin-visualizer --save-dev

// npm install @rollup/plugin-commonjs --save-dev
// npm install @rollup/plugin-node-resolve --save-dev
// npm install rollup-plugin-visualizer --save-dev
