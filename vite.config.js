import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ['**/*.JPG'],
  resolve: {
    alias: {
      // Alias `@` to `/src`
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
})
