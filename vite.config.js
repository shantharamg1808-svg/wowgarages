import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: 'chrome' // Forces Vite to use Google Chrome
  }
});
