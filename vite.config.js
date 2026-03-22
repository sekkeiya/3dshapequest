import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/app/quest/',
  server: {
    host: 'localhost',
    port: 5178,
    strictPort: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'sekkeiya-global-panel': fileURLToPath(new URL('../040-sekkeiya/sekkeiya/packages/global-panel/src', import.meta.url))
    },
  },
})
