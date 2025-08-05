import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', 
      manifest: {
        name: 'Trailer Hub',
        short_name: 'THub',
        description: 'Watch trailers and discover trending movies with Trailer Hub',
        lang: 'en',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ff0033',
        orientation: 'portrait',
        theme_color: '#333333',
        icons: [
          {
              src: "/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png"
          },
          {
              src: "/android-chrome-512x512.png",
              sizes : "512x512",
              type: "image/png"
          }
      ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,webp,jpg}'],
        cleanupOutdatedCaches: true,
      },
    })
  ],
})
