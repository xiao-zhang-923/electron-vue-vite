import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer/')
      }
    },
    css: {
      preprocessorOptions:{
        scss:{
          additionalData: `
          @import "@/styles/index.scss";
          `,
        }
      },
    },
    plugins: [vue()]
  }
})
