import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ✅ permite que sea accesible en la red local
    port: 5173, // 🔢 puerto fijo
    open: false, // no abre automáticamente el navegador
  },
});
