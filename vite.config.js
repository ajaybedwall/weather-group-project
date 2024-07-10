import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // This ensures the base path is the root
  plugins: [react()]
});
