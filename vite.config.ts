import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // For username.github.io, use '/' instead of repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
