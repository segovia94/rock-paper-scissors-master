import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/js/main.js',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit-element/
    }
  }
})

