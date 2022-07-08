import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://jrag-dev.github.io/buscador-bebidas-react/',
  server: {
    host: '0.0.0.0'     // ← new content ←
  },
  build: {       
    outDir: 'dist',
  }
})

