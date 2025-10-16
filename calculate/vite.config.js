import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'calc',
      filename: 'remoteEntry.js',
      exposes: {
        './Calc': './src/Calc.jsx',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        zustand: { singleton: true }, // share store
      },
    }),
  ],
  server: { port: 5001, cors: true },
  build: { target: 'esnext', cssCodeSplit: false },
})
