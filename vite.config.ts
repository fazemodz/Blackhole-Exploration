import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // test: {
  //   setupFiles: 'src/tests/Pageload.ts',
  // },
  appType: "mpa",
  plugins: [react()],
  server: {
    port: 6969,
  },
});
