import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensures the build output goes into the `dist` folder
    chunkSizeWarningLimit: 500, // Adjusts the chunk size warning threshold
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5001", // Backend API URL
        changeOrigin: true,
      },
    },
  },
});
