import { defineConfig } from 'vite'

export default defineConfig({
  base: '/virtual-music-kit/music',  
  build: {
    sourcemap: true,
    minify: false,
    outDir: 'dist',
  }
})