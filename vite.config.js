import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [
    react(),
],
resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
},
server: {
    open: true,
    port: 3000
}
})

