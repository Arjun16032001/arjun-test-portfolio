import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/arjun-test-portfolio/',
  build: {
    sourcemap: false,          // ❌ removes extra .map files
    minify: 'esbuild',         // ✅ fast + smaller output
    assetsInlineLimit: 4096,   // ✅ reduces tiny file generation
    rollupOptions: {
      output: {
        manualChunks: undefined // 🔥 disables splitting → fewer files
      }
    }
  }
})