import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default defineConfig([
    {
        name: 'app/files-to-lint',
        files: ['**/*.{js,mjs,jsx,vue}'],
    },

    globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/.vite/**']),

    js.configs.recommended,
    ...pluginVue.configs['flat/essential'],


    {
        plugins: { vue: pluginVue },
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

            'vue/multi-word-component-names': 'off',
            'vue/no-mutating-props': 'warn',
            'vue/html-indent': ['warn', 4],
            'vue/no-unused-vars': 'error',
            'vue/block-order': ['warn', { order: ['template', 'script', 'style'] }],
        }
    },

])
