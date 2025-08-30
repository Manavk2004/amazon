import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    proxy: {
      '/payments': {
        target: "http://127.0.0.1:5001/fir-e077c/us-central1/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/payments/, '/payments'),
      },
    },
  },
})