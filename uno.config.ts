import { defineConfig, presetIcons, presetWebFonts, presetUno } from 'unocss'
import presetToken from 'unocss-preset-token'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {}
    }),
    presetIcons({
      cdn: 'https://esm.sh/',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ]
})
