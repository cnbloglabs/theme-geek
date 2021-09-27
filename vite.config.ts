import { defineConfig } from 'vite'
import { injectHtml } from 'vite-plugin-html'

export default defineConfig({
  server: {
    open: true,
    port: 8080,
  },
  build: {},
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
