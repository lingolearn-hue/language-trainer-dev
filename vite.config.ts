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
        // Workbox's default precache limit is 2 MiB. The main JS chunk
        // crossed that threshold once enough lesson content had been
        // added (2.2 MB as of the C1 Media lesson), which made the
        // production build fail outright rather than just warn — not a
        // performance nit, a hard build-breaking error. Raised well
        // past current size to give headroom for the lesson content
        // that's still being added; if this app ever needs real
        // code-splitting for load-time reasons, that's a separate,
        // bigger change (see the Vite chunk-size warning in build
        // output for the same underlying growth, which this doesn't
        // address — only unblocks the PWA precache step specifically).
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      },
    }),
  ],
  base: '/language-trainer-dev/',
})
