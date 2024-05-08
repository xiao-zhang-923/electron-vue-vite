import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

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
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/styles/index.scss";
          `
        }
      }
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, 'src/renderer/components/icons/svg')],
        symbolId: 'icon-[dir]-[name]', // 注意这里的icon- 前缀我在svgIcon.vue中写死了的，如果调整了记得同步改一下
        // 有特殊需求可不进行该配置
        // svgoOptions: {
        //   // 删除一些填充的属性
        //   plugins: [
        //     {
        //       name: 'removeAttrs',
        //       params: { attrs: ['class', 'data-name', 'fill', 'stroke'] }
        //     },
        //     // 删除样式标签
        //     'removeStyleElement'
        //   ]
        // }
      })
    ]
  }
})
