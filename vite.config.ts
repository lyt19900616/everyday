import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import pxtovw from 'postcss-px-to-viewport'

const loder_pxtovw = pxtovw({
//这里是设计稿宽度 自己修改
  viewportWidth: 1920,
  viewportUnit: 'vw'
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  css: {
    postcss: {
      plugins: [loder_pxtovw]
    },
    preprocessorOptions: {
      scss: {
        additionalData: "@use './src/style/var.scss' as varcss;"
      }
    }
  },
})
