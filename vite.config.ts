import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { webcrypto } from 'crypto';

if (!globalThis.crypto) {
  // @ts-ignore
  globalThis.crypto = webcrypto;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optional build configurations (if needed)
    sourcemap: true, // Enable source maps (useful for debugging)
  },
});
