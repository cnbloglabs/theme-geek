import { defineConfig } from 'vite'
import { injectHtml } from 'vite-plugin-html'

export default defineConfig({
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
      entry: './src/index.js',
      name: 'geek',
      fileName: 'geek',
    },
  },
  plugins: [
    {
      ...injectHtml({
        injectData: {
          injectScript: `<script type="module" src="../../src/index.js"></script>`,
        },
      }),
      apply: 'serve',
    },
  ],
})
