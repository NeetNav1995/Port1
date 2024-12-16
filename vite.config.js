import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig({
  //base:"/",
  base:"/Port1/",
  plugins: [react()],
  APP_VERSION: JSON.stringify(process.env.APP_VERSION),
});
