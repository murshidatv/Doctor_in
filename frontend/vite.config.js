import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  gridTemplateColumns:{
    'auto':'repeat(auto-fill,minmax(200px,1fr))'
  },
  plugins: [
    react(),
     tailwindcss()],
})
