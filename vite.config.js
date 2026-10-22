import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// Multi-página: cada protótipo e cada mockup é uma entrada própria.
// Para acrescentar páginas a um protótipo (ex.: prototypes/f/empreendimentos/index.html),
// acrescentar a entrada aqui.
export default defineConfig({
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        hub: resolve(__dirname, 'index.html'),
        f: resolve(__dirname, 'prototypes/f/index.html'),
        g: resolve(__dirname, 'prototypes/g/index.html'),
        'g-propostas-construcoes': resolve(__dirname, 'prototypes/g/propostas/construcoes/index.html'),
        'mockup-f': resolve(__dirname, 'mockups/F-BC.html'),
        'mockup-g': resolve(__dirname, 'mockups/G-BD.html'),
      },
    },
  },
})
