import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Allows you to use '@' instead of long relative paths like '../../../'
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5174, // THE FIX: Locked to 5174 for Version 2
    strictPort: true, // THE FIX: Forces Vite to fail if 5174 is busy instead of shifting
    host: true, // Useful for testing on mobile or sharing with teammates
    watch: {
      // Crucial for Windows/OneDrive: Forces Vite to check for file updates
      usePolling: true,
      interval: 100,
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
