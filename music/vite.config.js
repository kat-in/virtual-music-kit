import { defineConfig } from 'vite'

export default defineConfig({
  base: '/virtual-music-kit/',  
  build: {
    sourcemap: true,
    minify: false,
    outDir: 'dist',
  }
})