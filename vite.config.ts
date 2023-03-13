import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     external: ['react', 'react-dom'],
  //     output: {
  //       globals: {
  //         react: 'React',
  //       },
  //     }
  //   },
  // },
  appType: 'mpa',
  plugins: [react()],
  server:{
    port: 6969,
  },
})
