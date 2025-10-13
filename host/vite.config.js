import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        // DEV MODE: trỏ thẳng đến remote dev server
        remote: "http://localhost:5001/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: false, // bỏ check version dev
        },
        "react-dom": {
          singleton: true,
          requiredVersion: false,
        },
      },
      dev: true, // bắt buộc khi chạy dev để load remoteEntry từ dev server
    }),
  ],
  server: {
    port: 5000,
    cors: true, // đảm bảo remoteEntry có thể load cross-origin
  },
  build: {
    target: "esnext",
  },
});
