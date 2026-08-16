import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // 'prompt' (not 'autoUpdate'): a new service worker installs in the
      // background but does NOT take over automatically — it waits for
      // the app to call updateSW() (see App.tsx's force-update button).
      // Auto-updating silently could swap the app out from under someone
      // mid-lesson; this way an update is only ever applied on an
      // explicit user action or a full fresh page load.
      registerType: 'prompt',
      manifest: false, // manifest.webmanifest is already hand-written in public/, not generated
      includeAssets: ['favicon.svg', 'icon-192.png', 'icon-512.png', 'icons.svg'],
      workbox: {
        // Precache the built app shell (JS/CSS/HTML/icons) for offline
        // use. Lesson content is bundled into the main JS chunk (see
        // app changelog on total app size), so this alone makes full
        // lessons available offline once cached.
        globPatterns: ['**/*.{js,css,html,svg,png}'],
      },
    }),
  ],
  base: '/language-trainer-dev/',
})
