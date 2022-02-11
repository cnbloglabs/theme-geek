import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
  server: {
    open: true,
    port: 8080,
  },
  build: {
    cssCodeSplit: true,
    emptyOutDir: true,
    terserOptions: {
      format: {
        comments: false,
      },
    },
    lib: {
      formats: ['iife'],
      entry: './src/main.js',
      name: 'theme',
      fileName: 'index',
    },
  },
})
