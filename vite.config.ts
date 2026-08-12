import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [react(), tailwindcss(), basicSsl()],
  server: {
    // Serve over HTTPS so the File System Access API works when the app is
    // reached from another machine (e.g. https://<host-ip>:5173). A
    // self-signed cert is generated on the fly; accept the browser warning.
    host: true,
    https: true,
  },
});