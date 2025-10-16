import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        remote: "http://localhost:5001/dist/assets/remoteEntry.js", // hoặc remoteEntry.js nếu không nằm trong assets
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5000,
  },
build: {
  target: "esnext",      // Giữ cú pháp ESM
  minify: false,         // Dễ debug
  cssCodeSplit: false,   // Gộp CSS chung để host dễ load
},
});
