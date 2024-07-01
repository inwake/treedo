import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {global: 'window'},
  esbuildOptions: {
    mainFields: 'module',
    resolveExtensions: ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.json']
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.json'],
    alias: {'react-native': 'react-native-web'}
  },
  plugins: [react({runtime: 'automatic'})]})
