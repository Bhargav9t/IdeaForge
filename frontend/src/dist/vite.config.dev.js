import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // Expose to local network
    open: true, // Automatically open the browser
    watch: {
      // Vital for OneDrive users: Forces polling to detect changes
      usePolling: true,
      interval: 100,
    },
    // Clearer error reporting in the browser
    hmr: {
      overlay: true,
    },
  },
  resolve: {
    alias: {
      // Standardizes paths to avoid the "../" confusion
      "@": "/src",
    },
  },
  // Ensure the build output goes to the correct folder
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
