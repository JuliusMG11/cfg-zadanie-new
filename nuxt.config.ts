// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {

    },
    modules: [
        // ...
        '@pinia/nuxt',
      ],
    css: [
        '@/assets/scss/main.scss',
        '@/assets/css/main.css',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/base/_variables.scss";',
                },
            },
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
