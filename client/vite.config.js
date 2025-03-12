import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3001,
        host: '127.0.0.1',
        open: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3001',
                secure: false,
                changeOrigin: true,
            },
        },
    },
});
