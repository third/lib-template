import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), libInjectCss(), dts({ include: ['lib'] })],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            formats: ['es'],
        },
        copyPublicDir: false,
        rollupOptions: {
            external: ['react', 'react/jsx-runtime'],
        },
    },
});
