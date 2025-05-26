import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";
/*autoUpdate는 푸쉬 자동알림 사용 못함*/
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.js',
    registerType: 'prompt',
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg}'],
      maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
    },
    manifest: {
    name:"알림",
      short_name:"알림앱",
      description:"알림이됩니다.",
      theme_color:"#ff3faa",
      background_color:"#ff3faa",
      display:"standalone",
      start_url:"/",
      icons : [
        {
          "src": "icons/icon.svg",
          "sizes": "any",
          "type": "image/png"
        }
      ]
    }
  })
  ],
})
