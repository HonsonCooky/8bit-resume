// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'

// Utilities
import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'node:url'

export default defineConfig({
    plugins: [
        Vue({
            template: {transformAssetUrls},
        }),
        Vuetify(),
        Components(),
        ViteFonts({
            google: {
                families: [{
                    name: 'JetBrains Mono',
                    styles: 'ital,wght@0,100..800',
                }],
            },
        }),
    ],
    optimizeDeps: {
        exclude: ['vuetify'],
    },
    define: {'process.env': {}},
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    },
    server: {
        port: 3000,
    },
    css: {
        preprocessorOptions: {
            sass: {
                api: 'modern-compiler',
            },
            scss: {
                api: 'modern-compiler',
            },
        },
    },
})
