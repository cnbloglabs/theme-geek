import { defineConfig } from 'vite'
import { IgnorePublicPlugin } from 'vite-plugin-ignore-public'

export default defineConfig(({ command, mode }) => ({
  plugins: [
    IgnorePublicPlugin()
  ],
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
    minify: 'terser',
    cssCodeSplit: true,
    emptyOutDir: true,
    brotliSize: true,
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
}))
