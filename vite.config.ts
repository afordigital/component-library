import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

// interface VitestConfigExport extends UserConfig { test: InlineConfig }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  test: { globals: true, environment: 'jsdom' }
})
