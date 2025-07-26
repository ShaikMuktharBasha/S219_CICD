import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/S219_CICD/', // <-- Add this line
  plugins: [react()],
});