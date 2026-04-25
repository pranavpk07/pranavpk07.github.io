import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pranavpk07.github.io/', // Update this to your repo name if it's different. If deploying to username.github.io, this should be '/'
})
