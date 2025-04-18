import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      '@assests': path.resolve(__dirname, 'src/assests'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@navigation': path.resolve(__dirname, 'src/navigation'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
});
