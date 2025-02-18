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
        name: 'Movie Trailer',
        short_name: 'MT',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#333333',
      }
    })
  ],
})
