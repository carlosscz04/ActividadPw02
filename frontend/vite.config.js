import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/adjust": "http://localhost:4000",
      "/reboot": "http://localhost:4000",
    },
  },
});