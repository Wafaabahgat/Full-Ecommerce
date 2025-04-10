import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint({ cache: false })],
    base: '/',
    server: {
        host: true,
        strictPort: true,
        port: 3003,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            $: path.resolve(__dirname, './src/features'),
        },
    },

    build: {
        sourcemap: true,
          outDir: 'build',

    },
});
