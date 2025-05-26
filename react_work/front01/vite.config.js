import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
      VitePWA({
          registerType: 'prompt',
          includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'robots.txt'],
          manifest: {
              "name": "StarBus",
              "short_name": "StarBus",
              "description":"실시간 버스 정류장을 확인 할 수 있습니다.",
              "icons": [
                  {
                      "src": "/icons/icon.svg",
                      "sizes": "any",
                      "type": "image/png"
                  }
              ],
              "start_url": "/",
              "display": "standalone",
              "background_color": "#ffffff",
              "theme_color": "#000000"
          }
      }),
    ],
})
