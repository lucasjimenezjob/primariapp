import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // El bundle es grande sobre todo por el contenido (tarjetas y lecciones), que es texto y comprime bien.
  build: { chunkSizeWarningLimit: 1500 },
});
