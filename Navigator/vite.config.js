// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Navigator/', // Ensure this matches your deployment URL
  plugins: [react()]
});
