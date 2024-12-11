import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      // eslint-disable-next-line no-undef
      '@src': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
})
