import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js", // tên file mà host sẽ load
      exposes: {
        "./Button": "./src/Button.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5001,
    cors: true,
  },
  build: {
    target: "esnext", // Giữ cú pháp ESM
    minify: false, // Dễ debug
    cssCodeSplit: false, // Gộp CSS chung để host dễ load
  },
});
