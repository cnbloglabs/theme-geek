import { defineConfig } from 'vite'
import { injectHtml } from 'vite-plugin-html'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  server: {
    open: true,
    port: 8080,
  },
  build: {
    cssCodeSplit: true,
    emptyOutDir: true,
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
